import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";


import userReducer from "../features/userSlice";
import deptReducer from "../features/departmentSlice";
import caseReducer from "../features/caseSlice";
import roleReducer from "../features/roleSlice";
import statusReducer from "../features/statusSlice";
import genderReducer from "../features/genderSlice";
import loginReducer from "../features/loginSlice";
import UsersReducer from "../reduxToolkit/Users/UsersSlice"
import DepartmentReducer from '../reduxToolkit/Department/DepartmentSlice'
import CompanyReducer from "../reduxToolkit/Company/CompanySlice"
import RoleReducer from "../reduxToolkit/Role/RoleSlice"

const reducers = combineReducers({
  user: userReducer,
    dept: deptReducer,
    case: caseReducer,
    role: roleReducer,
    status: statusReducer,
    gender: genderReducer,
    login: loginReducer,
    
    users: UsersReducer,
    departments:DepartmentReducer,
    company:CompanyReducer,
    roles:RoleReducer
});


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authenticatioauthennSlice"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;

