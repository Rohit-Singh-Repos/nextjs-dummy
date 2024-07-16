"use client"

import React,{useState} from 'react'

const AddProducts = () => {
  const [inputVal, setInputVal] = useState({
    name:"",
    price:"",
    brand:"",
    category:"",
    color:""
  })

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]:value
    })
  }

  const addProduct = async() => {
    const { name, price, brand, category, color } = inputVal;
    const result = await fetch("http://localhost:3000/api/products",{
        method:"Post",
        body:JSON.stringify({
          name,
          price,
          brand,
          category,
          color
        })
      })
    const apiResponse = await result.json();
    if(apiResponse && apiResponse?.success){
      alert("Data Created Successfully")
    }else{
      alert("Something Went Wrong")
    }
  } 
  
  return (
    <div>
      <h1>Add Products</h1>
      <input type="text" name="name" value={inputVal.name} onChange={handleInputs} placeholder='Product name'/> <br />
      <input type="text" name="price" value={inputVal.price} onChange={handleInputs} placeholder='Price'/> <br />
      <input type="text" name="brand" value={inputVal.brand} onChange={handleInputs} placeholder='Brand'/> <br />
      <input type="text" name="category" value={inputVal.category} onChange={handleInputs} placeholder='Category'/> <br />
      <input type="text" name="color" value={inputVal.color} onChange={handleInputs} placeholder='Color'/> <br />
      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default AddProducts