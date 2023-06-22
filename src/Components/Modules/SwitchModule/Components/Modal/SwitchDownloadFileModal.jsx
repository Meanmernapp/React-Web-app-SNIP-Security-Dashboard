import React from "react";
import { Modal } from "react-bootstrap";
import cancelIcon from "../../../../../assets/images/icons/cancel.svg";
import { useTranslation } from "react-i18next";

function SwitchDownloadFileModal(props) {
  const { t } = useTranslation();

  return (
    <div>
      <Modal
        dialogClassName="modal-90w deparment-file-modal"
        show={props.show}
        onHide={props.onHide}
        style={{ margin: "0 auto" }}
        centered
      >
        <button onClick={props.onHide} className="modal-close-btn">
          <img src={cancelIcon} alt="cancel icon" />
        </button>
        <span className="main-modal-heading mt-3">
          DESCARGAR  <br />  EXTRACTO TELEFÓNICO
        </span>
        <div className="body">
          <h4 className="telephonic-text-style">
            ¿Para descargar la extracto telefónico
            <b> 4422232493_telcer.csv </b>
            por favor <br />
            confirma la acción?
          </h4>
        </div>
        <div className="btn-div pt-3 d-flex">
          <button
            className="button-sec btn-cancel"
            style={{ width: "43%" }}
            onClick={props.onHide}
          >
            {t("cancel")}
          </button>
          <button className="button-sec btn-confirm" style={{ width: "43%" }}>
            {t("confirm")}
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default SwitchDownloadFileModal;
