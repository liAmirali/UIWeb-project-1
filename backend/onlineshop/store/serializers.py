from rest_framework import serializers
from .models import Product, Color


class ColorSerializer(serializers.ModelSerializer):
    extra_cost = serializers.DecimalField(
        max_digits=10, decimal_places=2, coerce_to_string=False)

    class Meta:
        model = Color
        fields = ["id", "name", "hex_code", "extra_cost"]


class ProductSerializer(serializers.ModelSerializer):
    price = serializers.DecimalField(
        source='get_latest_price', max_digits=10, decimal_places=2, coerce_to_string=False)
    colors = ColorSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'rating', 'price', 'colors']
