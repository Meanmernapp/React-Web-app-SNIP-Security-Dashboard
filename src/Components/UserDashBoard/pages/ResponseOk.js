import { Modal } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import ic_check from "../../../images/ic-check.svg";
import { useDispatch, useSelector } from "react-redux";
import cancelIcon from "../../../assets/images/icons/cancel.svg";

export default function ResponseOk(props) {
  const { responseOkMessage } = useSelector((state) => state.user);

  const buttonClick = () => {
   
    if (props.to === "/role-management" || props.to === "/departments") {
    } else {
    }
    props.onHide();
  };
  return (
    <div className="dept-modal">
      <Modal
        dialogClassName="modal-90w"
        {...props}
        // size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}>
           <button onClick={props.onHide} className="modal-close-btn">
          <img src={cancelIcon} alt="cancel icon" />
        </button>
        <span className="main-modal-heading mt-3">INFORMACIÓN</span>
        <Modal.Body className="images-model-body mx-4">
          <div className="mx-5">
            <div className="d-flex flex-column justify-content-center">
              <img src={ic_check} className="images-model-body__img mx-auto" />
              <h4 className="images-model-body__heading">
                {responseOkMessage && responseOkMessage.replaceAll("_"," ")}
              </h4>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link
            to={props.to}
            onClick={buttonClick}
            className="images-model-confirm-btn ">
            Ok
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
