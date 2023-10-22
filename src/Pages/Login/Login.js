import React, { useState } from 'react';
import "./Login.css";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { handleLogin } from '../../Slices/user';
import { redirect, useNavigate } from 'react-router-dom';

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
// console.log(responce);
localStorage.setItem("token",responce.data)


dispatch(handleLogin(responce.data))

navigate("/add-user")

}



  return (
    <div className='home'>
     <div>
      
    

     <lable>Email:</lable><br/>
     <input type="email" placeholder='enter a email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>


     <lable>Password:</lable><br/>
     <input type="password" placeholder='enter a password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
     <button onClick={login}>Login</button>
     </div>
    </div>
  )
}

export default Login