import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import cancelIcon from "../../../../assets/images/icons/cancel.svg";
import Upload from "../../../../assets/images/poster/upload.jpg";

function PickImageModal(props) {
  let images = [
    { id: 1, name: Upload },
    { id: 2, name: Upload },
    { id: 3, name: Upload },
    { id: 4, name: Upload },
    { id: 5, name: Upload },
    { id: 6, name: Upload },
  ];

  return (
    <div className="dept-modal">
      <Modal
        dialogClassName="modal-90w deparment-delete-modal"
        show={props.show}
        onHide={props.onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}
      >
        <button onClick={props.onHide} className="modal-close-btn">
          <img src={cancelIcon} alt="cancel icon" />
        </button>
        <span className="main-modal-heading mt-3"> ASOCIAR IMÁGENES</span>
        <div className="pick-image-body">
          <span className="pick-image-subheading">
            Selecciona las imágenes que quieras agregar al caso:
          </span>
          <div className="col-md-12 row pick-image-grid">
            {images?.map((item) => {
              return (
                <div className="col-md-4 inner-grid">
                  <div className="upload-img-out">
                    <div className="upload-check-img">
                      <input className="actual_cb" type="checkbox" />
                    </div>
                    <img src={item.name} alt="" className="upload-img-in" />
                  </div>
                </div>
              );
            })}
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
}

export default PickImageModal;
