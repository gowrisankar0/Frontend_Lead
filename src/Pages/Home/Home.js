import React, { useState } from 'react';
import "./Home.css";
import axios from "axios" 

const Home = () => {
  const [name,setName] =useState("");
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");



const signUp = async()=>{

  if(!name || !email || !password){
    alert("All fields are mandatory")
  }
console.log(name,email,password);
const {data} =await axios.post("https://lead-server.onrender.com/user/signup",{
  name,
  email,
  password
});
console.log(data);
alert(data.msg)

setName("")
setEmail("")
setPassword("")
}

  return (
    <div className='home'>
     <div className='form-container'>
      <h1>Register Here</h1><hr />
      
     <lable>Name:</lable><br/>
     <input type="text" placeholder='enter a name' value={name} onChange={(e)=>setName(e.target.value)}/><br/>

     <lable>Email:</lable><br/>
     <input type="email" placeholder='enter a email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>


     <lable>Password:</lable><br/>
     <input type="password" placeholder='enter a password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
          <button onClick={signUp}>SignUp</button>
     </div>
    </div>
  )
}

export default Home