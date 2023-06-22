import React from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';

import cancelIcon from "../../../../assets/images/icons/cancel.svg"


function DeleteAlertModal(props) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className="dept-modal">
      <Modal
        dialogClassName="modal-90w alert-delete-modal"
        show={props.show}
        onHide={props.onHide}
        // size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto"}}>
        <button onClick={props.onHide} className="modal-close-btn">
          <img src={cancelIcon} alt="cancel icon" />
        </button>
        <span className="main-modal-heading mt-3"> {t('delete')} {t('alerts')}</span>
        <div className="body px-5 ">
          <span style={{textTransform:"lowercase"}}>
            {t('To_remove_the_alerts_you_need_to_confirm_the_action')}
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

export default DeleteAlertModal
