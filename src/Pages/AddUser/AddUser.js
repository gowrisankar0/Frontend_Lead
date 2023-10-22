import React, {useEffect, useState } from 'react'

import "./AddUser.css";
import axios from "axios"



const AddUser=()=> {
 


  const [userInfo,setUserInfo]=useState({
  
    name:"",
    email:"",
    contact:"",
    age:"",
    jobrole:"",
  })
  useEffect(()=>{
    setUserInfo((currInfo)=>{
      return{
        ...currInfo,
       
      }
    }); 
  },[]);

  const handleChange=(event)=>{
    const {name,value}=event.target;
    setUserInfo((currInfo)=>{
      return{
        ...currInfo,
        [name]:value
      }
    })
   
  

  };


  const addUser=async()=>{

    if(!userInfo.name || !userInfo.email || !userInfo.age || !userInfo.contact || !userInfo.jobrole){
      alert("please enter all details");
      return
    }
   let token = localStorage.getItem("token")
    try {
      const respoce =await axios.post("http://localhost:4000/users/add",userInfo,{
        headers:{
          Authorization:token
        }
      })
       
    alert(respoce.data.msg)
    setUserInfo({
     
      name:"",
      email:"",
      contact:"",
      age:"",
      jobrole:""
     });
    } catch (error) {
      console.log(error);
    }
    
   };
   

useEffect(()=>{
  setUserInfo((currInfo)=>{
    return {
      ...currInfo,
    

    }
  })

},[])




  return (
    <div className='adduser'>
      <div className='home_container'>
        <div className='home_form_container'>
          <h1 className='home_title'>Add User Information</h1>

           {/* <input type="text" placeholder='enter user id' disabled  value={userInfo.id} onChange={handleChange}/><br/> */}
           <input type="text" placeholder='enter user name' name="name"  value={userInfo.name} onChange={handleChange}/><br/>
           <input type="email" placeholder='enter email' name="email"  value={userInfo.email} onChange={handleChange}/><br/>
           <input type="number" placeholder='enter user contact no' name="contact"  value={userInfo.contact} onChange={handleChange}/><br/>
           <input type="number" placeholder='enter user age' name="age"  value={userInfo.age} onChange={handleChange}/><br/>
           <input type="text" placeholder='enter jobrole' name="jobrole"  value={userInfo.jobrole} onChange={handleChange}/><br/>

       <button onClick={addUser}>Add User</button>
        </div>
!

      </div>

  
    </div>
  )
}

export default AddUser