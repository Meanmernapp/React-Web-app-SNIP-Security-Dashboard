import React, { useState, useContext } from "react";
import ic_trash_outline from "../../../images/ic-trash-outline.svg";
import Modal from "react-bootstrap/Modal";
import { AppContext } from "../../../App";
import TablePagination from "@mui/material/TablePagination";
import DeleteAlertModal from "./Modal/DeleteAlertModal";
import { useTranslation } from 'react-i18next';

const AlertMain = () => {
  const [modalSee, setModalSee] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentValues, setCurrentValues] = useState();
  const { val1 } = useContext(AppContext);
  const [alertModal, setAlertModal] = useState(false);
  const { t } = useTranslation();


  const alert_headings = {
    emptyString: "",
    informed: t('reported_by'),
    success: t('success'),
    module: t('module'),
    grades: t('grades'),
    emptyStringTwo: "",
  };
  const alert_examples = [
    {
      id: "1",
      alertType: "checkBox",
      alertStart: <i class="fa-light fa-star"></i>,
      name: "Luis Cornejo",
      content: "Se cerro cuando...",
      alert: "Alertas",
      notes: "Sin notas.",
      time: "23:11",
      className: "roles-main-table__DataRow roles-main-table__boldData",
    },
    {
      id: "2",

      alertType: "checkBox",
      alertStart: <i class="fa-light fa-star"></i>,
      name: "Luis Cornejo",
      content: "Se cerro cuando...",
      alert: "Alertas",
      notes: "Sin notas.",
      time: "23:11",
      className: "roles-main-table__DataRow roles-main-table__normalData",
    },
    {
      id: "3",

      alertType: "checkBox",
      alertStart: <i class="fa-light fa-star"></i>,
      name: "Luis Cornejo",
      content: "Se cerro cuando...",
      alert: "Alertas",
      notes: "Sin notas.",
      time: "23:11",
      className: "roles-main-table__DataRow roles-main-table__boldData",
    },
    {
      id: "4",

      alertType: "checkBox",
      alertStart: <i class="fa-light fa-star"></i>,

      name: "Luis Cornejo",
      content: "Se cerro cuando...",
      alert: "Alertas",
      notes: "Sin notas.",
      time: "23:11",
      className: "roles-main-table__DataRow roles-main-table__normalData",
    },
    {
      id: "5",

      alertType: "checkBox",
      alertStart: <i class="fa-light fa-star"></i>,
      name: "Luis Cornejo",
      content: "Se cerro cuando...",
      alert: "Alertas",
      notes: "Sin notas.",
      time: "23:11",
      className: "roles-main-table__DataRow roles-main-table__boldData",
    },
    {
      alertType: "checkBox",
      alertStart: <i class="fa-light fa-star"></i>,

      name: "Luis Cornejo",
      content: "Se cerro cuando...",
      alert: "Alertas",
      notes: "Sin notas.",
      time: "23:11",
      className: "roles-main-table__DataRow roles-main-table__normalData",
    },
    {
      id: "6",

      alertType: "checkBox",
      alertStart: <i class="fa-light fa-star"></i>,

      name: "Luis Cornejo",
      content: "Se cerro cuando...",
      alert: "Alertas",
      notes: "Sin notas.",
      time: "23:11",
      className: "roles-main-table__DataRow roles-main-table__boldData",
    },
    {
      id: "7",

      alertType: "checkBox",
      alertStart: <i class="fa-light fa-star"></i>,
      name: "Luis Cornejo",
      content: "Se cerro cuando...",
      alert: "Alertas",
      notes: "Sin notas.",
      time: "23:11",
      className: "roles-main-table__DataRow roles-main-table__normalData",
    },
  ];
  const handleInputOnClick = (e) => {
    handleInputOnClickEvent(e);
    setAlertModal(false);
    setModalSee(true);
    setAlertModal(false);
    // console.log('buxxxxxxxxxxxxxxxxx')
  };
  const handleHide = (e) => {
    e.stopPropagation();
    setModalSee(false);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);

    var p = newPage + 1;
    console.log(p);
    const indexOfLastValue = p * rowsPerPage;
    console.log(indexOfLastValue);
    console.log("--------------");
    console.log(rowsPerPage);
    const indexOfFirstValue = indexOfLastValue - rowsPerPage;
    console.log(indexOfFirstValue);
    setCurrentValues(alert_examples.splice(indexOfFirstValue, rowsPerPage));
    console.log(currentValues);
  };
  const handleInputOnClickEvent = (e) => {
    e.stopPropagation();

    // console.log('buxxxxxxxxxxxxxxxxx')
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
    // const indexOfLastValue = currentPage * postsPerPage
    // const indexOfFirstValue = indexOfLastValue - postsPerPage
    setCurrentValues(alert_examples.slice(0, event.target.value));
    // console.log(indexOfFirstValue + ' ' + indexOfLastValue)
  };
  const totalPages = Math.ceil(alert_examples.length / rowsPerPage);

  return (
    <div   >
      <div className="container-size">
        <div className="container-fluid">
          <div className=" Actual_h1 row">
            <div className="col-sm-8 float-sm-right float-md-right float-lg-right float-xl-right  col-md-7">
              <div className="images-header-row">
                <h1 className="images-header__h1">{t('alerts')}</h1>
              </div>
            </div>
            <div className="col-sm-4 col-md-5">
            <div style={{display:"flex",justifyContent:"end"}}>
                     
                      <button
                        className="home_button_delete" style={{width:"252px"}}
                        onClick={() => setModalSee(true)}
                        >
                        {t('delete')} {t('alerts')} &nbsp;
                        <i class="fa-solid fa-trash-can fa-lg"></i>
                      </button>
                      {/* <button
                        className="home_button_add" style={{width:"252px"}}
                        onClick={handleClick}
                        >
                        GENERAR NUEVA ALERTA &nbsp; 
                        <i class="fa-solid fa-plus fa-lg"></i>
                      </button> */}
                      <DeleteAlertModal show={modalSee} onHide={() => setModalSee(false)} />

                  </div>
            </div>
          </div>
         
          <div className="CasosTable">
          <table class="w-100">
            <thead>
                <th>
                  {alert_headings.emptyString}
                </th>
                <th>
                  {alert_headings.informed}
                </th>
                <th>
                  {alert_headings.success}
                </th>
                <th>
                  {alert_headings.module}
                </th>
                <th>
                  {alert_headings.grades}
                </th>
                <th>
                  {alert_headings.emptyStringTwo}
                </th>
            </thead>
            <tbody>
              {alert_examples.map((item) => (
                <tr
                  className={item.className}
                  onClick={() => setAlertModal(true)}>
                  <th className="ps-4 d-flex justify-content-start align-items-center">
                    <input
                      type={item.alertType}
                      onClick={(e) => handleInputOnClickEvent(e)}
                      className="me-2"
                    />
                    <i class="fa-solid fa-star" style={{color:"#F2A100"}}></i>
                    {/* <input
                      type={item.alertType}
                      onClick={(e) => handleInputOnClickEvent(e)}
                      className="star"
                    /> */}
                  </th>
                  <td>{item.name}</td>
                  <td>{item.content}</td>
                  <td>{item.alert}</td>
                  <td>{item.notes}</td>
                  <td className="d-flex justify-content-end align-items-center pe-3 mt-1">
                    <button
                      className="bg-white btn p-0"
                      onClick={(e) => handleInputOnClick(e)}>
                      <i class="fa-regular fa-trash-can alert_trash_can"></i>
                    </button>
                    {/* <DeleteRole show={modalSee} onHide={(e) => handleHide(e)} /> */}

                    {item.time}
                  </td>
                </tr>
              ))}
              <AlertDetailsModal
                show={alertModal}
                onHide={() => setAlertModal(false)}
              />
            </tbody>
          </table>

          <div className="page">
            <TablePagination
              component="div"
              rowsPerPageOptions={[5, 10, 20, 50, 100, 200, 500]}
              count={alert_examples.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage={<span>{t('alerts')} {t('per_page')}</span>}
              labelDisplayedRows={({ page }) => {
                return `${t('page')} ${t('from')}:  ${page}  ${t('to')} ${totalPages}`;
              }}
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertMain;



function AlertDetailsModal(props) {
  return (
    <div className="role-delete-modal">
      <Modal
        dialogClassName="modal-90w"
        className="modalCenter"
        {...props}
        // size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}>
        <Modal.Header closeButton className="btn-close-red">
          <Modal.Title
            style={{ margin: "0 auto" }}
            id="contained-modal-title-vcenter"
            className="role-model-top">
            DETALLES DE ALERTA
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="role-model-body">
          <h4 className="loadPhone-right__heading text-start mb-0 pb-0 ">
            Informada por
          </h4>
          <p className="roles-acc-body-one__rolesLiP mt-0 pt-0 mx-2 pl-3">
            Luis Enrique Cornejo Arreola
          </p>
          <h4 className="loadPhone-right__heading text-start mb-0 pb-0 mt-2 ">
            Succeso
          </h4>
          <p className="roles-acc-body-one__rolesLiP mt-0 pt-0 mx-2 pl-3">
            No se pueden crear alertas
          </p>
          <h4 className="loadPhone-right__heading text-start mb-0 pb-0 mt-2">
            Módulo
          </h4>
          <p className="roles-acc-body-one__rolesLiP mt-0 pt-0 mx-2 pl-3">
            Alertas
          </p>
          <h4 className="loadPhone-right__heading text-start mb-0 pb-0 mt-2 ">
            Notas
          </h4>
          <p className="roles-acc-body-one__rolesLiP mt-0 pt-0 mx-2 pl-3">
            Sin notas.
          </p>
          <h4 className="loadPhone-right__heading text-start mb-0 pb-0 mt-2">
            Fecha
          </h4>
          <p className="roles-acc-body-one__rolesLiP mt-0 pt-0 mx-2 pl-3">
            22:11 Jueves 9, Marzo 2021
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide} className="role-model-close-btn">
            NO LEÍDA
          </button>
          <button onClick={props.onHide} className="role-model-confirm-btn">
            LEÍDA
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
