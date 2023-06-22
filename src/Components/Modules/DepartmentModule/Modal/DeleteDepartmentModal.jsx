import React from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import cancelIcon from "../../../../assets/images/icons/cancel.svg";
import { DeleteDepartment, GetAllDepartments, GetAllDepartmentsByCompanyId } from "../../../../reduxToolkit/Department/DepartmentApi";
import { responseErrorFunc, responseOkFunc } from "../../../../features/userSlice";
import { useState } from "react";
import { useEffect } from "react";


function DeleteDepartmentModal(props) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const CompanyID = useSelector((state) => state.company.CompanyID);


  const [deleteID, setDeleteID] = useState([]);

  useEffect(() => {
    if (props?.data) {
      const updatedDeleteID = props.data.map((item) => item?.id);
      setDeleteID(updatedDeleteID);
    }
  }, [props?.data]);

  const confirmDelete = async () => {
      dispatch(DeleteDepartment(deleteID))
        .then(async(resp) => {
          dispatch(responseOkFunc(resp?.payload?.data?.message));
          props.responsepositive();
          await dispatch(GetAllDepartments())
          await dispatch(GetAllDepartmentsByCompanyId({ companyID: CompanyID }))
          window.location.reload(false);
          props.onHide();
        })
        .catch((err) => {
          dispatch(responseErrorFunc(err?.payload?.response?.data?.message));
          props.responsenegative();
        });
   
  };
  return (
    <div className="dept-modal">
      <Modal
        dialogClassName="modal-90w deparment-delete-modal"
        show={props.show}
        onHide={props.onHide}
        // size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}
      >
        <button onClick={props.onHide} className="modal-close-btn">
          <img src={cancelIcon} alt="cancel icon" />
        </button>
        <span className="main-modal-heading mt-3">
          {" "}
          {t("delete_departments")}
        </span>
        <div className="body">
          <h6>{t("selected_departments")}</h6>
          <p>Total: {Array.isArray(props.data) && props?.data?.length}</p>
          {Array.isArray(props.data) &&
            props.data?.map((item) => {
              return (
                <span>
                  <i class="fa-solid fa-circle fa-2xs"></i>
                  <p>{item?.companyName}</p>
                  <h5>| {item?.name}</h5>
                </span>
              );
            })}
        </div>
        <div className="btn-div pt-3">
          <button className="button-sec btn-cancel" onClick={props.onHide}>
            {t("cancel")}
          </button>
          <button className="button-sec btn-confirm" onClick={confirmDelete}>
            {t("confirm")}
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default DeleteDepartmentModal;

