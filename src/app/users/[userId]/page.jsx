import Link from "next/link";

const getUser = async(id) => {
    const data = await fetch(`http://localhost:3000/api/users/${id}`)
    const userData = await data.json();
    return userData[0]
}

const UserData = async({params}) => {
    const userListData = await getUser(params.userId);
    return(
        <>
           <h1>User Information</h1>
           <h3>Name: {userListData.name}</h3>
           <h3>Email: {userListData.email}</h3>
        </>
    )
}

export default UserData;