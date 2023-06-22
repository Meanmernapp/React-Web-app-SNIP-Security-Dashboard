import React from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';

import cancelIcon from "../../../../assets/images/icons/cancel.svg"


function DeleteRoleModal(props) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <div className="dept-modal">
      <Modal
        dialogClassName="modal-90w user-delete-modal"
        show={props.show}
        onHide={props.onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}>
        <button onClick={props.onHide} className="modal-close-btn">
          <img src={cancelIcon} alt="cancel icon" />
        </button>
        <span className="main-modal-heading mt-3"> {t('delete_role')}s
</span>
        <div className="body">
          <h6>
          {t('role')} a {t('eliminate')}
          </h6>
          <p>{t('total')}: 4</p>
          <span>
            <i class="fa-solid fa-circle fa-2xs"></i>
            <p>Root</p>
            {/* <h5>| Encargado: Luis Cornejo</h5> */}
          </span>
          <span>
            <i class="fa-solid fa-circle fa-2xs"></i>
            <p>Administrator</p>
            {/* <h5>| Encargado: Luis Cornejo</h5> */}
          </span> <span>
            <i class="fa-solid fa-circle fa-2xs"></i>
            <p>Empleado general</p>
            {/* <h5>| Encargado: Luis Cornejo</h5> */}
          </span> <span>
            <i class="fa-solid fa-circle fa-2xs"></i>
            <p>Teniente</p>
            {/* <h5>| Encargado: Luis Cornejo</h5> */}
          </span>
        </div>
        <div className="btn-div pt-3">
          <button className="button-sec btn-cancel" onClick={props.onHide}>{t("cancel")}</button>
          <button className="button-sec btn-confirm">{t("confirm")}</button>
        </div>
      </Modal>
    </div>
  );
}

export default DeleteRoleModal
