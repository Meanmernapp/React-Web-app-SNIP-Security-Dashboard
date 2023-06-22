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
import { useTranslation } from 'react-i18next';

import {
  responseOkFunc,
  responseErrorFunc,
} from "../../../../features/userSlice";

function AddUserModal(props) {
  const { t } = useTranslation();

    const { departCompanyData, addSelectedUserValue } = useSelector(
      (state) => state.dept
    );
  
    const dispatch = useDispatch();
    const [selectedUsers, setSelectedUsers] = useState([]);
  
    const handleSelect = (event, formik) => {
      const selectedOption = event.target.value;
      const selectedUser = departCompanyData.find(
        (user) => user.id === selectedOption
      );
      setSelectedUsers([...selectedUsers, selectedUser]);
  
      dispatch(addSelectedUser(selectedUser));
      console.log(addSelectedUserValue);
    };
  
    const handleRemove = (user) => {
      setSelectedUsers(selectedUsers.filter((u) => u.id !== user.id));
  
      // Dispatch the action to remove the user from the global state
      dispatch(removeSelectedUser(user));
    };
    const addUser = () => {
      dispatch(addSelectedUserInTable(addSelectedUserValue));
      props.onHide();
    };
    return (
      <Modal
        dialogClassName="modal-90w"
        className="create-dept"
        {...props}
        // size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}>
        <Formik
          initialValues={{
            deptValue: "",
          }}>
          {({ formik, values }) => (
            <Form>
              <Modal.Header closeButton className="btn-close-red">
                <Modal.Title
                  id="contained-modal-title-vcenter"
                  className="role-model-top">
                  {t('add_user')}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="role-model-body">
                <h4 className="role-model-body__heading">
                  {t('add_users_to_the_department')}
                </h4>
  
                <div class="form-group">
                  <label>{t('investigador')}</label>
                  {/* <select
                    name="deptValue"
                    class="form-control classic"
                    onChange={(e) => handleSelect(e, formik)}> */}
                  <Field
                    as="select"
                    name="deptValue"
                    class="form-control classic"
                    onChange={(e) => handleSelect(e, formik)}>
                    <option style={{ display: "none" }} value=""></option>
                    {departCompanyData.length > 0 &&
                      departCompanyData.map((user) => (
                        <option
                          key={user.id}
                          value={user.id}
                          disabled={selectedUsers.includes(user)}>
                          {user.name}
                        </option>
                      ))}
                  </Field>
                  {/* </select> */}
                </div>
  
                <hr className="department-hr" />
                <h4 className="role-model-body__heading">
                  {t('users')} {t('selected')}:
                </h4>
                <p className="role-model-body__p"> {t('total')} 4 </p>
                <ul className="role-model-body__ul">
                  {addSelectedUserValue.length > 0 &&
                    addSelectedUserValue.map((user) => (
                      <li className="role-model-body__ul__li" key={user.id}>
                        {user.name}
                        <button
                          className="role-model-body__ul__li__btn"
                          type="button"
                          onClick={() => handleRemove(user)}>
                          <img src={ic_cancel} />
                        </button>
                      </li>
                    ))}
                </ul>
              </Modal.Body>
              <div className="btn-div pt-3">
            <button className="button-sec btn-cancel" onClick={props.onHide}>{t("cancel")}</button>
            <button className="button-sec btn-confirm" onClick={addUser}>{t("confirm")}</button>
        </div>
             
            </Form>
          )}
        </Formik>
      </Modal>
    );
  }

export default AddUserModal