/* eslint-disable no-useless-computed-key */
import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "usersSection",
    initialState: {
        AllUsers:[],
        AllRoles:[],
        AllDepartments:[],
        AllGenders:[],
        AllStatus:[],

        //states for particular data
        SingleUserData:[],
        CompanyDetailByUserID:[],

        // satetes for local data
        userForUpdateData:{}
    },
    reducers: {
        ClearGetEmployeeData: (state, action) => {
            state.SingleUserData = []
            state.CompanyDetailByUserID=[]
        }
    },
    extraReducers: {
       
        ["FindAllUsers/usersSection/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            if (status >= 200 && status < 300) {
                state.AllUsers = data
            }
            else if (status >= 400 && status < 500) {
                console.log("There is some issue in APi --FindAllUsers--",state)
            }
        },
        ["AllRoleByCompanyID/usersSection/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            if (status >= 200 && status < 300) {
                state.AllRoles = data?.data
            }
            else if (status >= 400 && status < 500) {
                console.log("There is some issue in APi --AllRoleByCompanyID--",state)
            }
        },
        ["AllDepartmentsByCompanyID/usersSection/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            if (status >= 200 && status < 300) {
                state.AllDepartments = data?.data
            }
            else if (status >= 400 && status < 500) {
                console.log("There is some issue in APi --AllDepartmentsByCompanyID--",state)
            }
        },
        ["AllGenderByCompanyID/usersSection/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            if (status >= 200 && status < 300) {
                state.AllGenders = data?.data
            }
            else if (status >= 400 && status < 500) {
                console.log("There is some issue in APi --AllGenderByCompanyID--",state)
            }
        },
        ["AllStatusList/usersSection/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            if (status >= 200 && status < 300) {
                state.AllStatus = data?.data
            }
            else if (status >= 400 && status < 500) {
                console.log("There is some issue in APi --AllStatus--",state)
            }
        },
        ["GetUserServiceByUserID/usersSection/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            if (status >= 200 && status < 300) {
                state.SingleUserData = data?.data
            }
            else if (status >= 400 && status < 500) {
                console.log("There is some issue in APi --GetUserServiceByUserID--",state)
            }
        },
        ["GetUserCompanyByUserID/usersSection/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            if (status >= 200 && status < 300) {
                state.CompanyDetailByUserID = data?.data
            }
            else if (status >= 400 && status < 500) {
                console.log("There is some issue in APi --GetUserServiceByUserID--",state)
            }
        },

    }})
    
export const {ClearGetEmployeeData} = usersSlice.actions;

export default usersSlice.reducer;


