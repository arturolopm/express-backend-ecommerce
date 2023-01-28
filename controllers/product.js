import asyncHandler from "express-async-handler";
import Product from "../Models/ProductModel.js";

export const getAllProducts = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        title: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  if (keyword.title.$regex === "undefined") {
    const count = await Product.countDocuments({});
    const products = await Product.find({})
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: -1 });
    res.json({
      products,
      page,
      kw: keyword,
      pages: Math.ceil(count / pageSize),
    });
  } else {
    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: -1 });
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
  }
});

export const getOneProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
