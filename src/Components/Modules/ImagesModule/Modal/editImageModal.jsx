import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import cancelIcon from "../../../../assets/images/icons/cancel.svg";
import upload_img from "../../../../assets/images/poster/upload.jpg";

const EditImageModal = (props) => {
  return (
    <div className="dept-modal">
      <Modal
        dialogClassName="modal-90w "
        {...props}
        backdropClassName="newBackdrop"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}
      >
        <button onClick={props.onHide} className="modal-close-btn">
          <img src={cancelIcon} alt="cancel icon" />
        </button>
        <span className="main-modal-heading mt-3"> ACTUALIZAR DE IMAGEN</span>

        <div className="edit-image-body">
          <div className="report-info__detail col-12">
            <div className="input-group-report">
              <label className="input-group-report__label">NOMBRE</label>
              <input className="input-group-report__text user-info__name"></input>
            </div>
            <div className="input-group-report form-group-report">
              <label className="input-group-report__label">CASOS</label>
              {/* <input className='input-group-report__text user-  info__name'></input> */}
              <select class="input-group-report__text user-info__name form-control ">
                <option style={{ display: "none" }}></option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
              </select>
              <i class="fa fa-caret-down" style={{ marginTop: "-1.7em" }}></i>
            </div>

            <span className="images-model-body__addImage-p"> IMAGEN </span>
          </div>

          <div className="report-info__detail_img col-12">
            <img src={upload_img} className="images-model-body__Image-upload" />
          </div>

        </div>
        <div className="btn-div pt-3">
          <button className="button-sec btn-cancel" onClick={props.onHide}>
            {"CANCELAR"}
          </button>
          <button className="button-sec btn-confirm">{"CONFIRMAR"}</button>
        </div>
      </Modal>
    </div>
  );
};
export default EditImageModal;
