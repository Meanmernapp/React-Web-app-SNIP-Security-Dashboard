/* eslint-disable no-useless-computed-key */
import { createSlice } from "@reduxjs/toolkit";

const roleSlice = createSlice({
    name: "roleSection",
    initialState: {
        AllRoles:[],
        AllModule:[]
      
    },
    reducers: {
        // ClearGetEmployeeData: (state, action) => {
        //     state.SingleUserData = []
        //     state.CompanyDetailByUserID=[]
        // }
    },
    extraReducers: {
       
        ["GetAllRoles/roleSection/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            if (status >= 200 && status < 300) {
                state.AllUsers = data
            }
            else if (status >= 400 && status < 500) {
                console.log("There is some issue in APi --GetAllRoles Role Section--",state)
            }
        },
        ["GetAllModule/roleSection/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            if (status >= 200 && status < 300) {
                state.AllModule = data.data
            }
            else if (status >= 400 && status < 500) {
                console.log("There is some issue in APi --GetAllRoles Role Section--",state)
            }
        }

    }})
    
export const {} = roleSlice.actions;

export default roleSlice.reducer;


