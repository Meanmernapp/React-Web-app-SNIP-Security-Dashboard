import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import cancelIcon from "../../../../assets/images/icons/cancel.svg";
import { DeleteCompanyByUserID, DeleteUsers, FindAllUsers } from "../../../../reduxToolkit/Users/UsersApi";

function DeleteUserModal(props) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [deleteUserID, setDeleteUserID] = useState([]);

  useEffect(() => {
    if (props?.data) {
      const updatedDeleteUserID = props.data.map((item) => item?.id);
      setDeleteUserID(updatedDeleteUserID);
    }
  }, [props?.data]);


  const deleteUsers = async() => {
    props.onHide();
    await dispatch(DeleteUsers(deleteUserID));
    await dispatch(DeleteCompanyByUserID(deleteUserID));
    await dispatch(FindAllUsers());
    props.setSelectedUsers([])
    setDeleteUserID([])
  };

  return (
    <div className="dept-modal">
      <Modal
        dialogClassName="modal-90w user-delete-modal"
        show={props.show}
        onHide={props.onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}
      >
        <button onClick={props.onHide} className="modal-close-btn">
          <img src={cancelIcon} alt="cancel icon" />
        </button>
        <span className="main-modal-heading mt-3"> ELIMINAR USUARIOS</span>
        <div className="body">
          <h6>Usuarios a elimianar</h6>
          <p>Total: {props?.data?.length}</p>
          {Array.isArray(props.data) &&
            props.data?.map((item) => {
              return (
                <span>
                  <i class="fa-solid fa-circle fa-2xs"></i>
                  <p>{item?.name}</p>
                  {/* <h5>| Encargado: Luis Cornejo</h5> */}
                </span>
              );
            })}
        </div>
        <div className="btn-div pt-3">
          <button className="button-sec btn-cancel" onClick={props.onHide}>
            {t("cancel")}
          </button>
          <button className="button-sec btn-confirm" onClick={deleteUsers}>
            {t("confirm")}
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default DeleteUserModal;
