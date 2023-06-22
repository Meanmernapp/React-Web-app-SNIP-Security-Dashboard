/* eslint-disable no-useless-computed-key */
import { createSlice } from "@reduxjs/toolkit";

const companySectionSlice = createSlice({
    name: "companySection",
    initialState: {
        CompanyID:"580925c2-fbed-4f87-83ed-b6f2492d8bc1",
    },
    reducers: {
        
    },
    extraReducers: {
        // ["GetAllDepartments/departmentSection/fulfilled"]: (state, action) => {
        //     const { data, status } = action.payload || {}
        //     if (status >= 200 && status < 300) {
        //         state.getAllDepartments = data?.data
        //     }
        //     else if (status >= 400 && status < 500) {
        //     }
        // },
      
        
    },})

export const {  } = companySectionSlice.actions;

export default companySectionSlice.reducer;