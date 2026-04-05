import express from "express";
import { errorHandler } from "./middleware/middlewares.js";
import productRoutes from "./routes/product.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.use("/auth", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

app.use(errorHandler);

export default app;