import React, { useState, useContext, useRef } from "react";
import ic_left_arrow from "../../../../images/ic-left-arrow.svg";
import ic_sort_up from "../../../../images/ic-sort-up.svg";
import ic_search from "../../../../images/NavBar/ic-search.svg";
import ic_employee from "../../../../images/ic-employee.png";
import { ErrorMessage, Formik, Form, useField, Field, useFormik } from "formik";
import ic_trash_outline from "../../../../images/ic-trash-outline.png";
import ic_cancel from "../../../../images/ic-cancel.svg";
import { useNavigate, useParams, Link } from "react-router-dom";
import ic_check from "../../../../images/ic-check.svg";
import ResponseOk from "../../../UserDashBoard/pages/ResponseOk";
import ResponseError from "../../../UserDashBoard/pages/ResponseError";
import { Modal } from "react-bootstrap";
import ic_add from "../../../../images/ic-add.svg";
import * as Yup from "yup";
import axios from "axios";
import { AppContext } from "../../../../App";
import { useSelector, useDispatch } from "react-redux";
import { getByIdData } from "../../../../features/departmentSlice";

import {
    responseOkFuncD,
    responseErrorFuncD,
    updateErrorFuncD,
    updateOkFuncD,
} from "../../../../features/departmentSlice";
import { useTranslation } from "react-i18next";
import { GetAllDepartments } from "../../../../reduxToolkit/Department/DepartmentApi";
import { useEffect } from "react";
import { GetAllUsersByCompanyId } from "../../../../reduxToolkit/Company/CompanyApi";

