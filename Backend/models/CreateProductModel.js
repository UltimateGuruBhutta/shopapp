import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: {type:String,required:true,},
  description: {type:String,required:true},
  color: [String],
  size: [String],
  price: {type:Number,required:true,},
  stock: {type:Number,required:true,},
  discount: Number,
  images: [{type: Buffer}],

},{timestamps: true});

const NewProduct = mongoose.model("AddProduct", productSchema);

export default NewProduct;
