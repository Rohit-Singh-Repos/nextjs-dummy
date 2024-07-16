import Link from "next/link";
import Button from "../components/Button";

const getUsersData = async() => {
    const data = await fetch("http://localhost:3000/api/users")
    const userData = await data.json();
    return userData
}

const UserList = async() => {
    const userListData = await getUsersData();
    
    return(
        <>
           <h1>Users List</h1>
           {
            userListData && userListData.map((item,index) => (
                <div key={index}>
                    <Link href={`users/${item.id}`} children={item.name}/> &emsp;&emsp;
                    <Link href={`users/${item.id}/updateuser`} children={"Edit User"}/> &emsp;&emsp;
                    <Button userId={item.id}>Delete User</Button>
                </div>
            ))
           }
        </>
    )
}

export default UserList;