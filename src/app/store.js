import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "../Slices/user";


const store =configureStore({
    reducer:{
        userInfo:useReducer
    }
});



export default store