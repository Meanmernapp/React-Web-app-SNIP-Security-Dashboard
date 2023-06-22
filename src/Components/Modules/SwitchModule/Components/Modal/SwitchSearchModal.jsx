import React from "react";
import { Modal } from "react-bootstrap";
import cancelIcon from "../../../../../assets/images/icons/cancel.svg";

function AddImageModal(props) {
  return (
    <div className="dept-modal">
      <Modal
        dialogClassName="modal-90w"
        {...props}
        // size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}
      >
        <button onClick={props.onHide} className="modal-close-btn">
          <img src={cancelIcon} alt="cancel icon" />
        </button>

        <span className="main-modal-heading mt-3">AGREGAR A CASO</span>

        <div className="body">
          <h6 className="role-model-body__p2 switch-search-heading">
            Seleccione el caso al que desea asociar el extracto telefónico:
          </h6>
          <form>
            <div className="report-info__detail col-12">
              <div className="input-group-report form-group-report">
                <label className="input-group-report__label">CASOS</label>
                <select class="input-group-report__text user-info__name form-control classic">
                  <option style={{ display: "none" }}></option>
                  <option>BIL-2091 | Encargado: Luis Cornejo</option>
                  <option>BIL-2091 | Encargado: Luis Cornejo</option>
                  <option>BIL-2091 | Encargado: Luis Cornejo</option>
                  <option>BIL-2091 | Encargado: Luis Cornejo</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="btn-div pt-3 d-flex">
          <button
            className="button-sec btn-cancel"
            style={{ width: "43%" }}
            onClick={props.onHide}
          >
            CANCELAR
          </button>
          <button className="button-sec btn-confirm" style={{ width: "43%" }}>
            CONFIRMAR
          </button>
        </div>

        {/* <Modal.Header closeButton className="btn-close-red">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="images-model-top "
          >
            AGREGAR A CASO
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="images-model-body">
          <p className="role-model-body__p2">
            Seleccione el caso al que desea asociar el extracto telefónico:
          </p>
          <form>
            <div className="report-info__detail col-12">
              <div className="input-group-report form-group-report">
                <label className="input-group-report__label">CASOS</label>
                <select class="input-group-report__text user-info__name form-control classic">
                  <option style={{ display: "none" }}></option>
                  <option>BIL-2091 | Encargado: Luis Cornejo</option>
                  <option>BIL-2091 | Encargado: Luis Cornejo</option>
                  <option>BIL-2091 | Encargado: Luis Cornejo</option>
                  <option>BIL-2091 | Encargado: Luis Cornejo</option>
                </select>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide} className="role-model-close-btn">
            CANCELAR
          </button>
          <button onClick={props.onHide} className="role-model-confirm-btn">
            CONFIRMAR
          </button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default AddImageModal;
