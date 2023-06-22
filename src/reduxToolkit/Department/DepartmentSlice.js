/* eslint-disable no-useless-computed-key */
import { createSlice } from "@reduxjs/toolkit";

const departmentSectionSlice = createSlice({
    name: "departmentSection",
    initialState: {
        getAllDepartments:[],
        getAllDepartmentsByCompanyId:[],
        getAllUsersByCompanyId:[],

        singleDepartmentDetail:[]
     
    },
    reducers: {
        
    },
    extraReducers: {
        ["GetAllDepartments/departmentSection/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            if (status >= 200 && status < 300) {
                state.getAllDepartments = data?.data
            }
            else if (status >= 400 && status < 500) {
            }
        },
        ["GetAllDepartmentsByCompanyId/departmentSection/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            if (status >= 200 && status < 300) {
                state.getAllDepartmentsByCompanyId = data?.data
            }
            else if (status >= 400 && status < 500) {
            }
        },
        //for create Department
        ["GetAllUsersByCompanyId/departmentSection/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            if (status >= 200 && status < 300) {
                state.getAllUsersByCompanyId = data?.data
            }
            else if (status >= 400 && status < 500) {
            }
        },
        ["GetDepartmentByDeparmentID/departmentSection/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            if (status >= 200 && status < 300) {
                state.singleDepartmentDetail = data?.data
            }
            else if (status >= 400 && status < 500) {
            }
        },
        
    },})

export const {  } = departmentSectionSlice.actions;

export default departmentSectionSlice.reducer;