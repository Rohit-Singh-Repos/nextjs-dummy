"use client";

import React, { useState, useEffect } from "react";

const EditProduct = (props) => {
  const [inputVal, setInputVal] = useState({
    name: "",
    price: "",
    brand: "",
    category: "",
    color: "",
  });

  useEffect(() => {
    getProductData();
  }, []);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]: value,
    });
  };

  const getProductData = async () => {
    const productId = props && props.params.editProduct;
    const apiResponse = await fetch(
      `http://localhost:3000/api/products/${productId}`
    );
    const productData = await apiResponse.json();
    if (productData && productData?.success) {
      const { result: { name, price, brand, category, color } = {} } = {
        ...productData,
      };
      setInputVal({
        name,
        price,
        brand,
        category,
        color,
      });
    }
  };

  const updateProduct = async () => {
    const productId = props && props.params.editProduct;
    const { name, price, brand, category, color } = inputVal;
    const apiResponse = await fetch(
      `http://localhost:3000/api/products/${productId}`,{
        method:"PUT",
        body:JSON.stringify({
            name,
            price,
            brand,
            category,
            color,
        })
      }
    );
    const productData = await apiResponse.json();
    if(productData && productData.result){
        alert("Data updated successfully")
    }else{
        alert("Something went wrong")
    }
  };

  return (
    <div>
      <h1>Update Product</h1>
      <input
        type="text"
        name="name"
        value={inputVal.name}
        onChange={handleInputs}
        placeholder="Product name"
      />{" "}
      <br />
      <input
        type="text"
        name="price"
        value={inputVal.price}
        onChange={handleInputs}
        placeholder="Price"
      />{" "}
      <br />
      <input
        type="text"
        name="brand"
        value={inputVal.brand}
        onChange={handleInputs}
        placeholder="Brand"
      />{" "}
      <br />
      <input
        type="text"
        name="category"
        value={inputVal.category}
        onChange={handleInputs}
        placeholder="Category"
      />{" "}
      <br />
      <input
        type="text"
        name="color"
        value={inputVal.color}
        onChange={handleInputs}
        placeholder="Color"
      />{" "}
      <br />
      <button onClick={updateProduct}>Update Product</button>
    </div>
  );
};

export default EditProduct;
