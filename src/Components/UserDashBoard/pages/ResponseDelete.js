import { Modal } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import ic_check from "../../../images/ic-check.svg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function ResponseDelete(props) {
  // console.log(props.deletedata);

  return (
    <div className="dept-modal">
      <Modal
        dialogClassName="modal-90w"
        show={props.show}
        onHide={props.onHide}
        // size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}>
        <Modal.Header closeButton className="btn-close-red ">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="role-model-top text-center mx-5 ">
            ELIMINAR USUARIOS
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="role-model-body">
          <div className="mx-5">
            <h4 className="role-model-body__heading">Usuarios a eliminar</h4>
            <p className="role-model-body__p"> Total 5 </p>
            <ul className="role-model-body__ul">
              <li className="role-model-body__ul__li">
                <span>{props.checkname} </span>
              </li>
              {/* <li className="role-model-body__ul__li">
                <span> {props.deletedata?.email} </span>
              </li>
              <li className="role-model-body__ul__li">
                <span> {props.deletedata?.phone} </span>
              </li>
              <li className="role-model-body__ul__li">
                <span> Luis Enrique Cornejo </span>
              </li> */}
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide} className="role-model-close-btn">
            CANCELAR
          </button>
          <button onClick={props.savehere} className="role-model-confirm-btn">
            CONFIRMAR
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
