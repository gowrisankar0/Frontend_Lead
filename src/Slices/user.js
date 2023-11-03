import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      state.user = null;
    },
  },
});

export const { setUser,removeUser } = userSlice.actions;

export default userSlice.reducer;

export const handleLogin = (token) => {
  return async (dispatch) => {
    try {
      const responce = await axios.get("https://lead-server.onrender.com/user/data", {
        headers: {
          Authorization: token,
        },
      });
      // console.log(responce);
      // console.log("from slice");
      dispatch(setUser(responce.data));
    } catch (error) {
      console.log(error);
    }
  };
};
