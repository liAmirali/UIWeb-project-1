# Generated by Django 5.0.6 on 2024-06-04 07:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_remove_product_price_discount_applicable_products_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name_plural': 'categories'},
        ),
        migrations.AlterModelOptions(
            name='productpricehistory',
            options={'verbose_name_plural': 'Product prices history'},
        ),
    ]
