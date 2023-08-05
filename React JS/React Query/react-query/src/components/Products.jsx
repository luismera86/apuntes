import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, getProducts, updateProduct } from "../api/productsAPI";

export const Products = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  /* 
  isLoading: nos indica si la petición está en curso
  data: contiene los datos de la petición
  isError: nos indica si ha habido un error
  error: contiene el error
  queryKey: es un array que contiene la clave de la petición
  queryFn: lo utilizamos para indicar la función que se ejecutará para obtener los datos de la petición
  */
  const queryClient = useQueryClient();

  const mutationDelete = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  const mutionUpdate = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;
  else
    return data.map((product) => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <button onClick={() => mutationDelete.mutate(product.id)}>Eliminar</button>
        <input type="checkbox" checked={product.inStock} onChange={(e) => mutionUpdate.mutate({
          ...product,
          inStock: e.target.checked
        })} />
        <label htmlFor="">En stock</label>
      </div>
    ));
};
