import React from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css"
import { useSelector,useDispatch } from 'react-redux';
import { removeUser } from '../../Slices/user';


const Navbar = () => {
  const dispatch=useDispatch()
  const user =useSelector((state)=>state.userInfo.user);
 
  const logout =()=>{
    dispatch(removeUser());
    localStorage.removeItem("token")
  }

  return (
    <nav>
      <h1>User Management System</h1>
      <ul>
  <Link to="/add-user">AddUser</Link>
  <Link to="/about">About</Link>
  <Link to="/users">User</Link>
  <Link to="/contact">Contact</Link>
  {user?<p onClick={logout}>Logout</p>:<Link to="/login">Login</Link>}
  </ul>
  </nav>
  )
}

export default Navbar