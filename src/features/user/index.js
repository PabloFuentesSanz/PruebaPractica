import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  email: "",
  userName: "",
  publicKey: "",
  amount: 0,
  status: "idle",
};

export const getUser = createAsyncThunk(
    'counter/fetchCount',
    async (mail) => {
        console.log("mail", mail)
      const response =  await axios.get(
        `http://localhost:5000/currentUser/${mail}`
      );
      console.log(response.data)
      return response.data;
    }
  );


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.email= action.payload.email;
        state.userName= action.payload.userName;
        state.publicKey= action.payload.publicKey;
        state.amount= action.payload.amount;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const selectUser = (state) => state.user;

export default userSlice.reducer;
