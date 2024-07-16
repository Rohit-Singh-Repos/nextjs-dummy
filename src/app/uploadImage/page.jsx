"use client"

import React,{useState} from 'react'

const UploadImage = () => {
  const [fileData, setFileData] = useState();
  const uploadFile = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    const imageData = formData.set('file',fileData);
    console.log(imageData)
    const apiResponse = await fetch("http://localhost:3000/api/uploadImage",{
        method:"post",
        body:imageData
    });
    console.log(apiResponse)
    const result = await apiResponse.json();
    console.log(result)
    if(result && result?.success){
        alert("Image Uploaded")
    }else{
        alert("Something Went Wrong")
    }
  }
  return (
    <div>
        <h1>Upload Image using NextJS</h1>
        <input 
            type="file" 
            name="file"
            onChange={(e) => setFileData(e.target.files?.[0])}
        />
        <button onClick={uploadFile}>Upload Image</button>
    </div>
  )
}

export default UploadImage