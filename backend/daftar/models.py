from django.db import models

class Daftar(models.Model):
    name = models.CharField(max_length=27)
    phone = models.CharField(max_length=12)
    email = models.CharField(max_length=27)
    

    def __str__(self):
        return self.name