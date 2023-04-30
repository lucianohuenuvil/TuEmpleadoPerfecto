from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Empresa(models.Model):
    rut = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=50)
    direccion = models.CharField(max_length=50)
    telefono = models.CharField(max_length=11)
     
    def __str__(self):
        return self.nombre


class Empleado(models.Model):
    nombre = models.CharField(max_length=80)
    rut = models.CharField(max_length=9)
    email = models.EmailField()
    id_empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

