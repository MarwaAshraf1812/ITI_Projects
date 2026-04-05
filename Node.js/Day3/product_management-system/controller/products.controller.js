import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const createProduct = async (req, res, next) => {
  try {
    const { productName, price, category } = req.body;
    if (!productName || !price || !category) {
      return res.status(400).json({ message: "Product name, price, and category are required" });
    }
    const newProduct = new Product({ productName, price, category });
    await newProduct.save();
    res.status(201).json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    next(error);
  }
}

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find().populate('category', 'categoryName');
    if (products.length === 0) {
      const error = new Error("No products found");
      error.statusCode = 404;
      throw error;
    }
    
    const { username, role } = req.user;

    res.status(200).json({ 
      success: true,
      username,
      role,
      products 
    });
  } catch (error) {
    next(error);
  }
}

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("Invalid format for id");
      error.statusCode = 400;
      throw error;
    }
    const product = await Product.findById(id).populate('category', 'categoryName');
    if (!product) {
      const error = new Error("Product not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ product });
  } catch (error) {
    next(error);
  }
}


export const updateProduct = async (req, res, next) => {
  try {
    console.log("Body we received:", req.body);
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("Invalid format for id");
      error.statusCode = 400;
      throw error;
    }
    const data = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true });
    if (!updatedProduct) {
      const error = new Error("Product not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    next(error);
  }
}

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("Invalid format for id");
      error.statusCode = 400;
      throw error;
    }
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      const error = new Error("Product not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ message: "Product deleted successfully", product: deletedProduct });
  } catch (error) {
    next(error);
  }
}
