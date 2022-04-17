/* 
* Para evitar comflitos de nombres, se utiliza el modulo de css modules, se debe crear un archivo css con el nombre del modulo agregando module por ejemplo: Modulo.js el css es Modulo.module.css


Modulo.module.css

.contenedor{
    background: #f00;
}

.clase2{
    color: #fff;
}



Modulo.js

En el archivo js se debe importar import styles from './Modulo.module.css'


en el html <div className={styles.contenedor}>

para agregar dos clases 

en el html <div className={`${styles.contenedor} ${styles.clase2}`}>


*/