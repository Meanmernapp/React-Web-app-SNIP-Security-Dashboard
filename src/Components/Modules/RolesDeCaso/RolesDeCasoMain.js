import React, { useState, useContext } from "react";
import ic_add from "../../../images/ic-add.svg";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { AppContext } from "../../../App";
import ic_trash from "../../../images/NavBar/ic-trash-outline.svg";
import { Link } from "react-router-dom";
import DeleteRolesModal from "./Modal/DeleteRolesModal";
import { useTranslation } from 'react-i18next';

const RolesDeCasoMain = () => {
  let navigate = useNavigate();
  const { t } = useTranslation();

  const [open, setOpen] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [openk, setOpenk] = useState(false);
  const { val1 } = useContext(AppContext);

  const dptAccHeader = [
    {
      dutyMan: "ENCARGADO",
      mname: "Luis Cornejo",
      name: "NOMBRE",
      inCharge: "USUARIO A CARGO",
      adminDept: "ADMINISTRAR DEPARTAMENTO",
    },
    {
      dutyMan: "ENCARGADO",
      mname: "Luis Cornejo",
      name: "NOMBRE",
      inCharge: "USUARIO A CARGO",
      adminDept: "ADMINISTRAR DEPARTAMENTO",
    },
  ];
  const deptAccBody = {
    report: "REPORTES 1/4",
    ulAlta: "Alta",
    case: "CASO 1/1",
    caseUpdate: "Actualizaciones",
    delCase: "INTEGRANTES DEL CASO (USUARIOS) 2/2",
    dCliOne: "Agregar",
    dCliTwo: "Eliminar",
  };
  const handleAddButton = () => {
    navigate("/roles-caso-create");
  };
  const handleOnAdmin = () => {
    // navigate('/update-dept')
  };
  const handleInputOnClick = (e) => {
    e.stopPropagation();

    // console.log('buxxxxxxxxxxxxxxxxx')
  };

  return (
    <div>
      <div className="container-size">
        <div className="container-fluid">

          <div className="department-header row">
            <div className="col-sm-6 col-xl-4 ">
              <h1 className="department-header__h1" style={{marginBottom:"-10px"}}>{t('case_role')}</h1>
              <p className="department-header__p">{t('total')}: 4 {t('cases')}.</p>
            </div>
            <div className="department-header__buttons col-sm-5 col-md-8 col-xl-6 text-end d-flex flex-column justify-content-end align-items-end">
              <div className="gobal-btn-width">
                <button
                  className="department-header__buttons__addButton w-100  "
                  onClick={handleAddButton}>
                  {t('add_new_cases')} &nbsp;
                  <i class="fa-solid fa-plus" style={{ color: "#ffffff" }}></i>
                </button>
              </div>
              <div className="gobal-btn-width">
                <button
                  className="department-header__buttons__deleteButton w-100 "
                  onClick={() => setModalShow(true)}>
                  {t('delete_case_roles')} &nbsp;
                  <img
                    src={ic_trash}
                    className="department-header__buttons__icAdd"
                  />
                </button>
                <DeleteRolesModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </div>
          <div className="department-main-heading">
            <button
              className="department-main-heading__dept mb-3"
              onClick={() => setOpen(false)}
              style={{
                textTransform:"uppercase",
                borderBottom: !open ? "2px solid #00506A" : "none",
                color: !open ? "#00506A" : "#707070",
                font: !open
                  ? "normal normal bold 18px/22px Montserrat"
                  : "normal normal normal 18px/22px Montserrat",
              }}>
              {t('my_departments')}
            </button>
            <button
              className="department-main-heading__todos mb-3"
              onClick={() => setOpen(true)}
              style={{
                textTransform:"uppercase",
                borderBottom: open ? "2px solid #00506A" : "none",
                color: open ? "#00506A" : "#707070",
                font: open
                  ? "normal normal bold 18px/22px Montserrat"
                  : "normal normal normal 18px/22px Montserrat",
              }}>
              {t('all')}
              
            </button>

            <Accordion defaultActiveKey="0">
              {dptAccHeader.map((item) => (
                <Accordion.Item
                  eventKey={item}
                  className="department-accordion  mb-3">
                  <Accordion.Header className="">
                    <div className="row">
                      <div className="col-1 d-flex justify-content-start align-items-center">
                        <input
                          type="checkbox"
                          onClick={(e) => handleInputOnClick(e)}
                        />
                      </div>
                      <div className="col-3">
                        <p className="dept-accordion-header__heading">
                          {t('incharge')}
                        </p>
                        <p className="dept-accordion-header__data">
                          {t('name')}
                        </p>
                      </div>
                      {/* <div className='col-3'>
                    <p className='dept-accordion-header__heading'>
                      {item.mname}
                    </p>
                    <p className='dept-accordion-header__data'>
                      {item.inCharge}
                    </p>
                  </div> */}
                      {/* <div className='col-2'></div> */}
                      <div className="col-8 d-flex justify-content-end align-items-center">
                        <button
                          className="dept-acc-header__link__btn"
                          onClick={handleOnAdmin}>
                          {t('manage_case_role')}
                        </button>
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="roles-acc-body-one">
                      <div>
                        <p className="roles-acc-body-one__rolesP">
                          {t('reportes')}
                        </p>
                        <ul>
                          <li className="roles-acc-body-one__rolesLiP">
                            {deptAccBody.ulAlta}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="roles-acc-body-one__rolesP">
                        {t('case')}
                          
                        </p>
                        <ul>
                          <li className="roles-acc-body-one__rolesLiP">
                            {deptAccBody.caseUpdate}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="roles-acc-body-one__rolesP">
                         {t('members_of_the_case_users')}
                        </p>
                        <ul>
                          <li className="roles-acc-body-one__rolesLiP">
                            {deptAccBody.dCliOne}
                          </li>
                          <li className="roles-acc-body-one__rolesLiP">
                            {deptAccBody.dCliTwo}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesDeCasoMain;

