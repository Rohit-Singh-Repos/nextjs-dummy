import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    name:String,
    price:String,
    brand:String,
    category:String,
    color:String
})

export const ProductModel = mongoose.models.products || mongoose.model("products",productModel);