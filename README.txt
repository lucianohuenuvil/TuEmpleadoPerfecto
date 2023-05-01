Este es el repositorio de la solución desarrollada para la prueba técnica de la empresa de RRHH "Tu Empleado Perfecto". La solución consiste en una aplicación web que permite gestionar la información de empresas y empleados.

Para este ejemplo se utilizó un modelo de base de datos relacional, empleado y empresa (Una empresa puede dar trabajo a muchos empleados, pero un empleado trabaja solo para una empresa) 1:M

Requisitos previos:

Node.js y npm instalados en la máquina local.
Python 3 y Django instalados en la máquina local.

Instalación

Frontend

Clonar este repositorio en la máquina local: git clone https://github.com/<nombre-de-usuario>/prueba-tecnica-tu-empleado-perfecto.git.
-Navegar a la carpeta frontend del proyecto: cd TuEmpleadoPerfecto-Front
-Instalar las dependencias: npm install.


Backend
-Abrir nueva terminal donde y abrir la ruta backend
-Navegar a la carpeta backend del proyecto: cd TuEmpleadoPerfecto-Back
-Crear un entorno virtual para el proyecto: python -m venv venv
-Activar el entorno virtual: cd venv/script/activate
-Volver a la carpeta TuEmpleadoPerfecto-Back e instalar dependencias
-Entrar a la carpeta del proyecto "TuEmpleadoPerfecto" -> cd TuEmpleadoPerfecto
-Instalar las dependencias: pip install -r requirements.txt.
-Realizar las migraciones de la base de datos: python manage.py migrate.


Como ejecutar:

Frontend

-En la terminal, navegar a la carpeta frontend del proyecto: cd TuEmpleadoPerfecto-Front
-Iniciar la aplicación: npm start.
-Abrir la aplicación en el navegador en la dirección http://localhost:4200

Backend

-En la terminal, navegar a la carpeta del proyecto Back-end : cd TuEmpleadoPerfecto-Back
-Activar el entorno virtual: cd venv/bin/activate
-Luego volver y la carpeta raiz (TuEmpleadoPerfecto-Back) y Navegar a la carpeta backend del proyecto: cd TuEmpleadoPerfecto
-Iniciar el servidor: python manage.py runserver.

Los endpoints de la API estarán disponibles en la dirección http://127.0.0.1:8000/app/api/v1/

Tecnologías utilizadas
Angular para el frontend.
Django y Django Rest Framework para el backend.

