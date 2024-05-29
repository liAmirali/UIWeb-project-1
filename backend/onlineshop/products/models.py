from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=520)
    price = models.FloatField()
    