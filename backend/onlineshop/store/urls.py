from django.urls import path
from . import views

urlpatterns = [
    path("products/", views.ProductListView.as_view(
        {'get': 'list'}), name="products-list"),
    path("products/<int:pk>/", views.ProductListView.as_view(
        {'get': 'retrieve'}), name="products-details"),


    path("cart/add/", views.CartViewSet.as_view(
        {'post': "add_to_cart"}), name="add-to-cart"),
    path("cart/increment/", views.CartViewSet.as_view(
        {'post': "increment_item"}), name="increment-item"),
    path("cart/decrement/", views.CartViewSet.as_view(
        {'post': "decrement_item"}), name="decrement-item"),
    path("cart/clear/", views.CartViewSet.as_view(
        {'post': "clear_cart"}), name="clear-cart"),
    path("cart/", views.CartViewSet.as_view(
        {'get': "list"}), name="cart-detail"),
    path("cart/apply-discount/", views.CartViewSet.as_view(
        {'post': 'apply_discount'}, name="apply-discount")),
]
