import React, { useState } from 'react';
import "./Login.css";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { handleLogin } from '../../Slices/user';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
  
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const dispatch =useDispatch();
  const navigate =useNavigate()

const login = async()=>{

  if(!email || !password){
    alert("please provide all informations");
    return
  }
const responce =await axios.post("http://localhost:4000/user/login",{

  email,
  password
});

  localStorage.setItem("token",responce.data)
dispatch(handleLogin(responce.data))
navigate("/add-user")
// localStorage.setItem("token",responce.data)
// dispatch(handleLogin(responce.data))

// console.log(responce);




}



  return (
    <div className='home'>
     <div className='form'>
      
    <h1>Login</h1><hr/>

     <lable>Email:</lable><br/>
     <input type="email" placeholder='Enter a Email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>


     <lable>Password:</lable><br/>
     <input type="password" placeholder='Enter a Password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
     <button onClick={login}>Login</button>
     </div>
    </div>
  )
}

export default Login