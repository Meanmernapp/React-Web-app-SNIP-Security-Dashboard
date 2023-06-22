
import { createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from "../../Api/Axios";

// export const DeleteDepartment = createAsyncThunk("departmentSection/deleteDepartment", async (params, { dispatch, getState }) => {

//     let result = await apiInstance.delete(`department-service/delete-by-id/${params}`).then(function (response) {
//         return response
//     }).catch(function (error) {
//         return error.response
//     })
//     const { data, status } = result
//     console.log(result)

//     return { data, status }
// });
// list of all user not belong to department
export const GetAllDepartments = createAsyncThunk("GetAllDepartments/departmentSection", async (params, { dispatch, getState }) => {

    let result = await apiInstance.get(`department-service/get-all`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

// Get All Departments By Company Id
export const GetAllDepartmentsByCompanyId = createAsyncThunk("GetAllDepartmentsByCompanyId/departmentSection", async (params, { dispatch, getState }) => {

    let result = await apiInstance.get(`department-service/get-all/by-company-id/${params?.companyID}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log("myresult",result)

    return { data, status }
});
// list of all user from department with pagination
export const ListOfUsersDepartment = createAsyncThunk("departmentSection/listOfUsersDepartment", async (params, { dispatch, getState }) => {

    let result = await apiInstance.post(`department-service/get-all-pageable-user/by-department-id/${params?.id}`,params.pagination).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result

    return { data, status }
});


//create Department

// Get All Departments By Company Id
export const GetAllUsersByCompanyId = createAsyncThunk("GetAllUsersByCompanyId/departmentSection", async (params) => {
    let result = await apiInstance.get(`user-company-service/get-all/user-data/by-company-id/${params?.companyID}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

//create Department
export const CreateDepartments = createAsyncThunk("CreateDepartments/departmentSection", async (params, { dispatch, getState }) => {
    document.getElementById("overlay").style.display = "block";
    let result = await apiInstance.post(`department-service/create`,params?.body).then(function (response) {

        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    document.getElementById("overlay").style.display = "none";
    return { data, status }
});

export const CreateDepartmentCompany = createAsyncThunk("CreateDepartmentCompany/departmentSection", async (params, { dispatch, getState }) => {
    document.getElementById("overlay").style.display = "block";
    let result = await apiInstance.post(`department-company-service/create`,params?.body).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    document.getElementById("overlay").style.display = "none";
    return { data, status }
});

// delete deparment
export const DeleteDepartment = createAsyncThunk("DeleteDepartment/departmentSection", async (params) => {
    document.getElementById("overlay").style.display = "block";
    let result = await apiInstance.post(`department-service/delete-all/by-ids`,params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    document.getElementById("overlay").style.display = "none";
    return { data, status }
});

export const DeleteDepartments = createAsyncThunk("DeleteDepartments/departmentSection", async (params) => {
    document.getElementById("overlay").style.display = "block";
    let result = await apiInstance.post(`department-service/delete-all/by-ids`,params?.SelectedDeparmentID).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    document.getElementById("overlay").style.display = "none";
    return { data, status }
});



// ----------Update Department---------
export const UpadateDepartment = createAsyncThunk("UpadateDepartment/departmentSection", async (params) => {
    document.getElementById("overlay").style.display = "block";
    let result = await apiInstance.put(`department-service/update`,params?.body).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    document.getElementById("overlay").style.display = "none";
    return { data, status }
});


export const GetDepartmentByDeparmentID = createAsyncThunk("GetDepartmentByDeparmentID/departmentSection", async (params) => {
    let result = await apiInstance.get(`department-service/get-by-id/${params.departmentID}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});


