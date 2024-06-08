from rest_framework import viewsets
from .serializers import ProductSerializer
from .models import Product


class ProductListView(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
