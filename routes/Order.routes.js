// routes/order.js
import express from "express";
import protect from "../Middleware/AuthMiddleware.js";
import {
  createOrder,
  getOrder,
  payOrder,
  getOrders,
  orderMP,
  payOrderMP,
} from "../controllers/order.js";

const orderRouter = express.Router();
// Create Order
orderRouter.post("/", protect, createOrder);

// get Order
orderRouter.get("/:id", getOrder);

// Pay order on DB
orderRouter.put("/:id/pay", protect, payOrder);

// Pay order on DB
orderRouter.put("/:id/payMP", protect, payOrderMP);

// get Orders list
orderRouter.get("/", protect, getOrders);

// Pay order on MP (mercadoPago)
orderRouter.post("/:id/paymp", orderMP);

export default orderRouter;
