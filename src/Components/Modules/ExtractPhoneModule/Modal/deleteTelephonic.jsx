import React from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import cancelIcon from "../../../../assets/images/icons/cancel.svg";

function DeleteTelephonic(props) {
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
          ELIMINAR <br />
          EXTRACTO TELEFÓNICO
        </span>

        <div className="body">
          <span className="delete-telephonic-sub">
            Algunas sábanas pertenecen a algunos grupos ¿Desea continuar con la
            acción de eliminarlos?
          </span>
        
          <div className="delete-telephonic-content">
          <h6>Extracto telefónicos seleccionados:</h6>
          <p>Total: 4</p>
       
            <span>
              <i class="fa-solid fa-circle fa-2xs"></i>
              <p>4422232493_telcer.csv </p>
              <h5>| C1</h5>
            </span>

            <span>
              <i class="fa-solid fa-circle fa-2xs"></i>
              <p>4422232493_telcer.csv </p>
              <h5>| C1</h5>
            </span>
            <span>
              <i class="fa-solid fa-circle fa-2xs"></i>
              <p>4422232493_telcer.csv </p>
              <h5>| C1</h5>
            </span>

            <span>
              <i class="fa-solid fa-circle fa-2xs"></i>
              <p>4422232493_telcer.csv </p>
              <h5>| C1</h5>
            </span>
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

export default DeleteTelephonic;
