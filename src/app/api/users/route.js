import { NextResponse } from "next/server";
import { users } from "@/utils/db";

export const GET = async() => {
    return NextResponse.json(users,{status:200});
}

export const POST = async(request) => {
    let payload = await request.json();
    if(!payload.name || !payload.email){
        return NextResponse.json({result:"No data found", success: false},{status:404});
    }
    return NextResponse.json({result:"New user created", success: true},{status:201});
}

