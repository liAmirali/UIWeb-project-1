from django.contrib import admin
from .models import Cart, CartItem, Category, Color, Product, ProductPriceHistory, Discount, Media


class CartItemInline(admin.TabularInline):
    model = CartItem
    fields = ('product', 'quantity', 'color')
    extra = 1


class CartAdmin(admin.ModelAdmin):
    list_display = ('user', 'get_total_cost',
                    'get_discount_value', 'get_net_price')
    search_fields = ('user__username', 'user__email')
    inlines = [CartItemInline]


class ProductPriceHistoryInline(admin.TabularInline):
    model = ProductPriceHistory
    extra = 1


class ColorInline(admin.TabularInline):
    model = Color
    extra = 1

class MediaInline(admin.TabularInline):
    model = Media
    extra = 1


class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'rating', 'get_latest_price')
    search_fields = ('title', 'category__name')
    list_filter = ('category', 'rating')
    inlines = [ColorInline, ProductPriceHistoryInline, MediaInline]


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'parent_category')
    search_fields = ('name',)
    list_filter = ('parent_category',)


class DiscountAdmin(admin.ModelAdmin):
    list_display = ('code', 'type', 'value', 'max_price_limit')
    search_fields = ('code',)
    list_filter = ('type',)


admin.site.register(Cart, CartAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Color)
admin.site.register(Product, ProductAdmin)
admin.site.register(ProductPriceHistory)
admin.site.register(Discount, DiscountAdmin)
