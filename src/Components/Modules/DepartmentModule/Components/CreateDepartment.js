import React, { useState, useContext, useRef, useEffect } from "react";
import ic_left_arrow from "../../../../images/ic-left-arrow.svg";
import ic_sort_up from "../../../../images/ic-sort-up.svg";
import ic_search from "../../../../images/NavBar/ic-search.svg";
import { ErrorMessage, Formik, Form, useField, Field, useFormik } from "formik";
import ic_employee from "../../../../images/ic-employee.png";
import ic_trash_outline from "../../../../images/ic-trash-outline.png";
import ic_cancel from "../../../../images/ic-cancel.svg";
import { useNavigate, Link } from "react-router-dom";
import ic_check from "../../../../images/ic-check.svg";
import { Modal } from "react-bootstrap";
import { AppContext } from "../../../../App";
import { useDispatch, useSelector } from "react-redux";
import ic_add from "../../../../images/ic-add.svg";
import axios from "axios";
import * as Yup from "yup";
import { useTranslation } from 'react-i18next';

import ResponseOk from "../../../UserDashBoard/pages/ResponseOk";
import ResponseError from "../../../UserDashBoard/pages/ResponseError";
import {
  responseErrorFuncD,
  updateErrorFuncD,
  removeSelectedUser,
  addSelectedUserInTable,
  addSelectedUser,
  getDepartmentCompanyData,
} from "../../../../features/departmentSlice";
import {
  responseOkFunc,
  responseErrorFunc,
} from "../../../../features/userSlice";
import AddUserModal from "../Modal/AddUserModal";
import { CreateDepartmentCompany, CreateDepartments, GetAllDepartments, GetAllDepartmentsByCompanyId, GetAllUsersByCompanyId } from "../../../../reduxToolkit/Department/DepartmentApi";


