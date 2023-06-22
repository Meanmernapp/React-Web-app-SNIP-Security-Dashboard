import React, { useState, useContext, useRef } from "react";
import ic_left_arrow from "../../../../images/ic-left-arrow.svg";
import ic_employee from "../../../../images/ic-employee.png";
import ic_trash_outline from "../../../../images/ic-trash-outline.png";
import ic_cancel from "../../../../images/ic-cancel.svg";
import ic_right_arrow from "../../../../images/ic-right-arrow.svg";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { ErrorMessage, Formik, Form, useField, Field, useFormik } from "formik";
import { AppContext } from "../../../../App";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  responseOkFunc,
  responseErrorFunc,
} from "../../../../features/userSlice";
import ResponseOk from "../../../UserDashBoard/pages/ResponseOk";
import ResponseError from "../../../UserDashBoard/pages/ResponseError";
import { Accordion } from "react-bootstrap";

const CreateRolesDeCaso = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { val1 } = useContext(AppContext);
  const [errorModal, setErrorModal] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const formRef = useRef();
  const [selectedTaskList, setSelectedTaskList] = useState([
    {
      id: 2,
      name: "ALTA",
      isMobileApp: true,
      module: {
        id: 1,
        name: "COMPANY_MODULE",
      },
    },
    {
      id: 3,
      name: "BAJA",
      isMobileApp: true,
      module: {
        id: 1,
        name: "COMPANY_MODULE",
      },
    },
  ]);
  const [roleTasks, setRoleTasks] = useState([
    {
      id: 1,
      name: "REPORTES (4 PERMISOS)_MENU",
      isMobileApp: true,
      module: {
        id: 1,
        name: "COMPANY_MODULE",
      },
    },
    {
      id: 2,
      name: "ALTA",
      isMobileApp: true,
      module: {
        id: 1,
        name: "COMPANY_MODULE",
      },
    },
    {
      id: 3,
      name: "BAJA",
      isMobileApp: true,
      module: {
        id: 1,
        name: "COMPANY_MODULE",
      },
    },
    {
      id: 4,
      name: "CONSULTA",
      isMobileApp: true,
      module: {
        id: 1,
        name: "COMPANY_MODULE",
      },
    },
    {
      id: 5,
      name: "ACTUALIZACIONES",
      isMobileApp: true,
      module: {
        id: 1,
        name: "COMPANY_MODULE",
      },
    },
    {
      id: 11,
      name: "CASO (1 PERMISO)_MENU",
      isMobileApp: true,
      module: {
        id: 5,
        name: "PROFILE_MODULE",
      },
    },
    {
      id: 12,
      name: "ACTUALIZACIONE(S)",
      isMobileApp: true,
      module: {
        id: 5,
        name: "PROFILE_MODULE",
      },
    },
    {
      id: 21,
      name: "INTEGRANTES DEL CASO (USUARIOS)(2 PERMISOS)_MENU",
      isMobileApp: true,
      module: {
        id: 4,
        name: "NOTIFICATION_MODULE",
      },
    },
    {
      id: 22,
      name: "AGREGAR",
      isMobileApp: true,
      module: {
        id: 4,
        name: "NOTIFICATION_MODULE",
      },
    },
    {
      id: 23,
      name: "ELIMINAR",
      isMobileApp: true,
      module: {
        id: 4,
        name: "NOTIFICATION_MODULE",
      },
    },
  ]);

  const handleDeleteTask = (deleteItem) => {
    setRoleTasks((roleTasks) => [
      ...roleTasks.filter((item) => item.id !== deleteItem.id),
      deleteItem,
    ]);
    setSelectedTaskList(
      selectedTaskList.filter((item) => item.id !== deleteItem.id)
    );
  };

  const handleAddButton = () => {
    navigate("/create-report");
  };
  const handleActualBtn = () => {
    navigate("/update-report");
  };
  const employee_data = [
    {
      Leftimg: ic_employee,
      name: "Luis Cornejo Arreola",
      nameVar: "NOMBRE",
      phone: "4422232321",
      phoneVar: "TELÉFONO",
      email: "lcornejo@ibl.mx",
      emailVar: "CORREO",
      rightImg: ic_trash_outline,
    },
    {
      Leftimg: ic_employee,
      name: "Luis Cornejo Arreola",
      nameVar: "NOMBRE",
      phone: "4422232321",
      phoneVar: "TELÉFONO",
      email: "lcornejo@ibl.mx",
      emailVar: "CORREO",
      rightImg: ic_trash_outline,
    },
    {
      Leftimg: ic_employee,
      name: "Luis Cornejo Arreola",
      nameVar: "NOMBRE",
      phone: "4422232321",
      phoneVar: "TELÉFONO",

      email: "lcornejo@ibl.mx",
      emailVar: "CORREO",
      rightImg: ic_trash_outline,
    },
    {
      Leftimg: ic_employee,
      name: "Luis Cornejo Arreola",
      nameVar: "NOMBRE",
      phone: "4422232321",
      phoneVar: "TELÉFONO",
      email: "lcornejo@ibl.mx",
      emailVar: "CORREO",
      rightImg: ic_trash_outline,
    },
    {
      Leftimg: ic_employee,
      name: "Luis Cornejo Arreola",
      nameVar: "NOMBRE",
      phone: "4422232321",
      phoneVar: "TELÉFONO",
      email: "lcornejo@ibl.mx",
      emailVar: "CORREO",
      rightImg: ic_trash_outline,
    },
  ];
  const handleClick = () => {
    navigate("/roles-caso-main");
  };
  const handleSelectedTask = (task2) => {
    setSelectedTaskList((selectedTaskList) => [
      ...selectedTaskList.filter((item) => item.id !== task2.id),
      task2,
    ]);
    // setRoleTasks(roleTasks.filter(item => item.id !== task2.id))
  };

  const handleClickC = () => {
    console.log("Navigate");
    navigate("/");
  };
  return (
    <div   >
      <div className="container-size">
        <div className=" container-fluid">
          <div className="row">
            <h1 className="Actual_h1 col-12">
              <button
                onClick={handleClick}
                className="department-create-header__button"
              >
                <img src={ic_left_arrow} className="back-arrow" />
              </button>
              CREAR ROL DE CASO
            </h1>
          </div>
          <Formik
            initialValues={{
              name: "",
            }}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={async (values) => {
              console.log(formRef.current.values.name);
              const res = await axios
                .post(
                  "http://38.65.139.14:8081/corporate-citras-v1/role-company-service/create",
                  {
                    roleName: formRef.current.values.name,
                    companyId: "050081bd-1c81-45e8-b707-e6178a46be0f",
                  }
                )
                .then((response) => {
                  console.log("eee");
                  console.log(response);
                  dispatch(responseOkFunc(response.data.message));
                  setModalShow(true);
                })
                .catch((err) => {
                  console.log(err.response.data.message);
                  dispatch(responseErrorFunc(err.response.data.message));
                  console.log(err.response.data.message);
                  setErrorModal(true);
                });
            }}
            innerRef={formRef}
          >
            {({
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              values,
            }) => (
              <div>
                <div className="report-create report-update row">
                  <div className="report-create__left vl-update-report col-md-12 col-lg-4 col-xl-4">
                    {/* <div className='create-report-mainDiv col-sm-12 col-md-12 col-lg-12 col-xl-12'> */}
                    <form>
                      <div className="report-info__detail col-12">
                        <h5 className="report-create__headings"> CASOS</h5>
                        <div className="form-group col-12">
                          <label>NOMBRE &nbsp; &nbsp; </label>
                          <input
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control input-lg"
                          />
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7">
                    <div className="row">
                      <div className="report-info__detail col-12">
                        <h5 className="report-create__headingsRolesDeCaso">
                          {" "}
                          PERMISOS DISPONIBLES
                        </h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-4 new_role_available">
                        <p>DISPONIBLES</p>
                        <div className="new_role_available_container">
                          <Accordion defaultActiveKey="0">
                            {roleTasks?.map((task1) =>
                              task1?.name.split("_")[1] == "MENU" ? (
                                <Accordion.Item
                                  eventKey={task1?.id}
                                  key={task1?.id}
                                >
                                  <Accordion.Header>
                                    {task1?.name.split("_")[0]}
                                  </Accordion.Header>
                                  {roleTasks.map((task2) =>
                                    task1?.module.name === task2?.module.name &&
                                    task2?.name.split("_")[1] !== "MENU" ? (
                                      <Accordion.Body
                                        onClick={() =>
                                          handleSelectedTask(task2)
                                        }
                                      >
                                        <span>{task2?.name}</span>
                                        <img
                                          src={ic_right_arrow}
                                          alt="chevron_right_solid"
                                        />
                                      </Accordion.Body>
                                    ) : null
                                  )}
                                </Accordion.Item>
                              ) : null
                            )}
                          </Accordion>
                        </div>
                      </div>

                      <div className="col-xs-10 col-sm-6 col-md-6 col-lg-6 mt-4 new_role_available">
                        <p>ELEGIDAS</p>
                        <div className="new_role_available_container">
                          <Accordion defaultActiveKey="0">
                            {roleTasks?.map((task1) =>
                              task1?.name.split("_")[1] == "MENU" ? (
                                <Accordion.Item
                                  eventKey={task1?.id}
                                  key={task1?.id}
                                >
                                  <Accordion.Header>
                                    {task1?.name.split("_")[0]}
                                  </Accordion.Header>
                                  {roleTasks.map((task2) =>
                                    selectedTaskList?.map((selectedItem) =>
                                      selectedItem?.module.name ===
                                        task1?.module.name &&
                                      selectedItem?.name === task2?.name ? (
                                        <Accordion.Body key={selectedItem.id}>
                                          <span>{selectedItem?.name}</span>
                                          <img
                                            src={ic_cancel}
                                            alt="ic_cancel"
                                            onClick={() =>
                                              handleDeleteTask(selectedItem)
                                            }
                                          />
                                        </Accordion.Body>
                                      ) : null
                                    )
                                  )}
                                </Accordion.Item>
                              ) : null
                            )}
                          </Accordion>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12 create-caso-btn-out">
                      <div className="segment-create--footer row create-caso-btn">
                        <button className="department-create--footer__buttonCancel col-sm-6 col-md-6 col-lg-5  role-model-close-btn">
                          CANCELAR
                        </button>
                        <button
                          className="department-create--footer__buttonOk col-sm-6 col-md-6 col-lg-5 "
                          onClick={handleSubmit}
                        >
                          CREAR ROL DE CASO
                        </button>
                        <ResponseOk
                          to="/roles-caso-main"
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                        <ResponseError
                          to="/roles-caso-main"
                          show={errorModal}
                          onHide={() => setErrorModal(false)}
                        />
                        {/* <div className="col-sm-0 col-md-0 col-lg-2"></div> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="row my-3 ">
                  <div className="col-sm-0 col-md-0 col-lg-4"></div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="segment-create--footer row justify-content-end">
                      <button className="department-create--footer__buttonCancel col-sm-6 col-md-6 col-lg-5  role-model-close-btn">
                        CANCELAR
                      </button>
                      <button
                        className="department-create--footer__buttonOk col-sm-6 col-md-6 col-lg-5 "
                        onClick={handleSubmit}
                      >
                        CREAR ROL DE CASO
                      </button>
                      <ResponseOk
                        to="/roles-caso-main"
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                      <ResponseError
                        to="/roles-caso-main"
                        show={errorModal}
                        onHide={() => setErrorModal(false)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-0 col-md-0 col-lg-2"></div>
                </div> */}
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CreateRolesDeCaso;
