
/* 
- Los Hook se colocan en la parte superiror de tus componentes de React.

- No se deben colocar dentro de condicionales, tampoco después de un return. 

 Ejemplo

 *Correcto

 const Componente = () => {
     const [nombre, setNombre] = useState('')

     return
 }

!Incorrecto



 const Componente = () => {

    if(admin) {
        const [nombre, setNombre] = useState('')
    }
    No puede ir dentro de una condicional

    return  const [nombre, setNombre] = useState('') "No puede ir después del return."

    
 }




*/