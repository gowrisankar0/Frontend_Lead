import React, { useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Users from "./Pages/Users/Users";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import AddUser from './Pages/AddUser/AddUser';
import Verify from "./Pages/Verify/Verify";
import Navbar from "./Pages/Navbar/Navbar"
import { useDispatch } from 'react-redux';
import { handleLogin } from './Slices/user';
import PrivateRoute from './Components/PrivateRoute';


const App = () => {

const dispatch =useDispatch();
useEffect(()=>{
let token =localStorage.getItem("token");
if(token){
  dispatch(handleLogin(token))
}
},[])

  return (
   <Router>
    <Navbar />
     <Routes>
     


      <Route path="/" element={<Home />} />

      <Route element={<PrivateRoute />}>

      <Route path="/add-user" element={<AddUser />} />
      <Route path="/users" element={<Users />} />

      </Route>

      <Route path="/about" element={<About />} />
   
      <Route path="/login" element={<Login />} />
      <Route path="/user/verify/:token" element={<Verify />} />



     </Routes>



   </Router>
  )
}

export default App