const CreateDepartment = () => {
  let navigate = useNavigate();
  const { t } = useTranslation();
  const CompanyID = useSelector((state) => state.company.CompanyID);
  const { getAllUsersByCompanyId } = useSelector((state) => state?.departments);


  const [modalSee, setModalSee] = useState(false);
  const { val1 } = useContext(AppContext);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const formRef = useRef();
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const DeptSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
  });
  const {
    departCompanyData,
    responseErrorMessageD,
    updateRespOkD,
    addSelectedUserInTableValue,
    addSelectedUserValue,
  } = useSelector((state) => state.dept);

  const employee_data = {
    Leftimg: ic_employee,
    nameVar: "NOMBRE",
    phoneVar: "TELÉFONO",
    emailVar: "CORREO",
    rightImg: ic_trash_outline,
  };

  // console.log(departmentArray);
  const handleClick = () => {
    navigate("/departments");
  };
  const handleRemove = (user) => {
    setSelectedUsers(selectedUsers.filter((u) => u.id !== user.id));

    // Dispatch the action to remove the user from the global state
    dispatch(removeSelectedUser(user));
  };
  const handleClickC = () => {
    console.log("Navigate");
    navigate("/departments");
  };
  const createNewData = async () => {
    let body = {
      name: formRef.current.values.name,
      companyId: CompanyID,
      userInChargeId: formRef.current?.values?.inChargeID,
    }

    await dispatch(CreateDepartments({ body: body})).then(async(response) => {
        console.log("create department",response);
        console.log(response);
        if(response?.payload?.data?.success == false){
          dispatch(responseErrorFunc(response?.payload?.data?.message));
          setErrorModal(true);
        }else{
          dispatch(responseOkFunc(response?.payload?.data.message));
          setModalShow(true);
          
    await dispatch(GetAllDepartments())
   await dispatch(GetAllDepartmentsByCompanyId({ companyID: CompanyID }))
          // dispatch(CreateDepartmentCompany())
          navigate("/departments");

        }
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
        dispatch(responseErrorFunc(err.response?.payload?.data?.message));
        console.log(err.response.data.message);
        setErrorModal(true);
      });
      
  };




  useEffect(() => {
    dispatch(GetAllUsersByCompanyId({ companyID: CompanyID }))
  }, [])

  return (
    <div   >
      <div className="container-size">
        <div className=" container-fluid">
          <div className="d-flex justify-content-start align-items-center">
            <i class="fa-solid fa-arrow-left " onClick={handleClick} style={{ fontSize: "32px", color: "#00506A" }}></i>
            <h1 className="main-heading ms-4">{t('create_department')}</h1>
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              // confirmEmail: "",
              // gender: "",
            }}
            validationSchema={DeptSchema}
            onSubmit={(values) => {
              console.log("values", values);
            }}
            innerRef={formRef}>
            {({ errors, handleChange, handleBlur, touched, values }) => (
              <div className="mt-5">
                <div className="row">
                  <div className="department-create__left justify-content-center ml-5 pl-5 col-sm-12 col-md-12 col-lg-6 vl-update-report " style={{ padding: "0 2.5em" }}>
                    <h5 className="mb-4"> {t('data')}</h5>
                    <form>
                      <div className="input-group-role single-group mt-2">
                        <label className="input-group-role__label">
                          {t('name')}
                        </label>
                        <input
                          className="input-group-department__text user-info-role__fieldModal"
                          // placeholder="EMPLEADO GENERAL"
                          name="name"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}></input>
                        {errors.name && touched.name ? (
                          <div className="errors">{errors.name}</div>
                        ) : null}
                      </div>
                      <div className="input-group-role single-group mt-4">
                        <label className="input-group-role__label">
                          {t('incharge')}
                        </label>
                        <select
                          name="inChargeID"
                          value={values.inChargeID}
                          class="input-group-department__text user-info-role__fieldModal classic"
                          onChange={handleChange}>
                          <option style={{ display: "none" }}></option>
                          {Array.isArray(getAllUsersByCompanyId) &&
                            getAllUsersByCompanyId.length > 0 &&
                            getAllUsersByCompanyId.map((item) => (
                              <option value={item.id}>{item.name}</option>
                            ))}
                        </select>
                      </div>
                    </form>
                  </div>

                  <div className="col-sm-12 col-md-10 col-lg-6 ">
                    <div className="department-create">
                      <div className="">
                        <h5 className="col-12 text-end department-create__right__mainHeading__h5">
                          {t('add_users_to_the_department')}
                        </h5>
                        <p className="col-12 text-end department-create__right__mainHeading__p">
                          {/* {t('total')} {t('users')} 5 */}
                          Total usuarios 5
                        </p>
                      </div>
                      <div className="department-create__right__searchbox float-end">
                        <input
                          type="text"
                          name=""
                          placeholder={t('type_the_name_to_search')}
                          className="input_text"
                          id=""
                        />
                        <button className="department-create__right__searchbox__button">
                          <img src={ic_search} />
                        </button>
                      </div>
                      {addSelectedUserInTableValue.map((item) => (
                        <div className="department-create__right__mainDiv float-end">
                          <img
                            src={employee_data.Leftimg}
                            className="department-create__right__mainDiv__Rightimg"
                          />
                          <div className="department-create__right__mainDiv__insideDiv">
                            <p className="department-create__right__mainDiv__insideDiv__pOne">
                              {item.name}
                            </p>
                            <p className="department-create__right__mainDiv__insideDiv__pTwo">
                              {employee_data.nameVar}
                            </p>
                          </div>
                          <div className="department-create__right__mainDiv__insideDiv">
                            <p className="department-create__right__mainDiv__insideDiv__pOne">
                              {item.phoneNumber}
                            </p>
                            <p className="department-create__right__mainDiv__insideDiv__pTwo">
                              {employee_data.phoneVar}
                            </p>
                          </div>
                          <div className="department-create__right__mainDiv__insideDiv">
                            <p className="department-create__right__mainDiv__insideDiv__pOne">
                              {item.email}
                            </p>
                            <p className="department-create__right__mainDiv__insideDiv__pTwo">
                              {employee_data.emailVar}
                            </p>
                          </div>
                          <button
                            className="role-model-body__ul__li__btn"
                            type="button"
                            onClick={() => handleRemove(item)}>
                            <img
                              src={employee_data.rightImg}
                              className="department-create__right__mainDiv__Rightimg"
                            />
                          </button>
                        </div>
                      ))}
                      <button
                        className="department-create__right__addButton me-0"
                        onClick={() => setModalSee(true)}>
                        {t('add_user')}
                        <i class="fa-solid fa-plus fa-lg ms-3"></i>
                        {/* <img src={ic_add} className="roles-header__icAdd ms-2" /> */}
                      </button>
                      <AddUserModal
                        show={modalSee}
                        onHide={() => setModalSee(false)}
                      />
                    </div>
                  </div>
                </div>
                <div className="department-create--footer  row mx-auto justify-content-center my-5">
                  <button className="department-create--footer__buttonCancel   col-sm-6  col-md-4 col-lg-3 role-model-close-btn">
                    {t('cancel')}
                  </button>
                  <button
                    className="department-create--footer__buttonOk col-sm-6 col-md-4 col-lg-3 "
                    onClick={createNewData}>
                    {t('create_department')}
                  </button>
                  <ResponseOk
                    to="/departments"
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                  <ResponseError
                    userValue={responseErrorMessageD}
                    show={errorModal}
                    to="/departments"
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CreateDepartment;
