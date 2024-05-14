# proyectManager-FirebaseHosting-MultiApps-AppScript - Manejador de multiapps en Google Apps Script

Este repositorio contiene el código de un manejador de vistas para una aplicación desarrollada en Google Apps Script. El archivo `index.html` actúa como una interfaz para acceder y visualizar el aplicativo a través de iframes, permitiendo la autenticación del usuario mediante parámetros en la solicitud HTTP.

## Descripción

Este proyecto es parte de una aplicación desarrollada en Google Apps Script y sirve como un manejador de vistas que permite la visualización de diferentes secciones o páginas de la aplicación a través de iframes. La autenticación del usuario se realiza mediante parámetros incluidos en la URL de la solicitud HTTP.
Para evitar los anuncios de Google sobre el creador de la aplicación, es posible desplegar este archivo en un servidor local o en un servicio de hosting. Al acceder a la aplicación a través de un servidor externo, se evita la aparición de mensajes como "Esta aplicación la ha creado un usuario de Google Apps Script".

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado Node.js y npm en tu sistema. Ademas de haber creado tu aplicacion en AppScript y configurado tu cuenta en firebase para el despliengue en el hosting

## Configuración

1. Clona este repositorio en tu máquina local o en el servidor de hosting.
2. ejecuta en la terminal:
   ```bash
   npm install
    ```
3. Configura tu Aplicación de AppScript para manejar las solicitudes HTTP y autenticar usuarios mediante parámetros en la URL.
4. Crea un archivo .env en la raíz del proyecto y configura las variables de entorno según los datos proporcionados por Firestore:
   ```bash
    FIREBASE_API_KEY=tu_api_key
    FIREBASE_AUTH_DOMAIN=tu_auth_domain
    FIREBASE_PROJECT_ID=tu_project_id
    FIREBASE_STORAGE_BUCKET=tu_storage_bucket
    FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
    FIREBASE_APP_ID=tu_app_id
    FIREBASE_MEASUREMENT_ID=tu_measurement_id
   ```
5. En el mismo archivo .env añade variables de entorno con las URL proporcionadas por Google Apps Script:
   ```bash
    URL_APP=tu_url_appscript
    URL_APP_1=tu_url_login_appscript
    URL_APP_2=tu_url_login_appscript
    URL_APP_3=tu_url_login_appscript
    URL_APP_4=tu_url_login_appscript
   ```

6. Modifica el title del aplicativo.

## Uso

Una vez que hayas instalado las dependencias y configurado las variables de entorno, despliega la aplicación en Firestore, sigue las instrucciones proporcionadas por Firebase para configurar tu proyecto y subir los archivos necesarios. Asegúrate de configurar las reglas de seguridad en Firestore según tus necesidades. Firestore te brindará una URL para que accedas a este proyecto.
El código JavaScript se encarga manejar la lógica de redireccionamiento según los parámetros en la URL.
Dentro del archivo JavaScript, se encuentra la configuración de Firebase utilizando las variables de entorno definidas en .env. Asegúrate de tener las URLs correctas proporcionadas por Firebase.


## Contribución

Si deseas contribuir al desarrollo de este manejador de vistas o de la aplicación en Google Apps Script, puedes hacer un fork del repositorio, realizar tus cambios y enviar un pull request para su revisión.

## Contacto

Para más información o consultas sobre este manejador de vistas en Google Apps Script, puedes contactarme a través de mi perfil en GitHub

---

Hecho con ❤️ por [Carlos Olivera](https://github.com/coliveramispireta)
