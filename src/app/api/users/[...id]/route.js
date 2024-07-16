import { users } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async(request,content) => {
    const userData = users && users.filter((item) => item.id === content.params.id)
    if(userData.length !== 0){
        return NextResponse.json(userData,{status:200});
    }
    return NextResponse.json({message:"No data found"},{status:404});
}


export const PUT = async(request) => {
    const payload = await request.json();
    if(payload.name || payload.email){
        return NextResponse.json({payload,success:true},{status:200})
    }
    return NextResponse.json({result:"request data is not valid",success:false},{status:400})
}

export const DELETE = async (request,content) => {
    const userId =  await content.params.id;
    if(userId){
        return NextResponse.json({result:"User Deleted",success:true},{status:200})
    }else{
        return NextResponse.json({result:"Something Went Wrong",success:false},{status:400})
    }
}
