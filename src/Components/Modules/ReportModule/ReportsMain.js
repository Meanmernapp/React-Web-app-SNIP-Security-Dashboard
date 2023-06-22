import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ic_add from "../../../images/ic-add.svg";
import word_file from "../../../images/ic-file-word-solid.svg";
import { Modal } from "react-bootstrap";
import ic_copy from "../../../images/ic-copy-solid.svg";
import ic_edit_outline from "../../../images/ic-edit-outline-svg.svg";
import TablePagination from "@mui/material/TablePagination";
import { AppContext } from "../../../App";
import ic_trash from "../../../images/NavBar/ic-trash-outline.svg";
import DeleteReportsModal from "./Modal/DeleteTempleteModal";

const ReportsMain = () => {
  const [modalShow, setModalShow] = useState(false);
  const [open, setOpen] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentValues, setCurrentValues] = useState();
  const { val1 } = useContext(AppContext);

  const reportHeadings = {
    name: "NOMBRE",
    createdBy: "CREADOR POR",
    case: "CASO",
    fetch: "FECHA",
    opc: "OPC",
  };
  const reporToDoValues = [
    {
      nameValue: "log_1.jpg",
      createdByValue: "Luis Cornejo",
      caseValue: "LOG",
      fetchValue: "22 Abril 11:21",
      opcValue: "checkbox",
    },
    {
      nameValue: "log_1.jpg",
      createdByValue: "Luis Cornejo",
      caseValue: "LOG",
      fetchValue: "22 Abril 11:21",
      opcValue: "checkbox",
    },
    {
      nameValue: "log_1.jpg",
      createdByValue: "Luis Cornejo",
      caseValue: "LOG",
      fetchValue: "22 Abril 11:21",
      opcValue: "checkbox",
    },
    {
      nameValue: "log_1.jpg",
      createdByValue: "Luis Cornejo",
      caseValue: "LOG",
      fetchValue: "22 Abril 11:21",
      opcValue: "checkbox",
    },
  ];

  const reportMisoValues = [
    {
      nameValue: "log_1.jpg",
      createdByValue: "Luis Cornejo",
      caseValue: "LOG",
      fetchValue: "22 Abril 11:21",
      opcValue: "checkbox",
    },
  ];

  let navigate = useNavigate();

  const handleAddButton = () => {
    navigate("/create-report");
  };
  const handleActualBtn = () => {
    navigate("/update-report");
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
  return (
    <div   >
      <div className="container-size">
        <div className=" container-fluid">
          <div className=" Actual_h1 row pb-0">
            <div className="col-sm-6 float-sm-right float-md-right float-lg-right float-xl-right  col-md-6 col-lg-6 col-xl-6">
              <div className="images-header-row">
                <h1 className="images-header__h1">REPORTES</h1>
              </div>
            </div>
            <div className="department-header__buttons col-sm-6 col-md-6 col-lg-6 col-xl-4 ms-auto">
              <div className="col-12 text-end" >
                <button
                style={{width:"247px"}}
                  className="department-header__buttons__addButton"
                  onClick={handleAddButton}>
                  AGREGAR REPORTE &nbsp;
                  <img
                    src={ic_add}
                    className="department-header__buttons__icAdd"
                  />
                </button>
              </div>
              <div className="col-12 text-end">
                <button
                style={{width:"247px"}}
                  className="department-header__buttons__deleteButton"
                  onClick={() => setModalShow(true)}>
                  ELIMINAR REPORTE(S) &nbsp;
                  <img
                    src={ic_trash}
                    className="department-header__buttons__icAdd"
                  />
                </button>
                <DeleteReportsModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </div>

          <div className="department-main-heading mt-0">
            <button
              className="department-main-heading__dept"
              onClick={() => setOpen(false)}
              style={{
                borderBottom: !open ? "2px solid #00506A" : "none",
                color: !open ? "#00506A" : "#707070",
                font: !open
                  ? "normal normal bold 18px/22px Montserrat"
                  : "normal normal normal 18px/22px Montserrat",
              }}>
              MIS REPORTES
            </button>
            <button
              className="department-main-heading__todos"
              onClick={() => setOpen(true)}
              style={{
                borderBottom: open ? "2px solid #00506A" : "none",
                color: open ? "#00506A" : "#707070",
                font: open
                  ? "normal normal bold 18px/22px Montserrat"
                  : "normal normal normal 18px/22px Montserrat",
              }}>
              TODOS
            </button>

            <div className="row">
              <div
                className="vl-report col-sm-12 col-lg-8"
                style={{ display: open ? "none" : "block" }}>
                <div className="ImagesTable">
                  <table class="w-100">
                    <thead>
                    <th className="first_head">
                          {reportHeadings.name}
                        </th>
                        <th>
                          {reportHeadings.createdBy}
                        </th>
                        <th>
                          {reportHeadings.case}
                        </th>
                        <th>
                          {reportHeadings.fetch}
                        </th>
                        <th>
                          {reportHeadings.opc}{" "}
                        </th>
                    </thead>
                    <tbody>
                      {reportMisoValues.map((item) => (
                        <tr >
                          <th className="first">{item.nameValue}</th>
                          <td>
                            {item.createdByValue}
                          </td>
                          <td>
                            {item.caseValue}
                          </td>
                          <td>
                            {item.fetchValue}
                          </td>
                          <td>
                            <input type={item.opcValue} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="vl-report col-sm-12 col-lg-8 pe-4"
                style={{ display: !open ? "none" : "block" }}>
                <div className="ImagesTable">
                  <table className="w-100">
                    <thead>
                        <th className="first_head">
                          {reportHeadings.name}
                        </th>
                        <th>
                          {reportHeadings.createdBy}
                        </th>
                        <th>
                          {reportHeadings.case}
                        </th>
                        <th>
                          {reportHeadings.fetch}
                        </th>
                        <th>
                          {reportHeadings.opc}{" "}
                        </th>
                    </thead>
                    <tbody>
                      {reporToDoValues.map((item) => (
                        <tr>
                          <th className="first">{item.nameValue}</th>
                          <td>
                            {item.createdByValue}
                          </td>
                          <td>
                            {item.caseValue}
                          </td>
                          <td>
                            {item.fetchValue}
                          </td>
                          <td>
                            <input type={item.opcValue} />
                          </td>
                        </tr>
                      ))}
                    </tbody>

                    <div className="pages" style={{left:"26%"}}>
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
              <div className="col-sm-12 col-lg-4">
                <div className="row">
                  <h1 className="report-rightColumn__headingOne col-12">
                    DETALLES DE REPORTES SELECCIONADOS
                  </h1>
                  <p className="report-rightColumn__p">Total seleccionados 4</p>
                </div>
                <div className="row mx-1 px-1">
                  <div className="report-rightColumn__firstItem col-sm-6 col-lg-12">
                    <div className="firstItem-div row">
                      <img src={word_file} className="fileSize col-4" />
                      <div className="col-8">
                        <div className=" row">
                          <div className="report-rightColumn__firstItem__div col-6 ">
                            <p className="report-rightColumn__firstItem__div__fp">
                              NOMBRE
                            </p>
                            <p className="report-rightColumn__firstItem__div__sp">
                              Asesinatos
                            </p>
                          </div>
                          <div className="report-rightColumn__firstItem__div col-6 ">
                            <p className="report-rightColumn__firstItem__div__fp text-end">
                              IMÁGENES
                            </p>
                            <p className="report-rightColumn__firstItem__div__sp text-end">
                              4
                            </p>
                          </div>
                        </div>

                        <div className="report-rightColumn__firstItem__div">
                          <p className="report-rightColumn__firstItem__div__fp ">
                            CASO
                          </p>
                          <p className="report-rightColumn__firstItem__div__sp">
                            Asesinato María
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn-row ">
                      <button className="btn-row__btns ">
                        <img src={ic_copy} className="btn-row__svg" />
                        ACCEDER REPORTE
                      </button>
                      <div class="vr "></div>

                      <button
                        className="btn-row__btns "
                        onClick={handleActualBtn}>
                        <img src={ic_edit_outline} className="btn-row__svg" />
                        ACTUALIZAR
                      </button>
                    </div>
                  </div>
                  <div className="report-rightColumn__firstItem col-sm-6 col-lg-12">
                    <div className="firstItem-div row">
                      <img src={word_file} className="fileSize col-4" />
                      <div className="col-8">
                        <div className=" row">
                          <div className="report-rightColumn__firstItem__div col-6">
                            <p className="report-rightColumn__firstItem__div__fp">
                              NOMBRE
                            </p>
                            <p className="report-rightColumn__firstItem__div__sp">
                              Asesinatos
                            </p>
                          </div>
                          <div className="report-rightColumn__firstItem__div col-6">
                            <p className="report-rightColumn__firstItem__div__fp text-end">
                              IMÁGENES
                            </p>
                            <p className="report-rightColumn__firstItem__div__sp text-end">
                              4
                            </p>
                          </div>
                        </div>

                        <div className="report-rightColumn__firstItem__div">
                          <p className="report-rightColumn__firstItem__div__fp">
                            CASO
                          </p>
                          <p className="report-rightColumn__firstItem__div__sp">
                            Asesinato María
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn-row">
                      <button className="btn-row__btns ">
                        <img src={ic_copy} className="btn-row__svg" />
                        ACCEDER REPORTE
                      </button>
                      <div class="vr"></div>

                      <button className="btn-row__btns ">
                        <img src={ic_edit_outline} className="btn-row__svg" />
                        ACTUALIZAR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsMain;
