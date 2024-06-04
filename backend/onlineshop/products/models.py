from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

from user.models import User


class Cart(models.Model):
    discount = models.ForeignKey(
        'Discount', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self) -> str:
        return f"{self.user}'s cart"


class CartItem(models.Model):
    cart = models.ForeignKey(
        Cart, on_delete=models.CASCADE, related_name='cart_items')
    quantity = models.IntegerField(validators=[MinValueValidator(0)])
    product = models.ForeignKey('Product', on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"{self.product} (x{self.quantity})"


class Discount(models.Model):
    class DiscountType(models.TextChoices):
        VALUE = "VALUE"
        PERCENTAGE = "PERCENTAGE"

    code = models.CharField(max_length=8)
    type = models.CharField(
        max_length=10, choices=DiscountType, default=DiscountType.VALUE)
    value = models.FloatField()
    max_price_limit = models.FloatField(
        validators=[MinValueValidator(0)], null=True)

    applicable_products = models.ManyToManyField('Product')
    applicable_categories = models.ManyToManyField('Category')

    def __str__(self) -> str:
        return f"Discount {self.code}"


class Product(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=520)
    rating = models.FloatField(
        validators=[MinValueValidator(0), MaxValueValidator(5)], default=0)

    def get_latest_price(self):
        latest_price_entry = self.prices.order_by('-date').first()
        return latest_price_entry.price if latest_price_entry else None

    def __str__(self) -> str:
        return self.title


class ProductPriceHistory(models.Model):
    date = models.DateTimeField(auto_now_add=True, db_index=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, validators=[
                                MinValueValidator(0)])
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="prices")

    class Meta():
        verbose_name_plural = "Product prices history"

    def __str__(self) -> str:
        return f"{self.product} priced {self.price} on {self.date}"


class Color (models.Model):
    name = models.CharField(max_length=50)
    hex_code = models.CharField(max_length=7)
    extra_cost = models.DecimalField(max_digits=10, decimal_places=2)
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='colors')

    def __str__(self) -> str:
        return f"{self.name} ({self.hex_code})"


class Category(models.Model):
    name = models.CharField(max_length=200)
    subcategories = models.ForeignKey('Category', on_delete=models.CASCADE)

    class Meta():
        verbose_name_plural = "categories"

    def __str__(self) -> str:
        return self.name
