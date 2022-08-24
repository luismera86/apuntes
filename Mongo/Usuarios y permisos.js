/* 

En MongoDB es posible crear usuarios y asignarles acceso mediante roles. Veremos cómo crear un usuario y asignarle un rol para que tenga ciertos accesos limitados a una base de datos.

Crearemos dos usuarios para una base de datos
Usuario lector: tendrá acceso de lectura a la base de datos.
Usuario escritor: tendrá acceso de lectura y escritura a la base de datos.

// Crearemos el usuario lector, que solo tiene acceso de lectura.

Utilizaremos el método createUser. Este acepta como parámetro un objeto con las siguientes propiedades:
user: nombre del usuario. Le asignaremos lector.
pwd: contraseña para el usuario.
roles: arreglo de objetos. Sirve si el usuario tendrá acceso a múltiples bases de datos, estableciendo permisos para cada acceso.

IMPORTANTE:  
Ejecutar el servidor con acceso root: mongod
Ejecutar en el cliente use admin antes de createUser(...)
- MongoDB viene con roles predefinidos. Uno de ellos es el role read, que permite ejecutar métodos de sólo lectura.
- La propiedad db es donde se  indica a qué base de datos se le asignará dicho rol.






*/