/* eslint-disable no-useless-computed-key */
import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import ic_check from "../../../../images/ic-check.svg";
import * as Yup from "yup";
import ic_left_arrow from "../../../../images/ic-left-arrow.svg";
import { AppContext } from "../../../../App";
import { useSelector, useDispatch } from "react-redux";
import ResponseOk from "../../../UserDashBoard/pages/ResponseOk";
import moment from "moment";
import ResponseError from "../../../UserDashBoard/pages/ResponseError";

import { AllDepartmentsByCompanyID, AllGenderByCompanyID, AllRoleByCompanyID, FindAllUsers, GetUserServiceByUserID, AllStatusList, UpdateUserData, UpdateUserRoleData, UpdateUserCompanyData, GetUserCompanyByUserID } from "../../../../reduxToolkit/Users/UsersApi";
import { useTranslation } from "react-i18next";
import Swal from 'sweetalert2'
import axios from "axios";
import { ClearGetEmployeeData } from "../../../../reduxToolkit/Users/UsersSlice";


const UpdateUser = () => {
  let navigate = useNavigate();
  const { t } = useTranslation();
  const CompanyID = useSelector((state) => state.company.CompanyID);
  const { SingleUserData, AllRoles, AllDepartments, CompanyDetailByUserID, AllStatus } = useSelector(state => state.users);
  console.log("all department",AllDepartments)
  console.log("all status",AllStatus)
  console.log("all SingleUserData",SingleUserData)
  console.log("all CompanyDetailByUserID",CompanyDetailByUserID)

  
  const { allRolesValues } = useSelector((state) => state.role);
  
  console.log("all roles",allRolesValues)

  const currentSelectedID = localStorage.getItem("UserIdToUpdate")

  const [status, setStatus] = useState(CompanyDetailByUserID?.statusCompanyId);
  const [department, setDepartment] = useState();
  const [role, setRole] = useState();

  const location = useLocation();
  const [Img, setImg] = useState(location?.state?.data)

  const [modalShow, setModalShow] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [prevDate, setPrevDate] = useState("2019-05-01");
  const dispatch = useDispatch();
  const { responseOkMessage } = useSelector((state) => state.user);
  const { responseErrorMessage } = useSelector((state) => state.user);
  const { val1 } = useContext(AppContext);
  const { userIdData } = useSelector((state) => state.user);
  const formRef = useRef();


  const handleClick = () => {
    navigate("/users");
  };
  const phoneRegex = /^\+?\d{12}$/;


  const SignUpSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    confirmEmail: Yup.string()
      .oneOf([Yup.ref("email"), null], "Emails do not match")
      .required("Confirm email is required"),
    phone: Yup.string()
      .matches(phoneRegex, "Phone number is not valid")
      .required("Phone number is not required"),
  });


  const handleClearButton = () => {
    Form.clear();
  };

  useEffect(() => {
    dispatch(GetUserServiceByUserID({ userID: currentSelectedID }))
    dispatch(GetUserCompanyByUserID({ userID: currentSelectedID }))
    dispatch(FindAllUsers());
    dispatch(AllRoleByCompanyID({ companyID: CompanyID }));
    dispatch(AllDepartmentsByCompanyID({ companyID: CompanyID }));
    dispatch(AllGenderByCompanyID({ companyID: CompanyID }));
    dispatch(AllStatusList());
  }, [])


  useEffect(() => {
    setStatus(CompanyDetailByUserID?.statusCompanyId)
  }, [CompanyDetailByUserID])

  useEffect(() => {
    return (() => {
      dispatch(ClearGetEmployeeData())
    })
  }, [])

  return (
    <div   >
      <div className="container-size">
        <div className=" container-fluid">
          <div className="row">
            <h1 className="Actual_h1 col-12">
              <button
                onClick={handleClick}
                className="department-create-header__button">
                <img src={ic_left_arrow} className="back-arrow" />
              </button>
              {t('update_user')}
            </h1>
          </div>
          <Formik
            enableReinitialize
            initialValues={{
              name: SingleUserData?.name,
              email: SingleUserData?.email,
              phone: SingleUserData?.phoneNumber,
              dob: moment(SingleUserData?.dob).format('YYYY-MM-DD'),
              empID: CompanyDetailByUserID?.employeeId,
              expiryDate: prevDate,
              statusCheckBox: userIdData.statusId,
              confirmEmail: SingleUserData?.email,
              departmentValue: CompanyDetailByUserID?.departmentCompanyId,
              roleValue: CompanyDetailByUserID?.userRoleId,
            }}
            validationSchema={SignUpSchema}
            onSubmit={async (values) => {

              //update user data
              let body = {
                // dob: moment().valueOf(values.dob),
                dob: moment(values.dob).valueOf(),
                name: values.name,
                email: values.email,
                phoneNumber: values.phone,
                id: SingleUserData?.id
              }
              await dispatch(UpdateUserData(body)).then(async (response) => {
                console.log("user data reponse", response)
                if (response?.payload?.status >= 200 && response?.payload?.status <= 300) {
                  await Swal.fire({
                    icon: 'success',
                    title: 'User update successfully.',
                    html: `${response?.payload?.data?.message}`,
                    showConfirmButton: false,
                    timer: 2000
                  })
                }
                if (response?.payload?.status >= 400) {
                  await Swal.fire({
                    icon: 'error',
                    title: 'User Data Not Updated',
                    html: `${response?.payload?.data?.message}`,
                    showConfirmButton: false,
                    timer: 4000
                  })
                }
              })


              //update company data
              let CompanyBody = {
                ...CompanyDetailByUserID,
                ["userId"]: SingleUserData?.id,
                ["statusId"]:Number(status),
                ["genderId"]:1,
                ["departmentId"]:department?.id,
                ["userRoleId"]:values?.roleValue,

              }
              
              console.log("submitte data reponse before ", CompanyBody)
              await dispatch(UpdateUserCompanyData({ body: CompanyBody })).then(async (response) => {
                console.log("submitte data reponse", response)
                if (response?.payload?.status >= 200 && response?.payload?.status <= 300) {
                  await Swal.fire({
                    icon: 'success',
                    title: 'User Company Updated SuccessFuly',
                    html: `${response?.payload?.data?.message}`,
                    showConfirmButton: false,
                    timer: 2000
                  })
                }
                if (response?.payload?.status >= 400) {
                  await Swal.fire({
                    icon: 'error',
                    title: 'User Company Not Updated',
                    html: `${response?.payload?.data?.message}`,
                    showConfirmButton: false,
                    timer: 4000
                  })
                }
              })


              //update user role data
              // let RoleBody = {
              //   id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              //   roleCompanyId: role?.id,
              //   userId: SingleUserData?.id
              // }
              // await dispatch(UpdateUserRoleData({ body: RoleBody })).then((response) => {
              //   console.log("submitte data reponse 2-->", response)
              // })
              navigate("/users")
            }}
            innerRef={formRef}>
            {({
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              values,
            }) => (
              <Form class="user-info" onSubmit={handleSubmit}>
                <div className="user-info">
                  <div className="user-info__top">
                    <div className="user-info--img-container">
                      <img
                        src={Img}
                        className="display_image"
                        alt="user image"
                      />
                      <div class="avatar-edit">
                        <input
                          type="file"
                          id="imageUpload"
                          accept=".png, .jpg, .jpeg"
                        />
                        <label for="imageUpload"></label>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="user-info__detail">
                  <div className="me-3">
                    <div className="input-group">
                      <label className="input-group__label">
                       {t('full_name')}
                      </label>
                      <input
                        className="input-group__text user-info__name"
                        name="name"
                        value={values?.name}
                        placeholder="Luis Enrique Cornejo Arreola"
                        onChange={handleChange}
                        onBlur={handleBlur}></input>
                      {errors.name && touched.name ? (
                        <div className="errors">{errors.name}</div>
                      ) : null}
                    </div>
                    </div>

                    <div className="user-info__contact">
                      <div className="input-group single-group ">
                        <label className="input-group__label">
                          {t('email')}
                        </label>
                        <input
                          className="input-group__text user-info__field"
                          placeholder="lcornejo@ibl.mx"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}></input>
                        {errors.email && touched.email ? (
                          <div className="errors">{errors.email}</div>
                        ) : null}
                      </div>

                      <div className="input-group single-group ">
                        <label className="input-group__label">
                          {t('confirm')} &nbsp;
                          {t('email')}
                        </label>
                        <input
                          className="input-group__text user-info__field"
                          placeholder="lcornejo@ibl.mx"
                          name="confirmEmail"
                          value={values.confirmEmail}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="email"></input>
                        {errors.confirmEmail && touched.confirmEmail ? (
                          <div className="errors">{errors.confirmEmail}</div>
                        ) : null}
                      </div>
                    </div>

                    {/* <input className='input-group-report__text user-info__name'></input> */}
                    <div className="user-info__contact">
                      <div className="input-group single-group ">
                        <label className="input-group__label">
                          {t('select_role')}
                        </label>

                        <select
                          name="roleValue"
                          value={values.roleValue}
                          onChange={(event) => {
                            handleChange(event)
                            const selectedRoleId = event.target.value;
                            const selectedRole = allRolesValues.find(
                              (item) => item.id === selectedRoleId
                            );
                            setRole(selectedRole);
                          }}
                          class="input-group__text user-info__name classic">
                          <option style={{ display: "none" }}></option>
                          {Array.isArray(allRolesValues) &&
                            allRolesValues.length > 0 &&
                           allRolesValues.map((item) => (
                              <option
                                value={item?.id}
                                className="input-group__selectOption">
                                {item?.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className="input-group single-group ">
                        <label className="input-group__label">{t('telephone')}</label>
                        <input
                          className="input-group__text user-info__field"
                          placeholder="+52 442 - 245 -3434"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}></input>
                        {errors.phone && touched.phone ? (
                          <div className="errors">{errors.phone}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="user-info__contact">
                      <div className="input-group single-group">
                        <label className="input-group__label">
                          {t('date_of_birth')}
                        </label>
                        <input
                          type="date"
                          name="dob"
                          value={values.dob}
                          onChange={handleChange}
                          className="input-group__text user-info__field user-date-picker"
                          placeholder="28-05-2023"></input>
                      </div>
                      <div className="input-group single-group ">
                        <label className="input-group__label">
                          {t('employee_id')}
                        </label>
                        <input
                          className="input-group__text user-info__name"
                          name="empID"
                          value={values?.empID}
                          placeholder="Luis Enrique Cornejo Arreola"
                          onChange={handleChange}
                          disabled
                          onBlur={handleBlur}></input>
                        {/* {errors.name && touched.name ? (
                          <div className="errors">{errors.name}</div>
                        ) : null} */}
                      </div>
                    </div>

                    <div className="user-info__contact">
                      <div className="input-group single-group ">
                        <label className="input-group__label">
                          {t('select_department')}
                        </label>

                        <select
                          name="departmentValue"
                          value={values.departmentValue}
                          onChange={(event) => {
                            const selectedDepartmentId = event.target.value;
                            const selectedDepartment = AllDepartments.find(
                              (item) => item.id === selectedDepartmentId
                            );
                            setDepartment(selectedDepartment);
                          }}
                          onClick={(event) => {
                            const selectedDepartmentId = event.target.value;
                            const selectedDepartment = AllDepartments.find(
                              (item) => item.id === selectedDepartmentId
                            );
                            setDepartment(selectedDepartment);
                          }}
                          onBlur={handleBlur}
                          class="input-group__text user-info__name classic">
                          {Array.isArray(AllDepartments) &&
                            AllDepartments.length > 0 &&
                            AllDepartments.map((item) => (
                              <option
                                value={item?.id}
                                className="input-group__selectOption">
                                {item?.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className="input-group single-group">
                        <label className="input-group__label">
                          {t('expiration_date')}
                        </label>
                        <input
                          type="date"
                          name="expiryDate"
                          value={values.expiryDate}
                          onChange={handleChange}
                          className="input-group__text user-info__field user-date-picker"
                        />
                      </div>
                    </div>

                    <div className="agreement-div">
                      <label className="agreement-div-lab">{t('state')}</label>
                      {Array.isArray(AllStatus) &&
                        AllStatus.length > 0 &&
                        AllStatus.map((item) => {
                          return (
                            <label class="checkBox-container ms-4">
                              {item?.name}
                              <input
                                type="radio"
                                className="ms-2"
                                value={item?.id}
                                checked={status == item?.id ? true : false}
                                onChange={(e) => {
                                  setStatus(item?.id);
                                }}
                              />
                              <span class="checkmark"></span>
                            </label>
                          )
                        })}
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <button
                      className="actual_b_button_one col-6"
                      onClick={handleClearButton}>
                      {t('clean_fields')}
                    </button>
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="actual_b_button_two col-6">
                      {t('update')}
                    </button>
                    <ResponseOk
                      userValue={responseOkMessage}
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                    <ResponseError
                      userValue={responseErrorMessage}
                      show={errorModal}
                      onHide={() => setModalShow(false)}
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;

