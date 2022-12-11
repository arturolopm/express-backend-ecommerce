import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    imagesMain: {
      type: Array,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    discount: {
      type: Number,
      require: true,
      default: 0,
    },
    Stock: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  {
    timeStamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
