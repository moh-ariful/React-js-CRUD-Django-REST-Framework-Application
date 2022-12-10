from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('daftar.urls')),
    path('api-auth/', include('rest_framework.urls')), # new

]