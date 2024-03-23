import mongoose from "mongoose";

const productSchema= mongoose.Schema({

    name:String,
    desc:String,
    size:String,
    price:Number,
    stock:Number,
    discount:Number



})


const NewProduct=mongoose.model("AddProduct",productSchema);

module.exports=NewProduct;
