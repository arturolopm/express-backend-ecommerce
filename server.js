import Express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import ImportData from "./DataImport.js";
import productRouter from "./routes/Product.routes.js";
import userRouter from "./routes/User.routes.js";
import orderRouter from "./routes/Order.routes.js";
import { notFound, errorHandler } from "./Middleware/Errors.js";

dotenv.config();
connectDatabase();
const app = Express();
app.use(Express.json());

// api

app.use("/api/import", ImportData);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// error handler
app.use(notFound);
app.use(errorHandler);

// // load product from serverside
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });
// // load  one product from serverside
// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((product) => product.id == req.params.id);
//   res.json(product);
// });

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}`));
