import Express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import ImportData from "./DataImport.js";
import productRoute from "./routes/Product.routes.js";

dotenv.config();
connectDatabase();
const app = Express();

// api

app.use("/api/import", ImportData);
app.use("/api/products", productRoute);

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
