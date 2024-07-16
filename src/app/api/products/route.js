import { ProductModel } from "@/model/product";
import { connectionString } from "@/utils/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async() => {
    const productResponse = {
        data:null,
        success:false,
        status:null
    }
    try {
        await mongoose.connect(connectionString)
        const apiData = await ProductModel.find();
        productResponse.data = apiData;
        productResponse.status = 200;
        productResponse.success = true;
    } catch (error) {
        productResponse.data = `No data found ${error}`;
        productResponse.status = 400;
        productResponse.success = false;
    }
    
    return NextResponse.json({ result:productResponse.data, success:productResponse.success},{status:productResponse.status});
}

export const POST = async(request) => {
    const productResponse = {
        message:null,
        success:false,
        status:200
    }
    try {
        await mongoose.connect(connectionString);


        // For Hardcoded Values 
        // const productData = await new ProductModel({
        //     name:"Apple Iwatch Pro",
        //     price:"27,000",
        //     brand:"Apple",
        //     category:"watch",
        //     color:"white"
        // })

        // Or,

        // For Dynamic Values (to be send from UI/Postman)
        const payload = await request.json()
        const productData = await new ProductModel(payload)


        const result = await productData.save();
        if(Object.keys(result).length !== 0){
            productResponse.message = `Data created successfully`;
            productResponse.status = 200;
            productResponse.success = true;
        }        
    } catch (error) {
        productResponse.message = `Something Went Wrong ${error}`;
        productResponse.status = 400;
        productResponse.success = false;
    }
    
    return NextResponse.json({ message:productResponse.message, success:productResponse.success},{status:productResponse.status});
}


