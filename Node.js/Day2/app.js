import express from "express";
import fs from "fs/promises";

import {
  deleteProduct,
  createProduct,
  updateProduct,
  getAllProducts,
  getProductByID,
  readFromFile,
  saveToFile,
} from "./helpers.js";

const app = express();

app.use(express.json());

app.post("/product", async (req, res) => {
  try {
    const { productName, price } = req.body;
    if (!productName || !price) {
      return res
        .status(400)
        .json({ message: "Product name and price are required" });
    }
    const newProduct = await createProduct(productName, price);
    const products = await readFromFile();
    await products.push(newProduct);
    await saveToFile(products);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("The Real Error is:", error);
    res.status(500).json({
      message: "Error creating product",
      detail: error.message,
    });
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error getting product" });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await getProductByID(id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error getting product" });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedProduct = await deleteProduct(id);
    if (!deletedProduct) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedProduct = await updateProduct(id, req.body);
    if (!updatedProduct) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error updating product" });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
