import React, {useEffect, useState } from 'react'

import "./AddUser.css";
import axios from "axios"



const AddUser=()=> {
 


  const [userInfo,setUserInfo]=useState({
  
    name:"",
    age:"",
    adress:"",
    contact:"",
    enquiry:"",
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

    if(!userInfo.name || !userInfo.age || !userInfo.adress || !userInfo.contact || !userInfo.enquiry){
      alert("please enter all details");
      return
    }
   let token = localStorage.getItem("token")
    try {
      const respoce =await axios.post("https://lead-server.onrender.com/users/add",userInfo,{
        headers:{
          Authorization:token
        }
      })
       
    alert(respoce.data.msg)
    setUserInfo({
     
      name:"",
      age:"",
      adress:"",
      contact:"",
      enquiry:""
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
          <h1 className='home_title'>Enter Lead's Information</h1><hr />

           {/* <input type="text" placeholder='enter user id' disabled  value={userInfo.id} onChange={handleChange}/><br/> */}
           <input type="text" placeholder='Enter Lead Name' name="name"  value={userInfo.name} onChange={handleChange}/><br/>
           <input type="number" placeholder='Enter Lead Age' name="age"  value={userInfo.age} onChange={handleChange}/><br/>
           <input type="text" placeholder='Enter Lead Adress' name="adress"  value={userInfo.adress} onChange={handleChange}/><br/>
           <input type="number" placeholder='Enter Lead Mobile' name="contact"  value={userInfo.contact} onChange={handleChange}/><br/>
           <input type="text" placeholder='Enter Lead Enquiry' name="enquiry"  value={userInfo.enquiry} onChange={handleChange}/><br/>

       <button onClick={addUser}>Add User</button>
        </div>
!

      </div>

  
    </div>
  )
}

export default AddUser