import React from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';

import cancelIcon from "../../../../assets/images/icons/cancel.svg"


function DeleteFollowModal(props) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const data = props?.deletedata;
  const confirmDelete = async () => {
    console.log("kainat");
    console.log(props.deletedata);
    if (data.length === 1) {
      console.log("fooooo");
      await axios
        .delete(
          `http://38.65.139.14:8081/corporate-citras-v1/department-service/delete-by-id/${data[0]}`
        )
        .then((resp) => {
          //   dispatch(responseOkFunc(resp.data.message));
          props.responsepositive();
        })
        .catch((err) => {
          //   dispatch(responseErrorFunc(err.response.data.message));
          props.responsenegative();
        });
    } else {
      console.log(props.deletedata);
      console.log("-----------");
      await axios
        .post(
          `http://38.65.139.14:8081/corporate-citras-v1/department-service/delete-all/by-ids`,
          {
            ids: props.deletedata,
          }
        )
        .then((resp) => {
          //   dispatch(responseOkFunc(resp.data.message));
          props.responsepositive();
        })
        .catch((err) => {
          console.log(err);
          // dispatch(responseErrorFunc(err.resp.data.));
          // props.responsenegative();
        });
    }

    props.onHide();
  };
  return (
    <div>
      <Modal
        dialogClassName="modal-90w deparment-follow-modal"
        show={props.show}
        onHide={props.onHide}
        // size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}>
        <button onClick={props.onHide} className="modal-close-btn">
          <img src={cancelIcon} alt="cancel icon" />
        </button>
        <h3 className="deparment-follow-modal__header">ELIMINAR DEPARTAMENTOS</h3>
        <div className="body">
          <h6>
          Seguimientos seleccionados:
          </h6>
          <p>Total: 4</p>
          <span className="mb-2">
            <i class="fa-solid fa-circle fa-2xs"></i>
            <p>Caso: Asesinato María </p>
            <h5>| RESUELTO</h5>
          </span>
          <span className="mb-2">
            <i class="fa-solid fa-circle fa-2xs"></i>
            <p>Caso: Asesinato María </p>
            <h5>| RESUELTO</h5>
          </span> <span className="mb-2">
            <i class="fa-solid fa-circle fa-2xs"></i>
            <p>Caso: Asesinato María </p>
            <h5>| RESUELTO</h5>
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

export default DeleteFollowModal


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