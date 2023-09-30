import { IUser } from "@customTypes/IUser";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {} as IUser,
  reducers: {
    addUser: (state: IUser, action: PayloadAction<IUser>) => {
      state.uniqueId = action.payload.uniqueId;
      state.name = action.payload.name;
      state.motherName = action.payload.motherName;
      state.fatherName = action.payload.fatherName;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.age = action.payload.age;
      state.mobileNumber = action.payload.mobileNumber;
      state.role = action.payload.role;
      if (action.payload.role === "student") {
        state.subjects = action.payload.subjects;
        state.className = action.payload.className;
      } else if (action.payload.role === "teacher") {
        state.SubjectProfile = action.payload.SubjectProfile;
        state.qualification = action.payload.qualification;
      } else {
        return;
      }
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
