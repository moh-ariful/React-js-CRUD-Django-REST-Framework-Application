from .models import Daftar
from .serializers import DaftarSerializer
from rest_framework import viewsets


class DaftarViewSet(viewsets.ModelViewSet):
    queryset = Daftar.objects.all()
    serializer_class = DaftarSerializer
