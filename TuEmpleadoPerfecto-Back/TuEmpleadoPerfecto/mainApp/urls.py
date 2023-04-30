from django.urls import path, include
from rest_framework import routers
from mainApp import views


router = routers.DefaultRouter()
router.register(r'empresas', views.EmpresaList, 'empresas')
router.register(r'empleados', views.EmpleadoList, 'empleados')
router.register(r'company_name', views.EmpresaListName, 'company_name')


router.register(r'company_list_employee/(?P<company_id>[0-9]+)', views.EmployeeListByCompany, 'company_list_employee')



urlpatterns = [
    path("api/v1/", include(router.urls))
]