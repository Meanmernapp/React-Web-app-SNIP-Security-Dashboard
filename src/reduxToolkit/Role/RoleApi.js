
import { createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from "../../Api/Axios";


// find all roles
export const GetAllRoles = createAsyncThunk("GetAllRoles/roleSection", async (params) => {
    // document.getElementById("overlay").style.display = "block";
    let result = await apiInstance.get(`role-service/get-all`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)
    // document.getElementById("overlay").style.display = "none";

    return { data, status }
});

//get all module

export const GetAllModule = createAsyncThunk("GetAllModule/roleSection", async (params) => {
    // document.getElementById("overlay").style.display = "block";
    let result = await apiInstance.get(`module-service/get-all`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)
    // document.getElementById("overlay").style.display = "none";

    return { data, status }
});

