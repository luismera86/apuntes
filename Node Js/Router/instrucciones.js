/* 

Sección 8 Curso de fernando herrera node 

Con router podemos modularizar nuestra aplicación en node con express


*/


// Estructura de archivos 

 // En la carpeta raiz creamos la carpeta /routes y /controllers | Dentro de ella cramos los archivos de rutas y controladores, por ejemplo usuarios.js 

 // /routes/usuarios.js

 const { Router } = require('express')
 const { usuarioGet } = require('../controllers/usuarios.js') // Importamos las funciones de los controllers

 const route = Router()

 route.get('/', usuarioGet) // se coloca solamente '/' por que en el archivo app.js ya indicamos que el path es '/api/usuarios' y luego colcamos el callback importado de los controllers
 





 module.exports = route 


 // /controllers/usuarios.js 
/* En este arcivo se crean todas las funciones que se van a ejectutar cuando llegue las peticiones al servidor por medio de las rutas indicadas */ 

 const { response, request } = require('express') // con esta importación podemos utilizar los metodos para (req, res) de los callback 

 const usuarioGet = (req = request, res = response) => {
    res.send('Usuario obtenido') // Mensaje se mostrara cuando se haga un get en localhost:(puerto)/api/usuarios
 }

 module.exports = { // en esta parte se exportan todas las funciones creadas
    usuarioGet 
 }



 // app.js

 app.use('/api/usuarios', require('./routes/usuarios')) // esta manera indicas que las peticiones de usuario que vengan del servidor se manejen por las rutas de usuarios.js

