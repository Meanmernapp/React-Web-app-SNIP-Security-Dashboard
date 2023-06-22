import React, { useState, useContext } from "react";
import ic_add from "../../../images/ic-add.svg";
import jpg_image from "../../../images/jpg.png";
import png_image from "../../../images/png.png";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { AppContext } from "../../../App";
import ic_trash from "../../../images/NavBar/ic-trash-outline.svg";

import { Link } from "react-router-dom";
import DeleteCasesModal from "./Modal/DeleteCasesModal";
import { useTranslation } from 'react-i18next';

const Case = () => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [openk, setOpenk] = useState(false);
  const { val1 } = useContext(AppContext);
  const { t } = useTranslation();

  const dptAccHeader = [
    {
      murder: "IBL-0921",
      mname: "Luis Cornejo",
      name: "CASO",
      inCharge: "CREADO POR",
      //   adminDept: 'ADMINISTRAR DEPARTAMENTO',
    },
    {
      murder: "IBL-0921",
      mname: "Luis Cornejo",
      name: "CASO",
      inCharge: "CREADO POR",
    },
  ];
  const deptAccBody = {
    bodyHeading: "Usuarios en el departamento",
    total: "TOTAL 42.",
    name: "Luis Enrique Cornejo Arreola",
  };
  const handleAddButton = () => {
    navigate("/create-case");
  };
  const handleOnAdmin = () => {
    navigate("/create-case");
  };
  const handleInputOnClick = (e) => {
    e.stopPropagation();
  };

  const [accordian, setAccordian] = useState("");
  const handleOpenAccordian = (index) => {
    if (openk === false) {
      setOpenk(true);
    } else {
      setOpenk(false);
    }
    setAccordian(index);
  };

  return (
    <div   >
      <div className="container-size">
        <div className="container-fluid">
          <div className="department-header row">
            <div className="col-sm-6 col-xl-6 ">
              <h1 className="department-header__h1">{t('case')}S</h1>
              <p className="department-header__p">{t('total')}: 4 {t('case')}.</p>
            </div>
            <div className="department-header__buttons col-sm-5 col-md-8 col-xl-6 text-end d-flex flex-column justify-content-end align-items-end">
              <div className="gobal-btn-width">
                <button
                  className="department-header__buttons__addButton w-100  "
                  onClick={handleAddButton}
                >
                  {t('add_new_cases')} &nbsp;
                  <i class="fa-solid fa-plus" style={{ color: "#ffffff" }}></i>
                </button>
              </div>
              <div className="gobal-btn-width">
                <button
                  className="department-header__buttons__deleteButton w-100 "
                  onClick={() => setModalShow(true)}
                >{t('delete_cases')} &nbsp;
                  <img
                    src={ic_trash}
                    className="department-header__buttons__icAdd"
                  />
                </button>
                <DeleteCasesModal
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
                borderBottom: !open ? "2px solid #00506A" : "none",
                color: !open ? "#00506A" : "#707070",
                font: !open
                  ? "normal normal bold 18px/22px Montserrat"
                  : "normal normal normal 18px/22px Montserrat",
              }}
            >
              {t('my_cases')}
            </button>
            <button
              className="department-main-heading__todos mb-3"
              onClick={() => setOpen(true)}
              style={{
                borderBottom: open ? "2px solid #00506A" : "none",
                color: open ? "#00506A" : "#707070",
                font: open
                  ? "normal normal bold 18px/22px Montserrat"
                  : "normal normal normal 18px/22px Montserrat",
              }}
            >
              {t('other_cases')}
            </button>

            <Accordion defaultActiveKey="0" className="w-100">
              {dptAccHeader.map((item, index) => (
                <Accordion.Item
                  eventKey={index}
                  className="department-accordion mb-4"
                  onClick={() => handleOpenAccordian(index)}
                >
                  <Accordion.Header>
                    <div className="row">
                      <div className="col-1">
                        <input
                          onClick={(e) => handleInputOnClick(e)}
                          type="checkbox"
                        />
                      </div>
                      <div className="col-3">
                        <p className="dept-accordion-header__heading ">
                          {item.murder}
                        </p>
                        <p className="dept-accordion-header__data">
                          {t('case')}
                        </p>
                      </div>
                      <div className="col-3">
                        <p className="dept-accordion-header__heading">
                          {item.mname}
                        </p>
                        <p className="dept-accordion-header__data">
                        {t("created_by")}
                        </p>
                      </div>
                      <div className="col-2">
                        <button
                          className="dept-acc-header__link__btn "
                          onClick={handleOnAdmin}
                        >
                          {t('update_case')}
                        </button>
                      </div>
                      <div className="col-2">
                        <button
                          className="dept-acc-header__link__btn"
                          onClick={handleOnAdmin}
                        >
                        {t('follow')}
                        </button>
                      </div>
                      <div className="col-1">
                        {openk === true && index === accordian ? (
                          <i class="fa-solid fa-sort-up department_arrow_up"></i>
                        ) : (
                          <i class="fa-solid fa-sort-down department_arrow_down "></i>
                        )}
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="row">
                      <div className="col-4">
                        <h3 className="case-acc__heading">
                         {t('research_data')}
                        </h3>
                        <p className="case-acc__subHeading">
                          {t('research_folder')}
                        </p>
                        <p className="case-acc__p">Caso 2302 Sección A</p>
                      </div>
                      <div className="col-4">
                        <h3 className="case-acc__heading d-flex justify-content-center">
                          {t('target_data')}
                        </h3>
                        <p className="case-acc__subHeading d-flex justify-content-center">
                          {t('name')}
                        </p>
                        <p className="case-acc__p d-flex justify-content-center">
                          Juan Hernánder
                        </p>
                        <p className="case-acc__subHeading d-flex justify-content-center">
                          {t('birthdate')}
                        </p>
                        <p className="case-acc__p d-flex justify-content-center">
                          Marzo 24 1965
                        </p>
                        <p className="case-acc__subHeading d-flex justify-content-center">
                          {t('home')}
                        </p>
                        <p className="case-acc__p d-flex justify-content-center">
                          Rincón del marques 404,Col el Marques.
                        </p>
                      </div>
                      <div className="col-4 ">
                        <h3 className="case-acc__heading d-flex justify-content-end ">
                          {t('event_details')}
                        </h3>
                        <p className="case-acc__subHeading d-flex justify-content-end">
                         {t('date')}
                        </p>
                        <p className="case-acc__p d-flex justify-content-end">
                          Abril 08 2022
                        </p>
                        <p className="case-acc__subHeading d-flex justify-content-end">
                          {t('place')}
                        </p>
                        <p className="case-acc__p d-flex justify-content-end">
                          Plaza de las Américas, Querétaro, Qro.
                        </p>
                      </div>
                    </div>
                    <div className=" case-acc-row row">
                      <div className="col-4">
                        <h3 className="case-acc__heading">
                          {t('research_data')}
                        </h3>
                        <p className="case-acc__invst-p">
                          <span>Encargado | </span>Luis Cornejo
                        </p>
                        <p className="case-acc__invst-p">
                          <span>Investigador de campo | </span>Luis Cornejo
                        </p>
                        <p className="case-acc__invst-p">
                          <span>Investigador de zona | </span>| Luis Cornejo
                        </p>
                      </div>
                      <div className="col-4">
                        <h3 className="case-acc__heading d-flex justify-content-center">
                      {t('specific_data_of_the_case')}
                        </h3>
                        <p className="case-acc__subHeading d-flex justify-content-center">
                          {t('status')}
                        </p>
                        <p className="case-acc__active d-flex justify-content-center">
                          {t('active')} &nbsp; <span class="dot"></span>{" "}
                        </p>
                        <p className="case-acc__subHeading d-flex justify-content-center">
                          {t('description')}
                        </p>
                        <p className="case-acc__p d-flex justify-content-center">
                          Sin descripción.
                        </p>
                        <p className="case-acc__subHeading d-flex justify-content-center">
                          {t('note')}
                        </p>
                        <p className="case-acc__p d-flex justify-content-center ">
                          Sin notas.
                        </p>
                      </div>
                    </div>
                    <div className="case-acc-row row">
                      <div className="col-4">
                        <h3 className="case-acc__heading">{t('evidences')}</h3>
                        <p className="case-acc__subHeading">
                          {t('images')} / {t('documents')}
                        </p>
                        <div className="row">
                          <div className="col-3">
                            <img src={jpg_image} className="case-acc__img" />
                            <p className="case-acc__img-p">caso_1.jpg</p>
                            <p className="case-acc__img-p-two">
                              TAMAÑO: 18 MB.
                            </p>
                          </div>
                          <div className="col-3">
                            <img src={png_image} className="case-acc__img" />
                            <p className="case-acc__img-p">caso_1.jpg</p>
                            <p className="case-acc__img-p-two">
                              TAMAÑO: 18 MB.
                            </p>
                          </div>
                        </div>
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

export default Case;
