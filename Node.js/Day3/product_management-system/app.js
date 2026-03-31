import express from "express";
import errorHandler from "./middleware/middlewares.js";
import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(express.json());


app.use("/api/products", productRoutes);


app.use(errorHandler);

export default app;