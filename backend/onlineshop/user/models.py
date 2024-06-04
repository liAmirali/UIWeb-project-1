from django.db import models


class User(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    username = models.CharField(max_length=200, db_index=True, unique=True)

    cart = models.OneToOneField(
        'products.Cart', on_delete=models.SET_NULL, null=True)
