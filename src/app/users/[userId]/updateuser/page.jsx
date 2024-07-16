"use client"

import React, { useEffect, useState } from 'react'

const UpdateUser = ({params}) => {
  const [inputVal, setInputVal] = useState({
    name:"",
    email:""
  })
  const [message, setMessage] = useState("")
  useEffect(() => {
    getUserData()
  },[params.userId])

  const getUserData = async() => {
    try {
      const apiResponse = await fetch(`http://localhost:3000/api/users/${params.userId}`);
      const userData = await apiResponse.json();
      if(userData && userData.length !== 0){
        setInputVal({
          name:userData[0]?.name,
          email:userData[0]?.email,
        })
      }
    } catch (error) {
       setMessage("Something Went Wrong !!")
    }
  }
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]:value
    })
  }
  const updateUser = async() => {
    try {
      const apiResponse = await fetch(`http://localhost:3000/api/users/${params.userId}`,{
        method:"PUT",
        body: JSON.stringify({
          name:inputVal.name,
          email:inputVal.email
        })
      })
      const apiResult = await apiResponse.json();
      if(apiResult && apiResult?.success){
        setMessage("User updated successfully")
      }else{
        setMessage("Error while updating user")
      }
    } catch (error) {
      setMessage("Something Went Wrong")
    }
  }
  return (
    <div>
      {message && message}
      <h1>Update User</h1>
      Name: <input value={inputVal.name} name="name" onChange={handleInput}/> <br />
      Email: <input value={inputVal.email} name="email" onChange={handleInput}/> <br />
      <button onClick={updateUser}>Update User</button>
    </div>
  )
}

export default UpdateUser