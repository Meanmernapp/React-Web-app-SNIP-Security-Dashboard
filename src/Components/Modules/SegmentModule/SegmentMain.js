import React, { useState, useContext } from "react";
import ic_add from "../../../images/ic-add.svg";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { AppContext } from "../../../App";
import TablePagination from "@mui/material/TablePagination";
import ic_edit_outline from "../../../assets/images/icons/blue-edit-outline.svg";
import ic_trash from "../../../assets/images/icons/white-trash.svg";
import ic_trash_outline from "../../../images/ic-trash-outline.png";

import DeleteFollowModal from "./Modal/DeleteFollowModal";
import { useTranslation } from 'react-i18next';

const SegmentMain = () => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [openk, setOpenk] = useState(false);
  const [page, setPage] = useState(0);
  const [editInfoShow, setEditInfoShow] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentValues, setCurrentValues] = useState();
  const { val1 } = useContext(AppContext);
  const { t } = useTranslation();

  const reportHeadings = {
    name: "NOMBRE",
    evidence: "EVIDENCIAS",
    notes: "NOTAS",
    pDate: "FECHA PRESENTACIÓN",
    pTime: "HORA PRESENTACIÓN",
    pPlace: "LUGAR PRESENTACIÓN",
    consult: "CONSULTAR",
    opc: "OPC",
  };
  const reporToDoValues = [
    {
      nameValue: "Caso 1",
      evidenceValue: "14",
      notesValue: "LOG",
      fetchValue: "22 Abril",
      timeValue: "11:21",
      placeValue: "-",
      consultValue: "",
      opcValue: "checkbox",
    },
    {
      nameValue: "Caso 1",
      evidenceValue: "14",
      notesValue: "LOG",
      fetchValue: "22 Abril",
      timeValue: "11:21",
      placeValue: "-",
      consultValue: "-",
      opcValue: "checkbox",
    },
    {
      nameValue: "Caso 1",
      evidenceValue: "14",
      notesValue: "LOG",
      fetchValue: "22 Abril",
      timeValue: "11:21",
      placeValue: "-",
      consultValue: "-",
      opcValue: "checkbox",
    },
    {
      nameValue: "Caso 1",
      evidenceValue: "14",
      notesValue: "LOG",
      fetchValue: "22 Abril",
      timeValue: "11:21",
      placeValue: "-",
      consultValue: "-",
      opcValue: "checkbox",
    },
    {
      nameValue: "Caso 1",
      evidenceValue: "14",
      notesValue: "LOG",
      fetchValue: "22 Abril",
      timeValue: "11:21",
      placeValue: "-",
      consultValue: "-",
      opcValue: "checkbox",
    },
    {
      nameValue: "Caso 1",
      evidenceValue: "14",
      notesValue: "LOG",
      fetchValue: "22 Abril",
      timeValue: "11:21",
      placeValue: "-",
      consultValue: "-",
      opcValue: "checkbox",
    },
    {
      nameValue: "Caso 1",
      evidenceValue: "14",
      notesValue: "LOG",
      fetchValue: "22 Abril",
      timeValue: "11:21",
      placeValue: "-",
      consultValue: "-",
      opcValue: "checkbox",
    },
  ];

  const reportMisoValues = [
    {
      nameValue: "Caso 1",
      evidenceValue: "14",
      notesValue: "LOG",
      fetchValue: "22 Abril",
      timeValue: "11:21",
      placeValue: "-",
      consultValue: "-",
      opcValue: "checkbox",
    },
  ];
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
    setCurrentValues(reporToDoValues.splice(indexOfFirstValue, rowsPerPage));

    console.log(currentValues);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
    // const indexOfLastValue = currentPage * postsPerPage
    // const indexOfFirstValue = indexOfLastValue - postsPerPage
    setCurrentValues(reporToDoValues.slice(0, event.target.value));
    // console.log(indexOfFirstValue + ' ' + indexOfLastValue)
  };
  const totalPages = Math.ceil(reporToDoValues.length / rowsPerPage);

  const handleAddButton = () => {
    navigate("/follow-create");
  };
  const handleOnAdmin = () => {
    navigate("/");
  };
  const handleEditClick = () => {
    navigate("/follow-view");
  };
  return (
    <div   >
      <div className="container-size">
        <div className="container-fluid">
          <div className=" Actual_h1 row">
            <div className="col-sm-6 float-sm-right float-md-right float-lg-right float-xl-right  col-md-6 col-lg-6 col-xl-6">
              <div className="images-header-row">
                <h1 className="images-header__h1">{t('follow')}</h1>
              </div>
              <p className="images-header__p">{t('total')}: 4 {t('follow')}.</p>
            </div>
            <div className="department-header__buttons col-sm-6 col-md-6 col-lg-6 col-xl-4 ms-auto">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-end">
                <button
                  className="department-header__buttons__addButton gobal-btn-width"
                  onClick={handleAddButton}
                >
                 {t('create_follow_up')} &nbsp;
                  <img
                    src={ic_add}
                    className="department-header__buttons__icAdd"
                  />
                </button>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-end">
                <button
                  className="department-header__buttons__deleteButton gobal-btn-width"
                  onClick={() => setModalShow(true)}
                >
                  {t('delete_follow_up')} &nbsp;
                  <img
                    src={ic_trash}
                    className="department-header__buttons__icAdd"
                  />
                </button>
                <DeleteFollowModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </div>
          <div className="">
            <button
              className="department-main-heading__dept"
              onClick={() => setOpen(false)}
              style={{
                borderBottom: !open ? "2px solid #00506A" : "none",
                color: !open ? "#00506A" : "#707070",
                fontWeight: !open ? "bold " : "normal",
              }}
            >
              {t('my_follow_up')}
            </button>
            <button
              className="department-main-heading__todos"
              onClick={() => setOpen(true)}
              style={{
                borderBottom: open ? "2px solid #00506A" : "none",
                color: open ? "#00506A" : "#707070",
                fontWeight: open ? "bold " : "normal",
              }}
            >
              {t('all')}
            </button>
          </div>
          <div
            className="UserRoletable"
            style={{ display: open ? "none" : "block" }}
          >
            <table class="table">
              <thead>
                <th scope="col">{t('name')}</th>
                <th scope="col">{t('evidence')}</th>
                <th scope="col">{t('note')}</th>
                <th scope="col">{t("submission_date")}</th>
                <th scope="col">{t('presentation_time')}</th>
                <th scope="col">{t('presentation_place')}</th>

                <th scope="col">{t('consult')}</th>
                <th scope="col">{reportHeadings.opc}</th>
              </thead>
              <tbody>
                {reportMisoValues.map((item) => (
                  <tr>
                    <th scope="row">{item.nameValue}</th>
                    <td>{item.evidenceValue}</td>
                    <td>{item.notesValue}</td>
                    <td>{item.fetchValue}</td>
                    <td>{item.timeValue}</td>
                    <td>{item.placeValue}</td>
                    <td className="text-center">
                      <button
                        className="department-create-header__button"
                        onClick={handleEditClick}
                      >
                        <img
                          src={ic_edit_outline}
                          style={{ fontSize: "1.5em" }}
                        />
                      </button>
                    </td>
                    <td>
                      <input type={item.opcValue} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className="UserRoletable"
            style={{ display: !open ? "none" : "block" }}
          >
            <table className="w-100">
              <thead>
                <th scope="col" className="first_head ps-0">
                {t('name')}
                </th>
                <th scope="col">{t('evidence')}</th>
                <th scope="col">{t('note')}</th>
                <th scope="col">{t("submission_date")}</th>
                <th scope="col">{t('presentation_time')}</th>
                <th scope="col">{t('presentation_place')}</th>

                <th scope="col">{t('consult')}</th>
                <th scope="col">{reportHeadings.opc}</th>
              </thead>
              <tbody>
                {reporToDoValues.map((item) => (
                  <tr>
                    <th scope="row" className="first">
                      {item.nameValue}
                    </th>
                    <td>{item.evidenceValue}</td>
                    <td>{item.notesValue}</td>
                    <td>{item.fetchValue}</td>
                    <td>{item.timeValue}</td>
                    <td>{item.placeValue}</td>
                    <td className="text-center">
                      <button
                        className="department-create-header__button"
                        onClick={handleEditClick}
                      >
                        <img
                          src={ic_edit_outline}
                          style={{ fontSize: "1.5em" }}
                        />
                      </button>
                    </td>
                    <td>
                      <input type={item.opcValue} />
                    </td>
                  </tr>
                ))}
              </tbody>

              <div className="pages">
                <TablePagination
                  component="div"
                  rowsPerPageOptions={[5, 10, 20, 50, 100, 200, 500]}
                  count={reporToDoValues.length}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  labelRowsPerPage={<span>Imagenes por página</span>}
                  labelDisplayedRows={({ page }) => {
                    return `Página: ${page}  de ${totalPages}`;
                  }}
                />
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SegmentMain;
function MyVerticallyCenteredModal(props) {
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
        <Modal.Header closeButton className="btn-close-red">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="role-model-top"
          >
            ELIMINAR DEPARTAMENTOS
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="role-model-body">
          <h4 className="role-model-body__heading">
            Departamentos seleccionados:
          </h4>
          <p className="role-model-body__p"> Total 4 </p>
          <ul className="role-model-body__ul">
            <li className="role-model-body__ul__li">
              {" "}
              <span> Asesinatos </span> | <p> Encargado: Luis Cornejo </p>{" "}
            </li>
            <li className="role-model-body__ul__li">
              {" "}
              <span> Asesinatos </span> | <p> Encargado: Luis Cornejo </p>{" "}
            </li>
            <li className="role-model-body__ul__li">
              {" "}
              <span> Asesinatos </span> | <p> Encargado: Luis Cornejo </p>{" "}
            </li>
            <li className="role-model-body__ul__li">
              {" "}
              <span> Asesinatos </span> | <p> Encargado: Luis Cornejo </p>{" "}
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide} className="role-model-close-btn">
            CANCELAR
          </button>
          <button onClick={props.onHide} className="role-model-confirm-btn">
            CONFIRMAR
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
