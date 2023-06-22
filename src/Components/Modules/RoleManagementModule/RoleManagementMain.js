import React, { useState, useContext, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import img4 from "../../../images/NavBar/ic-search.svg";
import { Image } from "react-bootstrap";
import ic_add from "../../../images/ic-add.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../../App";
import { Formik, Form } from "formik";
import ResponseOk from "../../UserDashBoard/pages/ResponseOk";
import ResponseError from "../../UserDashBoard/pages/ResponseError";
import ResponseDelete from "../../UserDashBoard/pages/ResponseDelete";
import { responseOkFunc, responseErrorFunc } from "../../../features/userSlice";
import { getAllCompanyRoles } from "../../../features/roleSlice";
import { allUsers } from "../../../features/userSlice";
import { useTranslation } from 'react-i18next';
import cancelIcon from "../../../assets/images/icons/cancel.svg"

import axios from "axios";
import DeleteRoleModal from "./Modal/DeleteRoleModal";
import { GetAllModule } from "../../../reduxToolkit/Role/RoleApi";
const RoleManagementMain = () => {
  const { t } = useTranslation();
  const {AllModule
  } = useSelector((state) => state.roles);

  console.log("@@@@@@@@@@@@",AllModule)
  const [open, setOpen] = useState(true);
  const [openA, setOpenA] = useState(false);
  const [modalSee, setModalSee] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalShowOk, setModalShowOk] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const dispatch = useDispatch();
  const { allCompanyRoles } = useSelector((state) => state.role);
  const [checkValue, setCheckValue] = useState();
  const [checkName, setCheckName] = useState();
  const [modalUpdateShow, setModalUpdateShow] = useState();
  const [modalDeleteShow, setModalDeleteShow] = useState();
  const [roles, setRoles] = useState([]);
  const { userValue } = useSelector((state) => state.user);


  const roles_heading = {
    rol: t('role'),
    addSheets: t('up_sheets'),
    removeSheets: t('delete_sheet'),
    exportSheets: t('export_sheets'),
    admin: t('manage'),
    createUser: t('create_user'),
    updateUser: t('update_user'),
    deleteUser: t('delete_user'),
  };

  const permission_headings = {
    users: t('users'),
    root: "ROOT",
    admin: "ADMINISTRADOR",
  };
 
  const handleInputOnClick = (e, item) => {
    let isChecked = e.target.checked;
    if (isChecked === true) {
      setCheckValue(e.target.value);
      setCheckName(item.roleName);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://38.65.139.14:8081/corporate-citras-v1/role-service/get-all`
      );
      console.log(result.data);
      dispatch(getAllCompanyRoles(result.data.data));
      const userData = await axios
        .get(
          `http://38.65.139.14:8081/corporate-citras-v1/user-service/find-all`
        )
        .then((response) => {
          console.log(response.data);
          dispatch(allUsers(response.data.data));
        });
    };
    fetchData();
    dispatch(GetAllModule())
  }, []);

  console.log("check Value", checkValue);
  console.log("check Value", checkName);
  console.log(userValue);
  return (
    <>
      <div   >
        <div className="container-size">
          <div className="container-fluid">
            <div className="d-flex justify-content-between Actual_h1">
              <h1 className="main-heading">{t('role_managment')}</h1>
              <button
                className="roles-header__addButton"
                onClick={() => setModalShow(true)}>
                {t('add_new_role')} &nbsp;
                <i class="fa-solid fa-plus fa-lg ms-1"></i>
              </button>
            </div>
            {/* <div style={{ display: !open ? "block" : "none" }}>
                  <div className="w-100 h-100">
                    <button
                      className="roles-header__addButton w-100 h-100"
                      onClick={() => setModalUpdateShow(true)}>
                      ACTUALIZAR &nbsp;
                      <img src={ic_add} className="roles-header__icAdd" />
                    </button>
                  </div>
                </div> */}
            <div className="roles-main-heading row">
              <button
                className="roles-main-heading__roles col"
                onClick={() => {
                  setOpen(false);
                  setOpenA(true);
                }}
                style={{
                  color: open === false && openA === true && "#63B3CE",
                  borderBottom:
                    open == false && openA === true && "2px solid #63B3CE",
                  fontWeight: open == false && openA === true && "bold"
                }}>
                {t('role')}
              </button>
              <button
                className="roles-main-heading__permission col"
                onClick={() => {
                  setOpen(true);
                  setOpenA(false);
                }}
                style={{
                  color: open === true && openA === false && "#63B3CE",
                  borderBottom:
                    open === true && openA == false && "2px solid #63B3CE",
                  fontWeight: open === true && openA == false && "bold"

                }}>
                {t('assign_role')}
              </button>
            </div>
            <div style={{ display: !open ? "block" : "none" }}>
              <div className="roles-delete">
                <button
                  className="roles-delete__button"
                  onClick={() => setModalDeleteShow(true)}>
                  {t('delete_role')} &nbsp;
                  <i class="fa-solid fa-trash-can "></i>
                </button>

                <DeleteRoleModal 
                show={modalDeleteShow}
                modalText="ACTUALIZAR ROL"
                checkname={checkName}
                savehere={async (values) => {
                  const response = await axios
                    .delete(
                      `http://38.65.139.14:8081/corporate-citras-v1/role-company-service/delete/by-company-id/050081bd-1c81-45e8-b707-e6178a46be0f/by-role-name/${checkName}`
                    )
                    .then((response) => {
                      console.log("eee");
                      console.log(response);
                      dispatch(responseOkFunc(response.data.message));
                      setModalShow(false);
                      setModalShowOk(true);
                    })
                    .catch((err) => {
                      console.log(err.response.data.message);
                      dispatch(responseErrorFunc(err.response.data.message));
                      console.log(err.response.data.message);
                      setModalShow(false);
                      setErrorModal(true);
                    });
                }}
                onHide={() => setModalDeleteShow(false)}
                />
              </div>
              <div className="mt-2 row">
                <div className="col-sm-6 col-md-5 ms-auto">
                  <button className="roles-extra__buttonLightBlue w-100"></button>
                </div>
                <div className="col-sm-6 col-md-5 ">
                  <button className="roles-extra__buttonDarkBlue w-100">
                {t('users_module')}
                  </button>
                </div>
              </div>
              <div className="roles-main-table">
                <div className="UserRoletable" style={{ overflowX: "auto" }}>
                  <table class="table">
                    <thead>
                      <th scope="col" className="roles-main-table__h6 first_head">
                        {roles_heading.rol}
                      </th>
                      <th scope="col" className="roles-main-table__h6">
                        {roles_heading.addSheets}
                      </th>
                      <th scope="col" className="roles-main-table__h6">
                        {roles_heading.removeSheets}
                      </th>
                      <th scope="col" className="roles-main-table__h6">
                        {roles_heading.exportSheets}
                      </th>
                      <th scope="col" className="roles-main-table__h6">
                        {roles_heading.admin}
                      </th>
                      <th scope="col" className="roles-main-table__h6">
                        {roles_heading.createUser}
                      </th>
                      <th scope="col" className="roles-main-table__h6">
                        {roles_heading.updateUser}
                      </th>
                      <th scope="col" className="roles-main-table__h6">
                        {roles_heading.deleteUser}
                      </th>
                    </thead>
                    <tbody>
                      {allCompanyRoles.length > 0 &&
                        allCompanyRoles.map((item) => (
                          <tr>
                            <td className="first d-flex">
                              <input
                                type="checkbox"
                                onChange={(e) => handleInputOnClick(e, item)}
                                name="roleCheckValue"
                                value={item.id}
                                className="me-2"

                              />
                              <label className="">
                                {item.name}
                              </label>
                            </td>
                            <td className="">
                              <input type="checkbox" />
                            </td>
                            <td className="">
                              <input type="checkbox" />{" "}
                            </td>
                            <td className="">
                              <input type="checkbox" />{" "}
                            </td>
                            <td className="">
                              <input type="checkbox" />
                            </td>
                            <td className="">
                              <input type="checkbox" />{" "}
                            </td>
                            <td className="">
                              <input type="checkbox" />
                            </td>
                            <td className="">
                              <input type="checkbox" />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div>
              {/* className='search_box_main' */}
              <div style={{ display: open ? "block" : "none" }}>
                <div className="search_box_main mt-36">
                  <input
                    type="text"
                    name=""
                    placeholder={t('type_the_name_to_search')}
                    className="input_text user-search-bar"
                    id=""
                  // value={searchTerm}
                  // onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button
                    className="home_search_button">
                    <Image src={img4} />
                  </button>
                </div>
                <div className="row UserRoletable">
                  <table class="table">
                    <thead>
                      <th
                        scope="col"
                        className="col-8 first_head">
                        {permission_headings.users}
                      </th>
                      {allCompanyRoles.length > 0 &&
                        allCompanyRoles.map((item) => (
                          <th
                            id={item.id}
                            scope="col"
                            className="col-1">
                            {item.roleName}
                          </th>
                        ))}
                    </thead>
                    <tbody>
                      {userValue.length > 0 &&
                        userValue.map((user) => (
                          <tr
                            key={user.id}
                            className="roles-main-table__DataRows mb-4">
                            <td
                              key={user.id}
                              scope="col"
                              className="first col-9">
                              <label>{user.name}</label>
                            </td>
                            {allCompanyRoles.length > 0 &&
                              allCompanyRoles.map((role) => (
                                <td className="col-1 text-center">
                                  <input
                                    type="checkbox"
                                    value={role.id}
                                    checked={roles[user.id] === role.id}
                                    onChange={async (event) => {
                                      const roleIde = event.target.value;
                                      const userId = user.id;
                                      const newRoles = {
                                        ...roles,
                                        [user.id]: roleIde,
                                      };

                                      console.log(roleIde);
                                      console.log(newRoles);
                                      console.log(user);
                                      const userData = await axios
                                        .put(
                                          `http://38.65.139.14:8081/corporate-citras-v1/user-role-service/update`,
                                          {
                                            roleId: roleIde,
                                            userId: user.id,
                                          }
                                        )
                                        .then((response) => {
                                          console.log(response.data);
                                        });
                                      setRoles(newRoles);
                                    }}
                                  />
                                </td>
                              ))}
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        modalText={t('create_new_role')}
        savehere={async (values) => {
          const response = await axios
            .post(
              "http://38.65.139.14:8081/corporate-citras-v1/role-service/create",
              {
                id:"",
                name: values.name,
                moduleId: 12,
                taskIds: [
                  0
                ]
              }
            )
            .then((response) => {
              console.log("eee");

              console.log(response);
              dispatch(responseOkFunc(response.data.message));
              setModalShow(false);
              setModalShowOk(true);
            })
            .catch((err) => {
              console.log(err.response.data.message);

              dispatch(responseErrorFunc(err.response.data.message));
              console.log(err.response.data.message);
              setModalShow(false);
              setErrorModal(true);
            });
        }}
        onHide={() => setModalShow(false)}
      />
      <MyVerticallyCenteredModal
        show={modalUpdateShow}

        modalText="ACTUALIZAR ROL"
        checkid={checkValue}
        checkname={checkName}
        savehere={async (values) => {
          const response = await axios
            .put(
              "http://38.65.139.14:8081/corporate-citras-v1/role-company-service/update",
              {
                companyId: "050081bd-1c81-45e8-b707-e6178a46be0f",
                id: checkValue,
                roleName: values.name,
              }
            )
            .then((response) => {
              console.log("eee");
              console.log(response);
              dispatch(responseOkFunc(response.data.message));
              setModalShow(false);
              setModalShowOk(true);
            })
            .catch((err) => {
              console.log(err.response.data.message);

              dispatch(responseErrorFunc(err.response.data.message));
              console.log(err.response.data.message);
              setModalShow(false);
              setErrorModal(true);
            });
        }}
        onHide={() => setModalUpdateShow(false)}
      />

      <ResponseOk
        to="/role-management"
        show={modalShowOk}
        onHide={() => setModalShowOk(false)}
      />
      <ResponseError
        to="/role-management"
        show={errorModal}
        onHide={() => setErrorModal(false)}
      />
    </>
  );
};

export default RoleManagementMain;

function MyVerticallyCenteredModal(props) {
  const { checkname } = props;
  const { t } = useTranslation();
  const {AllModule
  } = useSelector((state) => state.roles);

  console.log("@@@@@@@@@@@@",AllModule)
  console.log(checkname);
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ margin: "0 auto" }}>
      <Formik
        initialValues={{
          name: checkname === undefined ? "" : checkname,
        }}
        onSubmit={(values) => props.savehere(values)}
        validateOnChange={false}
        validateOnBlur={false}>
        {({
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          values,
        }) => (
          <div>
            <div className="pt-5 text-center">
              <button onClick={props.onHide} className="modal-close-btn">
                <img src={cancelIcon} alt="cancel icon" />
              </button>
            <span className="main-modal-heading mt-3">  {props.modalText}</span>
            </div>


            <Modal.Body
              className="role-model-body mt-4 px-5"
              style={{ padding: "0em 1rem !important" }}>
              <div className="role-modal__contact">
                <div className="input-group-role single-group me-0">
                  <label className="input-group-role__label">{t('name')}</label>
                  <input
                    className="input-group__text user-info-role__fieldModal"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="name"
                    value={values.name}
                    type="text"></input>
                     <div className="input-group single-group ">
                        <label className="input-group__label">
                          {t('select module')}
                        </label>
                        <select
                          name="roleValue"
                          value={values.roleValue}
                          onChange={handleChange}
                          class="input-group__text user-info__name classic">
                          <option style={{ display: "none" }}></option>
                          {AllModule?.length > 0 &&
                            AllModule.map((item) => (
                              <option
                                value={item?.moduleId}
                                className="input-group__selectOption"  
                                >
                                {item?.moduleName}
                              </option>
                            ))}
                           
                        </select>
                      </div>
                </div>
              </div>
            </Modal.Body>
            <div className="btn-div pt-3">
          <button className="button-sec btn-cancel" onClick={props.onHide}>{t("cancel")}</button>
          <button className="button-sec btn-confirm"  onClick={handleSubmit}>{t("confirm")}</button>
        </div>
          </div>
        )}
      </Formik>
    </Modal>
  );
}



// http://38.65.139.14:8081/corporate-citras-v1/role-company-service/delete/by-company-id/050081bd-1c81-45e8-b707-e6178a46be0f/by-role-name/kainat
