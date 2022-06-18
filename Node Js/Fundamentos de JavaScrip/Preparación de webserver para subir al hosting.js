/* 

 Lo pirmero que tenemos que preparar es el puerto en el que va a funcionar la aplicación, para ello tenemos que realizar los siguientes pasos 

 1) Instalar dotenv con npm i dotenv
 2) Crear en la carpeta raiz un archivo llamado .env
 3) Dentro del archivo .env colocar el puerto deseado para el hosting escribimos PORT=8081
 4) Configurar en el package.json en la sección de scrips la linea 
 
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js"   // app.js o index.js o server.js donde corra la aplicación
  }

  5) Dentro del archivo donde va a correr la aplicación aregaremos las siguientes lineas:

    require('dotenv').config()

    const port = process.env.PORT  // es el puerto que elegimos por defecto en el archivo .env, si se encuentra ocupado el hosting va a buscar otro puerto que este disponible para ejecutar la aplicación 

*/