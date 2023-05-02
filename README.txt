Este es el repositorio de la solución desarrollada para la prueba técnica de la empresa de RRHH "Tu Empleado Perfecto". La solución consiste en una aplicación web que permite gestionar la información de empresas y empleados.

Para este ejemplo se utilizó un modelo de base de datos relacional, empleado y empresa (Una empresa puede dar trabajo a muchos empleados, pero un empleado trabaja solo para una empresa) 1:M

Requisitos previos:

-Instalar git (Página oficial)
-Instalar Node.js y npm  (v16.15 o superior - pagina oficial de Node js) y Angular (12 o superior). (Para instalar Angular -> "npm install -g @angular/cli")
-Python 3 (Se utilizó python 3.9.7).
-Instalar virtualenv -> pip install virtualenv

*Si es primera vez que se instalaron, reiniciar equipo


Instalación

*Frontend:

Clonar este repositorio en la máquina local, o descargar el archivo Zip del proyecto. -> git clone https://github.com/lucianohuenuvil/TuEmpleadoPerfecto.git
-Navegar a la carpeta frontend del proyecto: cd TuEmpleadoPerfecto-Front
-Instalar las dependencias: npm install.


*Backend:

-Abrir nueva terminal y abrir la ruta Back-End
-Navegar a la carpeta backend del proyecto: cd TuEmpleadoPerfecto-Back
-Crear un entorno virtual para el proyecto: virtualvenv venv
-Activar el entorno virtual: cd venv/script/activate
-Volver a la carpeta TuEmpleadoPerfecto-Back para instalar dependencias -> pip install -r requirements.txt
-Luego, entrar a la carpeta del proyecto "TuEmpleadoPerfecto" -> cd TuEmpleadoPerfecto
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

