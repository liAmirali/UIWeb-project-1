from django.urls import path
from store import views as store_views

urlpatterns = [
    path("products", store_views.ProductListView.as_view({'get': 'list'})),
    path("products/<id>",
         store_views.ProductListView.as_view({'get': 'retrieve'}))
]
