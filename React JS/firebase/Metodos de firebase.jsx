// Metodos de firebase

import { bd } from "../../config/firebase";

import { getDocs } from './Metodos de firebase'; // getDocs obtiene los documentos de firebase.

import { collection } from './Metodos de firebase'; // collection indicas de que colección de documentos de firebase quieres obtener.

useEffect(() => {
    const productsCollection = collection(db, 'productos')
    getDocs(productsCollection)
        .then( result => {
            const docs = result.docs // docs es el array que se obtiene de la colección de firebase [{documento1},{documento2},{documento3}]. Para extraer la información del documento se usa .data() que genera un obejto con toda la información del documento menos el id.
            // Para obtener el id del documento se usa .id() que genera un string con el id del documento.
            const productsList = docs.map(doc => { // hace el mapeo del array docs
                const data = doc.data() // data es un objeto con toda la información del documento menos el id.
                const id = doc.id // id es un string con el id del documento.
                return { 
                id, 
                ...data
                } // retorna un objeto con la información del documento. El id por un lado y la información del documento por otro del doc.data()
        })
    console.log(productsList)})
        
})


import { query } from './Metodos de firebase'; 

const q = query(productsCollection, 
    where('category', '==', 'inatalciones-fijas')) 

/* 

    La query es una consulta que se hace en la que por medio del where se filtra los documentos de acuerdo al valor que se establece
    query(collection, where('campo', '==', 'valor'))
    en este caso se filtra por la categoria de instalaciones fijas.
    Se puede usar más de un where.

*/