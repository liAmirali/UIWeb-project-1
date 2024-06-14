from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response

from django.shortcuts import get_object_or_404

from .serializers import ProductSerializer, CartItemSerializer, CartSerializer
from .models import Product, Cart, Color, CartItem


class ProductListView(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    # Ensure that the user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    def get_cart(self):
        # Ensure the user has a cart
        cart, created = Cart.objects.get_or_create(user=self.request.user)
        return cart

    def list(self, request):
        cart = self.get_cart()
        serializer = CartSerializer(cart)
        return Response(serializer.data)

    @action(detail=False, methods=['post'])
    def add_item(self, request):
        cart = self.get_cart()
        serializer = CartItemSerializer(data=request.data)

        if serializer.is_valid():
            product = get_object_or_404(
                Product, id=serializer.validated_data['product'].id)
            color = serializer.validated_data.get('color')
            if color:
                color = get_object_or_404(Color, id=color.id)

            cart_item, created = CartItem.objects.get_or_create(
                cart=cart,
                product=product,
                color=color,
                defaults={'quantity': serializer.validated_data['quantity']}
            )

            if not created:
                cart_item.quantity += serializer.validated_data['quantity']
                cart_item.save()

            return Response({'status': 'items added'}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['post'])
    def clear_cart(self, request):
        cart = self.get_cart()
        cart.cart_items.all().delete()
        return Response({'status': 'cart cleared'}, status=status.HTTP_200_OK)
    
    @action(detail=False, methods=['post'])
    def decrement_item(self, request):
        cart = self.get_cart()
        serializer = CartItemSerializer(data=request.data)
        
        if serializer.is_valid():
            product = get_object_or_404(Product, id=serializer.validated_data['product'].id)
            color = serializer.validated_data.get('color')
            if color:
                color = get_object_or_404(Color, id=color.id)

            try:
                cart_item = CartItem.objects.get(cart=cart, product=product, color=color)
                quantity_to_decrease = serializer.validated_data['quantity']
                if cart_item.quantity > quantity_to_decrease:
                    cart_item.quantity -= quantity_to_decrease
                    cart_item.save()
                else:
                    cart_item.delete()

                return Response({'status': 'item decremented'}, status=status.HTTP_200_OK)
            except CartItem.DoesNotExist:
                return Response({'error': 'Item not found in cart'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
