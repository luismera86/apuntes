
import axios from "axios";

export const productApi = axios.create({
  baseURL: "http://localhost:3001"
});

export const getProducts = async () => {
  const { data } = await productApi.get("/products");
  return data;
}

export const createProduct = async (product) => {
  const { data } = await productApi.post("/products", product);
  return data;
}

export const deleteProduct = async (id) => {
  const { data } = await productApi.delete(`/products/${id}`);
  return data;
}

export const updateProduct = async (product) => {
  const { data } = await productApi.put(`/products/${product.id}`, product);
  return data;
}