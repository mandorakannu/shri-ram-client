import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserById = createAsyncThunk(
  "users/fetchUserData",
  async (userId: string) => {
    const response = await axios.get(`http://localhost:8000/getUser/${userId}`);
    return response.data;
  }
);
