// routes/order.js
import express from "express";
import protect from "../Middleware/AuthMiddleware.js";
import {
  createOrder,
  getOrder,
  payOrder,
  getOrders,
} from "../controllers/order.js";

const orderRouter = express.Router();
// Create Order
orderRouter.post("/", protect, createOrder);

// get Order
orderRouter.get("/:id", protect, getOrder);

// Pay order
orderRouter.put("/:id/pay", protect, payOrder);

// get Orders list
orderRouter.get("/", protect, getOrders);

export default orderRouter;
