import Express from "express";
import products from "./data/Products.js";
const app = Express();

// load product from serverside
app.get("/api/products", (req, res) => {
  res.json(products);
});
// load  one product from serverside
app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product.id == req.params.id);
  res.json(product);
});

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(5000, console.log("server running on port 5000"));
