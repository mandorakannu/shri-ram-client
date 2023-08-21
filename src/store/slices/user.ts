import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {} as User,
  reducers: {
    addUser: (state: any, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
