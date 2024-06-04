from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.core.exceptions import ValidationError

from user.models import User


class Cart(models.Model):
    discount = models.ForeignKey(
        'Discount', on_delete=models.SET_NULL, null=True, blank=True)

    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name='cart'
    )

    def __str__(self) -> str:
        return f"{self.user}'s cart"

    def get_total_cost(self):
        total_cost = 0
        for item in self.cart_items:
            cart_item: CartItem = item
            total_cost += cart_item.get_price()

        return total_cost

    def get_discount_value(self):
        discount: Discount = self.discount

        applicable_products_cost = 0
        for item in self.cart_items:
            item: CartItem = item

            if discount.is_product_applicable(item.product):
                applicable_products_cost += item.get_price()

        if discount.type == Discount.DiscountType.PERCENTAGE:
            discount_value_to_apply = discount.value * applicable_products_cost / 100
            if discount_value_to_apply > discount.max_price_limit:
                return 0
            else:
                return discount_value_to_apply
        elif discount.type == Discount.DiscountType.VALUE:
            discount_value_to_apply = discount.value
            if discount_value_to_apply > discount.max_price_limit:
                return 0
            else:
                return discount_value_to_apply

    def get_net_price(self):
        return self.get_total_cost() - self.get_discount_value()


class CartItem(models.Model):
    cart = models.ForeignKey(
        Cart, on_delete=models.CASCADE, related_name='cart_items')
    quantity = models.IntegerField(validators=[MinValueValidator(0)])
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    color = models.ForeignKey(
        'Color', on_delete=models.CASCADE, null=True, blank=True)

    def clean(self):
        # If product has not colors, just ignore
        if not self.product.colors.all():
            return
            
        # Check if the color is among the product's colors
        if self.color not in self.product.colors.all():
            raise ValidationError({
                'color': ValidationError(
                    'Invalid color for this product.',
                    code='invalid'
                ),
            })

    def __str__(self) -> str:
        return f"{self.product} (x{self.quantity})"

    def get_price(self):
        base_price = self.product.get_latest_price()
        extra_cost = 0

        if self.color:
            color: Color = self.color
            extra_cost += color.extra_cost

        return (base_price + extra_cost) * self.quantity


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

    applicable_products = models.ManyToManyField(
        'Product', blank=True)
    applicable_categories = models.ManyToManyField(
        'Category', blank=True)

    def __str__(self) -> str:
        return f"Discount {self.code}"

    def is_product_applicable(self, product: 'Product') -> bool:
        if self.applicable_products.contains(product):
            return True

        for category in self.applicable_categories:
            category: Category = category

            if category.is_inside_category(product.category):
                return True

        return False


class Product(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=520)
    rating = models.FloatField(
        validators=[MinValueValidator(0), MaxValueValidator(5)], default=0)
    category = models.ForeignKey(
        'Category', on_delete=models.SET_NULL, default=None, null=True, blank=True)

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
    parent_category = models.ForeignKey(
        'Category', on_delete=models.CASCADE, related_name='subcategories', default=None, null=True, blank=True)

    class Meta():
        verbose_name_plural = "categories"

    def __str__(self) -> str:
        return self.name

    def is_inside_category(self, cat: 'Category') -> bool:
        if cat == self:
            return True

        if not self.subcategories:
            return False

        for subcategory in self.subcategories:
            if subcategory.is_inside_category():
                return True

        return False
