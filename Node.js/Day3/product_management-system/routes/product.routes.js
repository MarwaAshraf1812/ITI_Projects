import express from "express";
import { 
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controller/products.controller.js";
import { authenticate, authorize } from "../middleware/middlewares.js";

const router = express.Router();

router.route("/")
  .get(authenticate, getAllProducts)
  .post(authenticate, authorize(['admin']), createProduct);

router.route("/:id")
  .get(getProductById)
  .patch(authenticate, authorize(['admin']), updateProduct)
  .delete(authenticate, authorize(['admin']), deleteProduct);

export default router;