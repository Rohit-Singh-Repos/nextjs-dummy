"use client"

import React,{useState} from 'react'

const AddUser = () => {
  const [inputVal, setInputVal] = useState({
    name:"",
    email:""
  })
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputVal({
        ...inputVal,
        [name]:value
    })
  }
  const addNewUser = async() => {
    const { name, email } = inputVal;
    const response = await fetch("http://localhost:3000/api/users", {
        method:"POST",
        body:JSON.stringify({name,email})
    })
    const apiResponse = await response.json();
    if(apiResponse.success){
        alert("User Created")
    }else{
        alert("Check Input")
    }
  }
  return (
    <div>
        <h1>Add New User</h1>
        Name: <input type="text" name="name" value={inputVal.name} onChange={handleInput}/> <br />
        Email: <input type="email" name="email" value={inputVal.email} onChange={handleInput}/>
        <button onClick={addNewUser}>Add User</button>
    </div>
  )
}

export default AddUser