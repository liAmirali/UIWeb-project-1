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

    def to_representation(self, value):
        return {
            "id": value.id,
            "type": value.type,
            "file": value.file.url,
            "alt": value.alt
        }


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


class AddToCartSerializer(serializers.ModelSerializer):
    product_id = serializers.IntegerField()
    color_id = serializers.IntegerField(required=False)
    quantity = serializers.IntegerField(default=1)

    class Meta:
        model = CartItem
        fields = ['product_id', 'color_id', 'quantity']


class CartSerializer(serializers.ModelSerializer):
    cart_items = CartItemSerializer(many=True, read_only=True)
    discount = DiscountSerializer(read_only=True)
    total_cost = serializers.DecimalField(
        source='get_total_cost', max_digits=10, decimal_places=2)
    discount_value = serializers.DecimalField(
        source='get_discount_value', max_digits=10, decimal_places=2)
    net_price = serializers.DecimalField(
        source='get_net_price', max_digits=10, decimal_places=2)

    class Meta:
        model = Cart
        fields = ['cart_items', 'discount', 'total_cost',
                  'discount_value', 'net_price']


class CartItemAddRemoveSerializer(serializers.Serializer):
    cart_item_id = serializers.IntegerField()
    quantity = serializers.IntegerField()
