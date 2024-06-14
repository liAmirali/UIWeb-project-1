from rest_framework import serializers
from .models import Product, Color, Cart, CartItem, Discount, Media


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ["id", "name", "hex_code", "extra_cost"]


class DiscountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discount
        fields = ['code', 'type', 'value', 'max_price_limit',
                  'applicable_products', 'applicable_categories']


class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = ['id', 'type', 'file', 'alt']


class ProductSerializer(serializers.ModelSerializer):
    price = serializers.DecimalField(
        source='get_latest_price', max_digits=10, decimal_places=2)
    colors = ColorSerializer(many=True, read_only=True)
    media = MediaSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'rating',
                  'price', 'colors', 'media', 'category']


class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    color = ColorSerializer(read_only=True)

    class Meta:
        model = CartItem
        fields = ['id', 'product', 'color', 'quantity']


class CartSerializer(serializers.ModelSerializer):
    cart_items = CartItemSerializer(many=True, read_only=True)
    discount = DiscountSerializer(read_only=True)

    class Meta:
        model = Cart
        fields = ['cart_items', 'discount']


class CartItemAddRemoveSerializer(serializers.Serializer):
    cart_item_id = serializers.IntegerField()
    quantity = serializers.IntegerField()
