import { createProduct } from "../api/productsAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export const ProductForm = () => {
  
  const queryClient = useQueryClient(); // El useQueryClient nos permite acceder al queryClient que hemos creado en el main.jsx

  const addProductMutation = useMutation({ // El useMutation nos permite ejecutar una mutación 
    // La mutación es una función que nos permite ejecutar una petición de tipo POST para crear un producto 
    mutationFn: createProduct, // Indicamos la función que se ejecutará para crear el producto
    onSuccess: () => {
      console.log("Producto añadido")
      queryClient.invalidateQueries("products"); // Invalidamos la caché de la petición "products" para que se vuelva a ejecutar y se muestre el nuevo producto 
    } // Indicamos la función que se ejecutará cuando la petición se haya ejecutado correctamente
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); // Creamos un FormData con los datos del formulario que se ha enviado al evento submit 
    // La clase FormData nos permite crear un objeto con los datos del formulario que se ha enviado al evento submit 
    const product = Object.fromEntries(formData); // Convertimos el FormData a un objeto
    // La función Object.fromEntries() nos permite convertir un FormData a un objeto
   
    addProductMutation.mutate({
      ...product,
      inStock: true
    }); // Ejecutamos la mutación
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Nombre</label>
      <input type="text" name="name" id="id" />
      <label htmlFor="">Precio</label>
      <input type="number" name="price" id="id" />
      <button type="submit">Añadir</button>
    </form>
  )
}
