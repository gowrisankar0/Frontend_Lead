import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleLogin } from '../Slices/user';
import { Outlet,Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    const user =useSelector((state)=>state.userInfo.user);
    const [loading,setLoading]=useState(true);

    const dispatch=useDispatch();

useEffect(()=>{
    let token =localStorage.getItem("token");
    if(token){
        dispatch(handleLogin(token))
        

        setTimeout(() => {
            setLoading(false)
        }, 500);
    }
},[])

if(loading){
    return <h1>Loading....</h1>
}
if(!user){
    return <Navigate to="/login"/>
}

  return <Outlet />
}

export default PrivateRoute

