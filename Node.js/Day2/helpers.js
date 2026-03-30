import { v4 as uuidv4 } from "uuid";
import fs from "fs/promises";

export const createProduct = (productName, price) => {
  return { id: uuidv4(), productName, price };
};

export const getAllProducts = async() => {
  const products = await readFromFile();
  return products;
}

export const getProductByID = async(id) => {
  const products = await readFromFile();
  const product = products.find(p=> p.id == id);
  return product;
}

export const deleteProduct = async(id) => {
  const products = await readFromFile();
  const product = products.find(p=> p.id == id);
  if(!product) {
    return null;
  }
  const filteredProducts = products.filter(p=> p.id != id);
  await saveToFile(filteredProducts);
  return product;
}

export const updateProduct = async(id, data) => {
  const products = await readFromFile();
  const productIndex = products.findIndex(p=> p.id == id);
  if(productIndex === -1) {
    return null;
  }
  const updatedProduct = { ...products[productIndex], ...data };
  products[productIndex] = updatedProduct;
  await saveToFile(products);
  return updatedProduct;
}

export const readFromFile = async () => {
  const data = await fs.readFile("./products.json", "utf-8");
  return JSON.parse(data);
};

export const saveToFile = async (data) => {
  await fs.writeFile("./products.json", JSON.stringify(data));
};