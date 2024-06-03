from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

from user.models import User


class Discount(models.Model):
    class DiscountType(models.TextChoices):
        VALUE = "VALUE"
        PERCENTAGE = "PERCENTAGE"

    code = models.CharField(max_length=8)
    type = models.CharField(
        max_length=5, choices=DiscountType, default=DiscountType.VALUE)
    value = models.FloatField()
    max_price_limit = models.FloatField(validators=[MinValueValidator(0)])


class Cart(models.Model):
    user = models.ForeignKey(User)
    discount = models.ForeignKey(Discount, null=True)


class Product(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=520)
    rating = models.FloatField(
        validators=[MinValueValidator(0), MaxValueValidator(5)])


class CartItem(models.Model):
    cart = models.ForeignKey(Cart)
    quantity = models.IntegerField(validators=[MinValueValidator(0)])
    product = models.ForeignKey(Product)
