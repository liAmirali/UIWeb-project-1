from django.contrib import admin
from .models import Cart, CartItem, Category, Color, Product, ProductPriceHistory, Discount

admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Category)
admin.site.register(Color)
admin.site.register(Product)
admin.site.register(ProductPriceHistory)
admin.site.register(Discount)
