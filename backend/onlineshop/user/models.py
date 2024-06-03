from django.db import models

from products.models import Cart

class User(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    username = models.CharField(max_length=200)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
