import React, { useEffect, useState } from 'react';
import "./verify.css"
import { useParams } from 'react-router-dom';
import axios from "axios";
import {Link} from "react-router-dom";

const Verify = () => {

const {token} =useParams();
const [loading,setLoading] =useState(true);

const verifyUser = async()=>{
try {
    const responce =await axios.get(`http://localhost:4000/user/verify/${token}`);
    alert(responce.data.msg); 
    setLoading(false)  
} 

catch (error) {
    console.log(error);
    setLoading(false)
}
}
useEffect(()=>{
    if(token){
        verifyUser()
    }
},[token]);

if(loading){
    return(
      <div className='verify__loading'> 
      <img src="https://codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif"
      alt="" />
      
      </div>

    )
}





  return (
    <div className='verify'>
    <h1>Veirify Successfully</h1>
    <img src="https://npm.works/wp-content/uploads/2022/01/02-lottie-tick-01-instant-2.gif"
      alt="" 
      className='verified'/>
       <Link to="/login">
        <button>Login Now</button>
       </Link>
    </div>

   
  )
}

export default Verify