import Product, { Category } from '../models/product.model.js';
import mongoose from 'mongoose';

export const createCategory = async (req, res, next) => {
  try {
    const { categoryName, description } = req.body;
    if (!categoryName || !description) {
      return res.status(400).json({ message: "Category name and Description are required" });
    }
    const newCategory = new Category({ categoryName, description });
    await newCategory.save();
    res.status(201).json({ message: "Category created successfully", category: newCategory });
  } catch (error) {
    next(error);
  }
}

export const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    if (categories.length === 0) {
      const error = new Error("No categories found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ categories });
  } catch (error) {
    next(error);
  }
}

export const getProductsByCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("Invalid format for id");
      error.statusCode = 400;
      throw error;
    }
    const products = await Product.find({ category: id });
    if (products.length === 0) {
      const error = new Error("No products found for this category");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ products });
  } catch (error) {
    next(error);
  }
}