import React, { useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Users from "./Pages/Users/Users";
// import Update from './Pages/Update/Update';
import Login from "./Pages/Login/Login";
import AddUser from './Pages/AddUser/AddUser';
import Verify from "./Pages/Verify/Verify";
import Navbar from "./Pages/Navbar/Navbar"
import { useDispatch } from 'react-redux';
import { handleLogin } from './Slices/user';
import PrivateRoute from './Components/PrivateRoute';
import UpdateLead from './Pages/UpdateLead/UpdateLead';
// import Delete from "./Components/Delete/Delete"
import DeleteLead from './Pages/DeleteLead/DeleteLead';
// import Update from './Components/Update/Update';
import LeadUp from './Pages/LeadUd/LeadUp';


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
      <Route path="/update" element={<UpdateLead />} />
      <Route path="/update-lead/:id" element={<LeadUp />} />
      <Route path="/delete" element={<DeleteLead />} />



      </Route>

   
      <Route path="/login" element={<Login />} />
      <Route path="/user/verify/:token" element={<Verify />} />

      

     </Routes>



   </Router>
  )
}

export default App