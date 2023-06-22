
import { createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from "../../Api/Axios";


// find all users
export const FindAllUsers = createAsyncThunk("FindAllUsers/usersSection", async (params) => {
    // document.getElementById("overlay").style.display = "block";
    let result = await apiInstance.get(`user-service/find-all`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)
    // document.getElementById("overlay").style.display = "none";

    return { data, status }
});

// get all role by company id
export const AllRoleByCompanyID = createAsyncThunk("AllRoleByCompanyID/usersSection", async (params) => {
    let result = await apiInstance.get(`user-role-company-service/get-all/by-company-id/${params?.companyID}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

// get all departments by company id
export const AllDepartmentsByCompanyID = createAsyncThunk("AllDepartmentsByCompanyID/usersSection", async (params) => {
    let result = await apiInstance.get(`department-service/get-all/by-company-id/${params?.companyID}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log("de>>>>>>>>>>>>>>>>>>>>>>",result)

    return { data, status }
});

// get all gender by company id
export const AllGenderByCompanyID = createAsyncThunk("AllGenderByCompanyID/usersSection", async (params) => {
    let result = await apiInstance.get(`gender-company-service/get-all/by-company-id/${params?.companyID}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});


// get all status
export const AllStatusList = createAsyncThunk("AllStatusList/usersSection", async (params) => {
    let result = await apiInstance.get(`status-service/find-all`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

// delete User
export const DeleteUsers = createAsyncThunk("DeleteUsers/usersSection", async (params) => {
    // document.getElementById("overlay").style.display = "block";
    let result = await apiInstance.post(`user-service/delete-all/by-ids`,params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)
    // document.getElementById("overlay").style.display = "none";

    return { data, status }
});

// delete company by user if
export const DeleteCompanyByUserID = createAsyncThunk("DeleteCompanyByUserID/usersSection", async (params) => {
    // document.getElementById("overlay").style.display = "block";
    let result = await apiInstance.post(`user-company-service/delete-all/by-user-ids`,params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)
    // document.getElementById("overlay").style.display = "none";

    return { data, status }
});


// -------------------Create Data----------------------

export const CreateUserCompanyData = createAsyncThunk("CreateUserCompanyData/usersSection", async (params) => {
    let result = await apiInstance.post(`user-company-service/create`,params ).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});

// -------------------UPDATE DATA----------------------
        // ---Requrired Api to Get Data To Update a User---

// get specific user data 
export const GetUserServiceByUserID = createAsyncThunk("GetUserServiceByUserID/usersSection", async (params) => {
    let result = await apiInstance.get(`user-service/get-by-id/${params?.userID}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

// get company by user id
export const GetUserCompanyByUserID = createAsyncThunk("GetUserCompanyByUserID/usersSection", async (params) => {
    let result = await apiInstance.get(`user-company-service/get-by-user-id/${params?.userID}`).then(function (response) {
        console.log("<<<<<<<<----------->>>>>>>",response)
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});


       // ---Requrired Api to set updated Data of a user---

// get user service by user id
export const UpdateUserData = createAsyncThunk("GetUserServiceByUserID/usersSection", async (params) => {
    let result = await apiInstance.put(`user-service/update`,params ).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});

// get user service by user id
export const UpdateUserCompanyData = createAsyncThunk("GetUserServiceByUserID/usersSection", async (params) => {
    let result = await apiInstance.put(`user-company-service/update`,params?.body ).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});

// get user service by user id
export const UpdateUserRoleData = createAsyncThunk("UpdateUserRoleData/usersSection", async (params) => {
    let result = await apiInstance.put(`user-role-controller/update`,params?.body ).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});

