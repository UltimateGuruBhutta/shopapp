import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  description: String,
  size: String,
  price: Number,
  stock: Number,
  discount: Number,
  images:[Buffer],
});

const NewProduct = mongoose.model("AddProduct", productSchema);

module.exports = NewProduct;
