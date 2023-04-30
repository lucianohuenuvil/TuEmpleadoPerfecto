from django.urls import path, include
from django.contrib.auth.models import User


from rest_framework import serializers
from mainApp.models import Empleado, Empresa


class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Empleado
        fields = '__all__'

class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Empresa
        fields = '__all__'

class EmpresaNameSerializer(serializers.ModelSerializer):
    class Meta:
        model=Empresa
        fields = ('rut','nombre')



