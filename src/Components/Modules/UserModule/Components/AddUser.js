import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ErrorMessage, Formik, Form, useField, Field, useFormik } from "formik";
import * as Yup from "yup";
import ic_check from "../../../../images/ic-check.svg";
import ic_left_arrow from "../../../../images/ic-left-arrow.svg";
import { AppContext } from "../../../../App";
import axios from "axios";
import ResponseOk from "../../../UserDashBoard/pages/ResponseOk";
import ResponseError from "../../../UserDashBoard/pages/ResponseError";
import { FileUploader } from "react-drag-drop-files";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { allCompanyGender } from "../../../../features/genderSlice";
import {
  responseOkFunc,
  responseErrorFunc,
} from "../../../../features/userSlice";
import { allRoles } from "../../../../features/roleSlice";
import { allStatuses } from "../../../../features/statusSlice";
import { allDepartments } from "../../../../features/departmentSlice";
import PreviewImage from "../../../UserDashBoard/pages/PreviewImage";
import { useTranslation } from 'react-i18next';
import { CreateUserCompanyData } from "../../../../reduxToolkit/Users/UsersApi";
import { Genders } from "../../../../constants/utils";
import moment from 'moment';

const AddUser = () => {
  let navigate = useNavigate();
  const { t } = useTranslation();
  const [modalShow, setModalShow] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [gender,setGender]=useState();
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [dbError, setDbError] = useState(false);
  const [resp, setResp] = useState(false);
  const [email, setEmail] = useState();
  const formRef = useRef();
  const fileRef = useRef(null);
  const {
    responseOkMessage,
    responseErrorMessage,
    updateRespOk,
    updateRespError,
    responseId,
  } = useSelector((state) => state.user);
  const { allRolesValues } = useSelector((state) => state.role);
  const { allStatusValues } = useSelector((state) => state.status);
  const { allDeptValue } = useSelector((state) => state.dept);
  const { allCompanyGenderValues } = useSelector((state) => state.gender);
  const CompanyID = useSelector((state) => state.company.CompanyID);
  
  const [confirmEmail, setConfirmEmail] = useState();
  const [phone, setPhone] = useState();
  const [status, setStatus] = useState();
  const { val1 } = useContext(AppContext);

  const fileTypes = ["JPEG", "PNG", "GIF"];
  const [file, setFile] = useState(null);
  const handleChangeFile = (file) => {
    setFile(file);
  };
  const onDrop = (file) => {
    console.log(file);
  };

  useEffect(() => {
    async function fetchData() {
      const roleApi = await axios.get(
        `http://38.65.139.14:8081/corporate-citras-v1/role-service/get-all`
      );
      console.log(roleApi.data.data);
      dispatch(allRoles(roleApi.data.data));
      console.log(allRolesValues);
      const statusApi = await axios.get(
        "http://38.65.139.14:8081/corporate-citras-v1/status-service/find-all"
      );
      console.log("kkr");
      console.log(statusApi.data.data);
      dispatch(allStatuses(statusApi.data.data));
      const departmentApi = await axios.get(
        `http://38.65.139.14:8081/corporate-citras-v1/department-service/get-all/by-company-id/${CompanyID}`
      );
      console.log("kkr");
      console.log(departmentApi.data.data);
      dispatch(allDepartments(departmentApi.data.data));
      // const genderCompanyApi = await axios.get(
      //   `http://38.65.139.14:8081/corporate-citras-v1/gender-company-service/get-all/by-company-id/${CompanyID}`
      // );
      // console.log("kkr");
      // console.log(genderCompanyApi.data.data);
      // dispatch(allCompanyGender(genderCompanyApi.data.data));
    }
    fetchData();
  }, []);

  {
    allRolesValues.length > 0 &&
      allRolesValues.map((item) => {
        console.log(item.roleName);
        console.log(item.id);
      });
  }
  {
    allDeptValue.length > 0 &&
      allDeptValue.map((item) => {
        console.log(item.departmentId);
        console.log(item);
      });
  }

  {
    allStatusValues.length > 0 &&
      allStatusValues.map((item) => {
        console.log(item.statusId);
      });
  }

  const handleClick = () => {
    navigate("/users");
  };
  const [base64String, setBase64String] = useState('');
  const [userImg, setuserImg] = useState('');

console.log("????????????",base64String)
  // const handleImageUpload = (event) => {
  //   const file = event;
  //   setuserImg(event)
  //   if (file) {
  //     const reader = new FileReader();

  //     reader.onloadend = () => {
  //       const arrayBuffer = reader.result;
  //       const bytes = new Uint8Array(arrayBuffer);
  //       setBase64String(Array.from(bytes));
  //     };

  //     reader.readAsArrayBuffer(file);
  //   }
  // };

  const handleImageUpload = (event) => {
    const file = event;

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;
        setBase64String(base64String);
      };

      reader.readAsDataURL(file);
    }
  };
  const createNewData = async () => {
  document.getElementById("overlay").style.display = "block";

    const res = await axios
      .post(
        "http://38.65.139.14:8081/corporate-citras-v1/user-service/create",
        {
          dob: moment(formRef.current.values.dob).valueOf(),
          name: formRef.current.values.name,
          email: formRef.current.values.email,
          phoneNumber: formRef.current.values.phone,
        }
      )
      .then(async (response) => {
        console.log("__________________res",response)
        console.log("__________________form value",formRef.current.values)
       
        const body={
              companyId: CompanyID,
              departmentId: formRef.current.values.departmentValue,
              employeeId:formRef.current.values?.empID,
              id:"",
              endDate: moment(formRef.current.values.expiryDate).valueOf(), 
              genderId: parseInt(gender),
              image: base64String,
              roleCompanyId: formRef.current.values.roleValue,
              startDate: moment(formRef.current.values.expiryDate).valueOf(), 
              statusCompanyId:parseInt(status),
              userId: response?.data?.data?.id,
              statusId: parseInt(status),
              userRoleId:formRef.current.values.roleValue,
              // userStatusId:parseInt(formRef.current.values.statusCheckBox),
            }
          dispatch(CreateUserCompanyData(body)).then((response) => {
            dispatch(responseOkFunc(response?.payload?.data?.message));
            setModalShow(true);
          })
          .catch((err) => {
            dispatch(responseErrorFunc(err?.response?.payload?.data?.message));
            setErrorModal(true);

          });
        await axios;
        // .post(
        //   "http://38.65.139.14:8081/corporate-citras-v1/user-depatment-service/create",
        //   {
        //     userId: response.data.data,
        //     departmentId: formRef.current.values.departmentValue,
        //   }
        // )
        // .then((response) => {
        //   console.log(response);
        //   dispatch(responseOkFunc(response.data.message));
        //   setModalShow(true);
        // })
        // .catch((err) => {
        //   console.log(err.response.data.message);
        //   dispatch(responseErrorFunc(err.response.data.message));
        //   console.log(err.response.data.message);
        //   setErrorModal(true);
        // });
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        dispatch(responseErrorFunc(err.response.data.message));
        console.log(err.response.data.message);
        setErrorModal(true);
      });
  document.getElementById("overlay").style.display = "none";

  };
  const phoneRegex = /^\+?\d{12}$/;
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
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
    // email: Yup.string().email('invalid email address').required('Required'),
  });

  const length = 10;
  let x = new Array(10);
  let y = new Array(5);
  const [checkedStateX, setCheckedStateX] = useState(
    (x = new Array(x.length).fill(false))
  );
  const [checkedStateY, setCheckedStateY] = useState(
    (y = new Array(x.length).fill(false))
  );
  const handleClearButton = () => {
    Form.clear();
  };
  const handleSubmit = () => {
    navigate("/users");
  };

  const handleChangeX = (position) => {
    const updatedCheckedStateX = checkedStateX.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedStateX(updatedCheckedStateX);
    console.log(position + "  " + !checkedStateX[position]);
  };
  const handleChangeY = (position) => {
    const updatedCheckedStateY = checkedStateY.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedStateY(updatedCheckedStateY);
    console.log(position + "  " + !checkedStateY[position]);
  };
  const handleBackButton = () => {
    navigate("/users");
  };
  // console.log(formRef.current.values);

  console.log("===============",checkedStateX)
  
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
              {t("add_user")}
            </h1>
          </div>
          
          <Formik
            initialValues={{
              name: "",
              email: "",
              file: "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={(values) => {
              console.log("values", values);
            }}
            innerRef={formRef}>
            {({
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              values,
            }) => (
              <Form class="user-info" onSubmit={handleSubmit}>
                <div className="user-info">
                  {/* <PreviewImage file={values.file} /> */}
                  {/* <div class="avatar-edit"> */}
                  {/* <input
                          type="file"
                          id="imageUpload"
                          onChange={(e) => {
                            setFieldValue("file", e.target.files[0]);
                          }}
                          multiple="false"
                          accept=".png, .jpg, .jpeg"
                        /> */}
                  <FileUploader
                    multiple={false}
                    handleChange={handleImageUpload}
                    name="file"
                    types={fileTypes}
                    onDrop={onDrop}>
                    <div className="user-info__top">
                      <div className="user-info--img-container">
                        <PreviewImage file={userImg ? userImg :file} class="avatar-edit" />
                      </div>
                    </div>
                  </FileUploader>

                  {/* <label for="imageUpload"></label> */}
                  {/* </div> */}
                  {/* </div>
                  </div> */}
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
                        <label className="input-group__label">{t('email')}</label>
                        <input
                          className="input-group__text user-info__field"
                          placeholder="lcornejo@ibl.mx"
                          name="email"
                          type="email"
                          onChange={handleChange}
                          onBlur={handleBlur}></input>
                        {errors.email && touched.email ? (
                          <div className="errors">{errors.email}</div>
                        ) : null}
                      </div>

                      <div className="input-group single-group ">
                        <label className="input-group__label">
                          {t('confirm')} {t('email')}
                        </label>
                        <input
                          className="input-group__text user-info__field"
                          placeholder="lcornejo@ibl.mx"
                          name="confirmEmail"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="email"></input>
                        {errors.confirmEmail && touched.confirmEmail ? (
                          <div className="errors">{errors.confirmEmail}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="user-info__contact">
                      <div className="input-group single-group ">
                        <label className="input-group__label">
                          {t('select_role')}
                        </label>
                        <select
                          name="roleValue"
                          value={values.roleValue}
                          onChange={handleChange}
                          class="input-group__text user-info__name classic">
                          <option style={{ display: "none" }}></option>
                          {allRolesValues.length > 0 &&
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
                          placeholder="+52 442 245 3434"
                          name="phone"
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
                          DATE OF BIRTH
                        </label>
                        <input
                          type="date"
                          name="dob"
                          onChange={handleChange}
                          className="input-group__text user-info__field user-date-picker"
                          placeholder="28-05-2023"></input>
                      </div>
                      <div className="input-group single-group ">
                        <label className="input-group__label">
                          Employer Id
                        </label>
                        <input
                          className="input-group__text user-info__name"
                          name="empID"
                          placeholder="Luis Enrique Cornejo Arreola"
                          onChange={handleChange}
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
                          onChange={handleChange}
                          onBlur={handleBlur}
                          class="input-group__text user-info__name classic">
                          <option style={{ display: "none" }}></option>
                          {allDeptValue.length > 0 &&
                            allDeptValue.map((item) => (
                              <option
                                value={item?.id}
                                className="input-group__selectOption">
                                {item?.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      {/* {errors.firstname && touched.firstname ? (
                        <div>{errors.firstname}</div>
                      ) : null} */}
                      <div className="input-group single-group ">
                        <label className="input-group__label">
                          {t('select_gender')}
                        </label>

                        <select
                          name="genderValue"
                          // value={values.genderValue}
                          onChange={(e)=>{
                            
                          setGender(e.target.value)
                          }}
                          onBlur={handleBlur}
                          class="input-group__text user-info__name classic">
                          <option style={{ display: "none" }}></option>
                          
                          {Genders.length > 0 &&
                            Genders.map((item) =>{ 
                              return(
                              <option
                                value= {item?.id}
                                className="input-group__selectOption">
                                {item?.gender}
                              </option>
                            )})}
                          {/* {allCompanyGenderValues.length > 0 &&
                            allCompanyGenderValues.map((item) =>{ 
                              return(
                              <option
                                value= {item?.id}
                                className="input-group__selectOption">
                                {item?.genderName}
                              </option>
                            )})} */}
                        </select>
                      </div>
                    </div>
                    <div className="user-info__contact">
                      <div className="input-group single-group">
                        <label className="input-group__label">
                  {t('expiration_date')}
                          
                        </label>
                        <input
                          type="date"
                          name="expiryDate"
                          onChange={handleChange}
                          className="input-group__text user-info__field user-date-picker"
                          placeholder="28-05-2023"></input>
                      </div>
                    </div>

                    <div className="agreement-div">
                      <label className="agreement-div-lab">{t('status')}</label>
                      {allStatusValues.length > 0 &&
                        allStatusValues.map((item) => (
                          <label class="checkBox-container ms-4">
                            {item?.name}
                            <input
                              type="checkbox"
                              id={item.statusId}
                              name="statusCheckBox"
                              value={item?.id}
                              checked={status === item.id}
                              onChange={(e) => {
                                handleChange(e);
                                setStatus(item?.id);
                              }}
                            />
                            <span class="checkmark"></span>
                          </label>
                        ))}
                      {/* <label class="checkBox-container ms-4">
                        InActive
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label> */}
                    </div>
                    <h3 className="actual_h3">{t('assign_cases')}</h3>

                    <div className="row">
                    {x.map((currElement, index) => (
                      <div className="col-6">
                        <div className="w-100 d-flex justify-content-between align-items-center mb-1 pe-3">
                        <label className="actual_li p-0">
                              Asesinato Colosio
                            </label>
                              <input
                                className="actual_cb"
                                type="checkbox"
                                checked={checkedStateX[index]}
                                onChange={() => handleChangeX(index)}
                              />
                        </div>
                      </div>
                        ))}
                    </div>
                  </div>

                  <hr style={{marginBottom:"38px"}}></hr>
                  <div className="row mb-4 px-5">
                    <button
                      className="actual_b_button_one col-6"
                      onClick={handleClearButton}>
                     {t('clean_fields')}
                    </button>
                    <button
                      type="submit"
                      className="actual_b_button_two col-6"
                      onClick={createNewData}>
                      {t('add')}
                    </button>
                    <ResponseOk
                      to="/users"
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                    <ResponseError
                      to="/users"
                      show={errorModal}
                      onHide={() => setErrorModal(false)}
                    />
                  </div>
                </div>
                {/* <Field name='firstname' />
            {errors.firstname && touched.firstname ? (
              <div>{errors.firstname}</div>
            ) : null}
            <Field name='lastname' />
            {errors.lastname && touched.lastname ? (
              <div>{errors.lastname}</div>
            ) : null}
            <Field name='email' validate={validateEmail} />
            {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddUser;

// function ResponseOk(props) {
//   // console.log(props);
//   return (
//     <div className="dept-modal">
//       <Modal
//         dialogClassName="modal-90w"
//         {...props}
//         // size='lg'
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//         style={{ margin: "0 auto" }}>
//         <Modal.Header closeButton className="btn-close-red">
//           <Modal.Title
//             id="contained-modal-title-vcenter"
//             className="images-model-top">
//             INFORMACIÓN
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="images-model-body mx-4">
//           <div className="mx-5">
//             <div className="d-flex flex-column justify-content-center">
//               <img src={ic_check} className="images-model-body__img mx-auto" />
//               <h4 className="images-model-body__heading">{props.userValue}</h4>
//             </div>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Link
//             to="/users"
//             onClick={props.onHide}
//             className="images-model-confirm-btn ">
//             Ok
//           </Link>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }
// function ResponseError(props) {
//   // console.log(props.userValue);
//   return (
//     <div className="dept-modal">
//       <Modal
//         dialogClassName="modal-90w"
//         {...props}
//         // size='lg'
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//         style={{ margin: "0 auto" }}>
//         <Modal.Header closeButton className="btn-close-red">
//           <Modal.Title
//             id="contained-modal-title-vcenter"
//             className="images-model-top">
//             INFORMACIÓN
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="images-model-body mx-4">
//           <div className="mx-5">
//             <div className="d-flex flex-column justify-content-center">
//               <img src={ic_check} className="images-model-body__img mx-auto" />
//               <h4 className="images-model-body__heading">{props.userValue}</h4>
//             </div>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Link
//             to="/users"
//             onClick={props.onHide}
//             className="images-model-confirm-btn ">
//             Ok
//           </Link>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }
// // <div className='home_top_buttons'>
// <Image src={img1} className='home_svgs' />
{
  /* <button
  className='home_button_add'
  onClick={() => addFormFieldsForValue()}
>
  AGREGAR USUARIO <i class='fa-solid fa-plus homeAddButton'></i>
</button>
<button className='home_button_delete' onClick={() => removeFormFieldsForValues(deleteValue)}>
  ELIMINAR USUARIO(S)
  <i class='fa-solid fa-trash-can homeAddButton'></i>
</button> */
}
// </div>
