import Product from "../model.js";

export const createProduct = async(req, res, next) => {
  try {
    const { productName, price } = req.body;
    if (!productName || !price) {
      return res.status(400).json({ message: "Product name and price are required" });
    }
    const newProduct = new Product({ productName, price });
    await newProduct.save();
    res.status(201).json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    next(error);
  }
}

export const getAllProducts = async(req, res, next) => {
  try {
    const products = await Product.find();
    if(products.length === 0) {
      const error = new Error("No products found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ products });
  } catch (error) {
    next(error);
  }
}

export const getProductById = async(req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if(!product) {
      const error = new Error("Product not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ product });
  } catch (error) {
    next(error);
  }
}


export const updateProduct = async(req, res, next) => {
  try {
    console.log("Body we received:", req.body);
    const {id} = req.params;
    const data = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true });
    if(!updatedProduct) {
      const error = new Error("Product not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    next(error);
  }
}

export const deleteProduct = async(req, res, next) => {
  try {
    const {id} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if(!deletedProduct) {
      const error = new Error("Product not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ message: "Product deleted successfully", product: deletedProduct });
  } catch (error) {
    next(error);
  }
}
