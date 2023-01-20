import express from "express";
import { getAllProducts, getOneProduct } from "../controllers/product.js";
const productRouter = express.Router();

// get all products
productRouter.get("/", getAllProducts);

// get one product
productRouter.get("/:id", getOneProduct);

export default productRouter;
