from django.shortcuts import render, HttpResponse

from rest_framework import viewsets, generics

from .models import Empleado, Empresa

from .serializer import EmpresaSerializer, EmpleadoSerializer, EmpresaNameSerializer

# Create your views here.


class EmpresaList(viewsets.ModelViewSet):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer


class EmpleadoList(viewsets.ModelViewSet):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer

class EmpresaListName(viewsets.ModelViewSet):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaNameSerializer


class EmployeeListByCompany(viewsets.ModelViewSet):
    serializer_class = EmpleadoSerializer

    def get_queryset(self):
        company_id = self.kwargs['company_id']
        return Empleado.objects.filter(id_empresa=company_id)


def home(request):
    return HttpResponse("Hola Mundo")