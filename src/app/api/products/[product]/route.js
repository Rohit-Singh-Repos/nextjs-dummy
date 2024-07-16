import { ProductModel } from "@/model/product";
import { connectionString } from "@/utils/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const PUT = async(request,content) => {
    try {
        const productId = content.params.products;
        const filterData = {_id:productId};
        await mongoose.connect(connectionString);
        const payloadData = await request.json();
        const updatedData = await ProductModel.findOneAndUpdate(filterData,payloadData);
        return NextResponse.json({result:updatedData,success:true},{status:201})
    } catch (error) {
        return NextResponse.json({result:"Something Went Wrong",success:false},{status:400})
    }
}


export const GET = async(request,content) => {
    try {
        const productId = content.params.products;
        const filterData = {_id:productId};
        await mongoose.connect(connectionString);
        const updatedData = await ProductModel.findById(filterData);
        return NextResponse.json({result:updatedData,success:true},{status:200})
    } catch (error) {
        return NextResponse.json({result:`Something Went Wrong ${error}`,success:false},{status:400})
    }
}

export const DELETE = async(request,content) => {
    try {
        const productId = content.params.products;
        const recordData = {_id:productId};
        await mongoose.connect(connectionString);
        const updatedData = await ProductModel.deleteOne(recordData);
        return NextResponse.json({result:updatedData,success:true},{status:200})
    } catch (error) {
        return NextResponse.json({result:`Something Went Wrong ${error}`,success:false},{status:400})
    }
}


