import React from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css"
import { useSelector,useDispatch } from 'react-redux';
import { removeUser } from '../../Slices/user';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const dispatch=useDispatch()
  const user =useSelector((state)=>state.userInfo.user);
  const navigate =useNavigate()
 
  const logout =()=>{
    dispatch(removeUser());
    localStorage.removeItem("token")
    navigate("/")

  }

  return (
    <nav>
      <h1>Lead Management System</h1>
      <ul>
  <Link to="/add-user">AddLead</Link>
  <Link to="/users">Leads</Link>
  <Link to="update-lead">UpdateInfo</Link>
  <Link to="/update">UpdateLead</Link>
  <Link to="/delete">DeleteLead</Link>
  {user?<p onClick={logout}>Logout</p>:<Link to="/login" className='login'>Login</Link>}
  {/* {user?<Link to="/login" className='login'>Login</Link>:<p onClick={logout}>Logout</p>} */}
  </ul>
  </nav>
  )
}

export default Navbar