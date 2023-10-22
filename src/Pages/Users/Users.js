import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import User from "../../Components/User/User";
const Users = () => {
  const [users,setUsers] =useState([]);

  let token =localStorage.getItem("token")

  const getdata =async()=>{
    try {
      const respoce =await axios.get("http://localhost:4000/users/all",{
        headers:{
          Authorization:token
        }
      })
      setUsers(respoce.data.users)
    } catch (error) {
      console.log(error);
    }
  }
  
useEffect(()=>{
 
  getdata()
},[])

const deleteUser =async(id)=>{
try {
  const {data} = await axios.delete(`http://localhost:4000/users/delete/${id}`,{
    headers:{
      Authorization:token
    }
  })
  alert(data.msg)
  getdata()
} catch (error) {
  console.log(error);
}
}



  return <div className='users'>

 <h1 className='users-title'>Users</h1>
  <div className='users-container'>
  {users.length === 0 ? (
          <div className="users__empty">
            <h1>No users found. Please add some.</h1>
            <h3>
              <Link to="/add-user">Add Users</Link>
            </h3>
          </div>
        ) : (
          users.map((user) => (
            <User
              key={user._id}
              id={user._id}
              name={user.name}
              jobrole={user.jobrole}
              age={user.age}
              contact={user.contact}
              email={user.email}
              deleteUser={() => deleteUser(user._id)}
            />
          ))
        )}
  </div>
  </div>
}

export default Users