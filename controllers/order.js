// controllers/order.js
import { json, response } from "express";
import asyncHandler from "express-async-handler";
import mercadopago from "mercadopago";
import protect from "../Middleware/AuthMiddleware.js";
import Order from "../Models/OrderModel.js";

export const createOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createOrder = await order.save();
    res.status(201).json(createOrder);
  }
});

export const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404).json(createOrder);
    throw new Error("Order not found");
  }
});

export const payOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404).json(createOrder);
    throw new Error("Order not found");
  }
});

export const payOrderMP = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  const payment_id = req.body.payment_id;
  const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
  const getPaymentStatus = async () => {
    await fetch(`https://api.mercadopago.com/v1/payments/${payment_id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "approved") {
          if (order) {
            order.isPaid = true;
            order.paidAt = Date.now();
            order.paymentResult = {
              id: result.id,
              status: 200,
              update_time: Date.now(),
              email_address: result.payer.email,
            };

            const updatedOrder = async () => await order.save();

            res.json(updatedOrder());
          } else {
            res.status(404).json(createOrder);
            throw new Error("Order not found");
          }
        }
      });
  };
  getPaymentStatus();
});

export const getOrders = asyncHandler(async (req, res) => {
  const order = await Order.find({ user: req.user._id }).sort({ id: -1 });

  res.json(order);
});

export const orderMP = asyncHandler(async (req, res) => {
  mercadopago.configure({ access_token: process.env.ACCESS_TOKEN });
  const order = await Order.findById(req.params.id);

  const itemsPreference = order.orderItems.map((orderItems) => ({
    id: orderItems.product._id,
    title: orderItems.title,
    currency_id: "COP",
    picture_url:
      "https://fastly.picsum.photos/id/1041/200/200.jpg?hmac=1CDPtzGhHDqltV1i3b5YV4hY9UYY_6ubvXbxJO9QchQ",
    description: "EScultura de jade",
    category_id: "art",
    quantity: orderItems.quantity,
    unit_price: parseInt(orderItems.price * (1 - orderItems.discount)),
  }));
  const preference = {
    items: itemsPreference,
    back_urls: {
      success: `http://localhost:5173/order/${order._id}`,
      failure: `http://localhost:5173/order/${order._id}`,
      pending: `http://localhost:5173/order/${order._id}`,
    },
    auto_return: "approved",
    binary_mode: true,
  };
  mercadopago.preferences
    .create(preference)
    .then((response) => res.status(200).send({ response }))
    .catch((error) => res.status(500).send({ error: error.message }));
});