const UpdateDepartment = () => {
    let navigate = useNavigate();
    const { t } = useTranslation();
    const CompanyID = useSelector((state) => state.company.CompanyID);

    const dispatch = useDispatch();
    const [modalSee, setModalSee] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const formRef = useRef();

    const { responseOkMessageD } = useSelector((state) => state.dept);
    const { responseErrorMessageD } = useSelector((state) => state.dept);
    const { updateRespOkD } = useSelector((state) => state.dept);
    const { updateRespErrorD } = useSelector((state) => state.dept);
    const { getAllUsersByCompanyId, singleDepartmentDetail } = useSelector(
        (state) => state?.departments
    );

    const DeptSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
    });

    const createNewData = async () => {
        await axios
            .put(
                "http://38.65.139.14:8081/corporate-citras-v1/department-service/update",
                {
                    id: singleDepartmentDetail?.id,
                    companyId: CompanyID,
                    name: formRef.current.values.name,
                    userInChargeId: formRef.current.values?.inChargeID,
                }
            )
            .then((response) => {
                dispatch(updateOkFuncD(true));
                dispatch(responseOkFuncD(response.data.message));
            })
            .catch((err) => {
                console.log(err.response.data.message);
                dispatch(updateErrorFuncD(true));
                dispatch(responseErrorFuncD(err.response.data.message));
                console.log(err.response.data.message);
                return err.response.data.message;
            });
        if (updateRespOkD === true) {
            setModalShow(true);
            dispatch(updateOkFuncD(true));
        }
        if (updateRespErrorD === true) {
            setErrorModal(true);
            dispatch(updateErrorFuncD(false));
        }

        dispatch(getByIdData(""));
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
        console.log("Navigate");
        navigate("/departments");
    };

    useEffect(() => {
        dispatch(GetAllDepartments());
        dispatch(GetAllUsersByCompanyId({ companyID: CompanyID }));
    }, []);

    return (
        <div>
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
                            ACTUALIZAR DEPARTAMENTO
                        </h1>
                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            name: singleDepartmentDetail?.name,
                            inChargeID: singleDepartmentDetail?.userInChargeId,
                        }}
                        validationSchema={DeptSchema}
                        onSubmit={(values) => {
                            console.log("values", values);
                        }}
                        innerRef={formRef}
                    >
                        {({ errors, handleChange, handleBlur, touched, values }) => (
                            <div>
                                <div className=" row">
                                    <div
                                        className="department-create__left justify-content-center ml-5 pl-5 col-sm-12 col-md-12 col-lg-6 vl-update-report "
                                        style={{ padding: "0 2.5em" }}
                                    >
                                        <h5 className="mb-4"> {t("data")}</h5>
                                        <form>
                                            <div className="input-group-role single-group mt-2">
                                                <label className="input-group-role__label">
                                                    {t("name")}
                                                </label>
                                                <input
                                                    className="input-group-department__text user-info-role__fieldModal"
                                                    // placeholder="EMPLEADO GENERAL"
                                                    name="name"
                                                    type="text"
                                                    value={values?.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                ></input>
                                                {errors.name && touched.name ? (
                                                    <div className="errors">{errors.name}</div>
                                                ) : null}
                                            </div>
                                            <div className="input-group-role single-group mt-4">
                                                <label className="input-group-role__label">
                                                    {t("incharge")}
                                                </label>
                                                <select
                                                    name="inChargeID"
                                                    value={values.inChargeID}
                                                    class="input-group-department__text user-info-role__fieldModal classic"
                                                    onChange={handleChange}
                                                >
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
                                    <div className="col-sm-12 col-md-10 col-lg-6">
                                        <div className="department-create">
                                            <div className="">
                                                <h5 className="col-12 text-end department-create__right__mainHeading__h5">
                                                    AGREGAR USUARIOS AL DEPARTAMENTO
                                                </h5>
                                                <p className="col-12 text-end department-create__right__mainHeading__p">
                                                    Total usuarios 5
                                                </p>
                                            </div>
                                            <div className="department-create__right__searchbox float-end">
                                                <input
                                                    type="text"
                                                    name=""
                                                    placeholder="Escribe el nombre a buscar ..."
                                                    className="input_text"
                                                    id=""
                                                />
                                                <button className="department-create__right__searchbox__button me-0">
                                                    <img src={ic_search} />
                                                </button>
                                            </div>
                                            {employee_data.map((item) => (
                                                <div className="department-create__right__mainDiv float-end">
                                                    <img
                                                        src={item.Leftimg}
                                                        className="department-create__right__mainDiv__Rightimg"
                                                    />
                                                    <div className="department-create__right__mainDiv__insideDiv">
                                                        <p className="department-create__right__mainDiv__insideDiv__pOne">
                                                            {item.name}
                                                        </p>
                                                        <p className="department-create__right__mainDiv__insideDiv__pTwo">
                                                            {item.nameVar}
                                                        </p>
                                                    </div>
                                                    <div className="department-create__right__mainDiv__insideDiv">
                                                        <p className="department-create__right__mainDiv__insideDiv__pOne">
                                                            {item.phone}
                                                        </p>
                                                        <p className="department-create__right__mainDiv__insideDiv__pTwo">
                                                            {item.phoneVar}
                                                        </p>
                                                    </div>
                                                    <div className="department-create__right__mainDiv__insideDiv">
                                                        <p className="department-create__right__mainDiv__insideDiv__pOne">
                                                            {item.email}
                                                        </p>
                                                        <p className="department-create__right__mainDiv__insideDiv__pTwo">
                                                            {item.emailVar}
                                                        </p>
                                                    </div>
                                                    <img
                                                        src={item.rightImg}
                                                        className="department-create__right__mainDiv__Rightimg"
                                                    />
                                                </div>
                                            ))}
                                            <button
                                                className="department-create__right__addButton"
                                                onClick={() => setModalSee(true)}
                                            >
                                                AGREGAR USUARIO{" "}
                                                <img src={ic_add} className="roles-header__icAdd" />
                                            </button>
                                            <DeleteRole
                                                show={modalSee}
                                                onHide={() => setModalSee(false)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="department-create--footer row mx-auto justify-content-center my-5">
                                    <button className="department-create--footer__buttonCancel   col-sm-6  col-md-4 col-lg-3 role-model-close-btn">
                                        CANCELAR
                                    </button>
                                    <button
                                        className="department-create--footer__buttonOk col-sm-6 col-md-4 col-lg-3 "
                                        onClick={createNewData}
                                    >
                                        GUARDAR CAMBIOS
                                    </button>
                                    <ResponseOk
                                        userValue={responseOkMessageD}
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                    <ResponseError
                                        userValue={responseErrorMessageD}
                                        show={errorModal}
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

export default UpdateDepartment;

function DeleteRole(props) {
    return (
        <Modal
            dialogClassName="modal-90w"
            className="create-dept"
            {...props}
            // size='lg'
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ margin: "0 auto" }}
        >
            <Modal.Header closeButton className="btn-close-red">
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className="role-model-top"
                >
                    AGREGAR USUARIOS
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="role-model-body">
                <h4 className="role-model-body__heading">
                    Agregar usuarios al departamento
                </h4>
                <form>
                    <div class="form-group">
                        <label>INVESTIGADOR</label>
                        <select class="form-control">
                            <option>Luis Carnejo</option>
                            <option value="2">Luis Carnejo</option>
                        </select>
                        <i class="fa fa-caret-down" style={{ marginTop: "-1.6em" }}></i>
                    </div>
                </form>
                <hr className="department-hr" />
                <h4 className="role-model-body__heading">Usuarios seleccionados:</h4>
                <p className="role-model-body__p"> Total 4 </p>
                <ul className="role-model-body__ul">
                    <li className="role-model-body__ul__li">
                        {" "}
                        <span> Luis Enrique Cornejo Arreola </span>{" "}
                        <button className="role-model-body__ul__li__btn">
                            <img src={ic_cancel} />{" "}
                        </button>{" "}
                    </li>
                    <li className="role-model-body__ul__li">
                        {" "}
                        <span> Luis Enrique Cornejo Arreola </span>{" "}
                        <button className="role-model-body__ul__li__btn">
                            {" "}
                            <img src={ic_cancel} />{" "}
                        </button>{" "}
                    </li>
                    <li className="role-model-body__ul__li">
                        {" "}
                        <span> Luis Enrique Cornejo Arreola </span>{" "}
                        <button className="role-model-body__ul__li__btn">
                            {" "}
                            <img src={ic_cancel} />{" "}
                        </button>{" "}
                    </li>
                    <li className="role-model-body__ul__li">
                        {" "}
                        <span> Luis Enrique Cornejo Arreola </span>{" "}
                        <button className="role-model-body__ul__li__btn">
                            {" "}
                            <img src={ic_cancel} />{" "}
                        </button>{" "}
                    </li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={props.onHide} className="role-model-close-btn">
                    CANCELAR
                </button>
                <button onClick={props.onHide} className="role-model-confirm-btn">
                    AGREGAR
                </button>
            </Modal.Footer>
        </Modal>
    );
}
