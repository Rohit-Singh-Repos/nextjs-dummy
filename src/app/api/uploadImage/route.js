import { NextResponse } from "next/server";

export const POST = async(request,content) => {
    console.log(request)
    const data = await request.formData();
    console.log(data)
    const fileData = await data.get('file');
    console.log(fileData)
    if(fileData){
        const byteData = await fileData.arrayBuffer();
        const buffer = Buffer.from(byteData);
        const imageUploadPath = `./public/${fileData.name}`;
        await writeFile(imageUploadPath, buffer);
        return NextResponse.json({message:"File Uploaded", success:true})
    }else{
        return NextResponse.json({message:"No image found", success:false})
    }
}