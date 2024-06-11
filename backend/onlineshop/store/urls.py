from django.urls import path
from . import views

urlpatterns = [
    path("products/", views.ProductListView.as_view(
        {'get': 'list'}), name="products-list"),
    path("products/<int:pk>/", views.ProductListView.as_view(
        {'get': 'retrieve'}), name="products-details")
]
