from rest_framework import serializers
from .models import Daftar

class DaftarSerializer(serializers.ModelSerializer):

    class Meta:
        model = Daftar
        fields = '__all__'