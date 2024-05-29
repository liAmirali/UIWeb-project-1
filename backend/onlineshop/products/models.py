from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=520)
    price = models.FloatField()


class Discount(models.Model):
    class DiscountType(models.TextChoices):
        VALUE = "VAL"
        PERCENTAGE = "PRCNT"

    code = models.CharField(max_length=8)
    type = models.CharField(max_length=5, choices=DiscountType, default=DiscountType.VALUE)
    value = models.FloatField()
