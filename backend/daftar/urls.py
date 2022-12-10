from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DaftarViewSet

router = DefaultRouter()
router.register('', DaftarViewSet, basename='daftar')

urlpatterns = [
    path('', include(router.urls)),

]
