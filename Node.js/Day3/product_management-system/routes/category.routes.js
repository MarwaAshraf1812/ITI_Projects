import express from "express";
import {
  createCategory,
  getAllCategories,
  getProductsByCategory
} from "../controller/category.controller.js";

const router = express.Router();

router.route("/")
  .post(createCategory)
  .get(getAllCategories);

router.route("/:id/products")
  .get(getProductsByCategory);

export default router;
