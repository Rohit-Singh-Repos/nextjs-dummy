"use client"

import React from 'react'

const Button = ({children,productId}) => {
  const deleteUser = async() => {
    const apiResponseData = await fetch(`http://localhost:3000/api/products/${productId}`,{
        method:"DELETE"
    });
    const result = await apiResponseData.json();
    if(result && result.success){
        alert("User Deleted");
    }else{
        alert("Something Went Wrong")
    }
  }
  return (
    <button onClick={deleteUser}>{children}</button>
  )
}

export default Button