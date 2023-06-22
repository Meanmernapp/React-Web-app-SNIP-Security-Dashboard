import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCompanyGenderValues: "",
};

export const genderSlice = createSlice({
  name: "gender",
  initialState,
  reducers: {
    allCompanyGender: (state, action) => {
      state.allCompanyGenderValues = action.payload;
    },
  },
});

export const { allCompanyGender } = genderSlice.actions;
export default genderSlice.reducer;
