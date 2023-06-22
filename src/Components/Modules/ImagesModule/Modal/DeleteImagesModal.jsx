import React from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';

import cancelIcon from "../../../../assets/images/icons/cancel.svg"


function DeleteImagesModal(props) {
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
        <span className="main-modal-heading mt-3"> {t('delete_images')}
</span>
        <div className="body">
          <h6>
          {t('images')} {t('selected')}:
          </h6>
          <p>{t('total')}: 4</p>
          <span>
            <i class="fa-solid fa-circle fa-2xs"></i>
            <p>Luis Enrique Cornejo Arreola</p>
            {/* <h5>| Encargado: Luis Cornejo</h5> */}
          </span>
          <span>
            <i class="fa-solid fa-circle fa-2xs"></i>
            <p>Log_1.png</p>
            {/* <h5>| Encargado: Luis Cornejo</h5> */}
          </span> <span>
            <i class="fa-solid fa-circle fa-2xs"></i>
            <p>Log_3.png</p>
            {/* <h5>| Encargado: Luis Cornejo</h5> */}
          </span> <span>
            <i class="fa-solid fa-circle fa-2xs"></i>
            <p>Log_2.png</p>
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

export default DeleteImagesModal


{/* <Modal.Body className="role-model-body">
<h4 className="role-model-body__heading">
  {t('selected_departments')}
</h4>
<p className="role-model-body__p"> {props.checkeditem.length} </p>
<ul className="role-model-body__ul">
  {props.checkeditem.length > 0 &&
    props.checkeditem.map((item) => (
      <li className="role-model-body__ul__li">
        <span> Asesinatos </span> | <p> {item.name} </p>
      </li>
    ))}
</ul>
</Modal.Body> */}