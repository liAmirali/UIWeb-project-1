from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response

from django.shortcuts import get_object_or_404

from .serializers import ProductSerializer, CartItemSerializer, CartSerializer, CartItemAddRemoveSerializer
from .models import Product, Cart, Color, CartItem, Discount


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
    
    def validate_cart_item(self, cart_item_id):
        # Ensure the cart item belongs to the user's cart
        cart = self.get_cart()
        cart_item = get_object_or_404(CartItem, id=cart_item_id, cart=cart)
        return cart_item

    @action(detail=False, methods=['post'])
    def increment_item(self, request):
        serializer = CartItemAddRemoveSerializer(data=request.data)

        if serializer.is_valid():
            cart_item_id = serializer.validated_data['cart_item_id']
            quantity = serializer.validated_data['quantity']

            cart_item = self.validate_cart_item(cart_item_id)
            cart_item.quantity += quantity
            cart_item.save()

            return Response({'status': 'item added'}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def decrement_item(self, request):
        serializer = CartItemAddRemoveSerializer(data=request.data)
        
        if serializer.is_valid():
            cart_item_id = serializer.validated_data['cart_item_id']
            quantity = serializer.validated_data['quantity']

            cart_item = self.validate_cart_item(cart_item_id)
            
            if cart_item.quantity > quantity:
                cart_item.quantity -= quantity
                cart_item.save()
            else:
                cart_item.delete()

            return Response({'status': 'item decremented'}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['post'])
    def clear_cart(self, request):
        cart = self.get_cart()
        cart.cart_items.all().delete()
        return Response({'status': 'cart cleared'}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'])
    def apply_discount(self, request):
        cart = self.get_cart()
        discount_code = request.data.get('discount_code')

        if not discount_code:
            return Response({'error': 'Discount code is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            discount = Discount.objects.get(code=discount_code)
        except Discount.DoesNotExist:
            return Response({'error': 'Invalid discount code'}, status=status.HTTP_404_NOT_FOUND)

        cart.discount = discount
        cart.save()

        return Response({'status': 'discount applied'}, status=status.HTTP_200_OK)
