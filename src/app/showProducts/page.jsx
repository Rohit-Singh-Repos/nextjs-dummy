import Link from 'next/link';
import React from 'react'
import Button from '../components/Button';

const getProducts = async() => {
    const apiResponse = await fetch("http://localhost:3000/api/products",{
        cache:"no-cache"
    });
    const productsData = await apiResponse.json();

    if(productsData && productsData?.success){
        return productsData.result;
    }else{
        return productsData.success;
    }
}

const ShowProducts = async() => {
  const allProductsData = await getProducts();
  return (
    <div>
        <h1>All Products</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Color</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {
                allProductsData && allProductsData.length !== 0 ? allProductsData.map((item,index) => (
                    <tr key={index}>
                       <td>{item.name}</td>
                       <td>{item.price}</td>
                       <td>{item.brand}</td>
                       <td>{item.category}</td>
                       <td>{item.color}</td>
                       <td><Link href={`/showProducts/${item._id}`} children="Edit Product"/></td>
                       <td><Button productId={item._id}>Delete Product</Button></td>
                    </tr>
                )) : <tr><td>No Data</td></tr>
            }
            </tbody>
        </table>
    </div>
  )
}

export default ShowProducts