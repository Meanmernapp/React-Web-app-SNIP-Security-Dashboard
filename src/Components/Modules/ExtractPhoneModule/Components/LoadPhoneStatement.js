import React, { useContext } from "react";
import { AppContext } from "../../../../App";
import word_file from "../../../../images/ic-file-word-solid.svg";
import edit_white from "../../../../images/ic-edit-outline-white.svg";
import cloud from "../../../../images/cloud.svg";
import ic_pdf from "../../../../images/pdf-img.svg";
import ic_trash_outline from "../../../../images/ic-trash-outline.png";
import ic_excel from "../../../../images/ic-excel.svg";
import { useNavigate } from "react-router-dom";
import ic_left_arrow from "../../../../images/ic-left-arrow.svg";

const LoadPhoneStatement = () => {
  const { val1 } = useContext(AppContext);
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/data-in-main-all");
  };
  const handleBackButton = () => {
    navigate("/data-in-main-all");
  };
  return (
    <div   >
      <div className="container-size">
        <div className=" container-fluid">
          <div className="row">
            <h1 className="Actual_h1 col-12 pb-3">
              <button
                onClick={handleClick}
                className="department-create-header__button"
              >
                <img src={ic_left_arrow} className="back-arrow" />
              </button>
              CARGAR EXTRACTO TELEFÓNICO
            </h1>
          </div>
          <div className="report-create report-update row justify-content-center">
            <div className="report-create__left vl-update-report col-sm-12 col-lg-5 col-xl-5">
              <div className="create-report-mainDiv w-100 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h3 className="updateReport_mainHeading">
                  CARGAR UN EXTRACTO TELEFÓNICO
                </h3>

                <div className="report-infor-detail-outer">
                  <div className="report-info__detail w-100 col-sm-12 col-md-12 col-lg-10 col-xl-10">
                    <div className="input-group-report">
                      <label className="input-group-report__label">
                        NÚMERO
                      </label>
                      <input className="input-group-report__text user-info__name"></input>
                    </div>
                    <div className="input-group-report">
                      <label className="input-group-report__label">
                        IDENTIFICADOR / ALIAS
                      </label>
                      <input className="input-group-report__text user-info__name"></input>
                    </div>
                    <div className="input-group-report form-group-report">
                      <label className="input-group-report__label">CASOS</label>
                      {/* <input className='input-group-report__text user-info__name'></input> */}
                      <select class="input-group-report__text user-info__name form-control classic ">
                        <option style={{ display: "none" }}></option>
                        <option>BIL-2091 | Encargado: Luis Cornejo</option>
                        <option>BIL-2091 | Encargado: Luis Cornejo</option>
                        <option>BIL-2091 | Encargado: Luis Cornejo</option>
                        <option>BIL-2091 | Encargado: Luis Cornejo</option>
                      </select>
                    </div>
                  </div>
                  <h3 className="loadPhone_mainHeading">SUBIR ARCHIVO</h3>
                  <div className="report-info__detail w-100 col-sm-12 col-md-12 col-lg-10 col-xl-10">
                    <div className="images-model-body__addImage-upload d-flex justify-content-center align-items-center py-3">
                      <img
                        src={cloud}
                        className="images-model-body__cloudImage w-100"
                      />
                      <p className="images-model-body__p px-2">
                        ARRASTRA Ó SULETA TU ARCHIVO
                        <br />
                        <span> 20 MB MAX. </span>
                      </p>
                    </div>
                    <h3 className="loadPhone_mainHeading ps-0 my-4">ARCHIVO</h3>
                    <div className="grupos-card p-2">
                      <div className="row">
                        <div className="col-2">
                          <img src={ic_pdf} className="loadPhone__images" />
                        </div>
                        <div className="p-2 col-8">
                          <p className="loadPhone__fp">
                            extracto telefónico_telcel_12232321.pdf
                          </p>
                          <p className="loadPhone__sp">TAMAÑO: 18 MB.</p>
                        </div>
                        <div className="col-2">
                          <img
                            src={ic_trash_outline}
                            className="loadPhone__image"
                          />
                        </div>
                      </div>
                    </div>

                    <span className="archivo-listo">
                      **ARCHIVO LISTO PARA CARGAR
                    </span>

                    <div className="row mt-5">
                      <button className="department-create--footer__buttonCancel role-model-close-btn col-6">
                        DESCARTAR
                      </button>
                      <button className="department-create--footer__buttonOk col-6">
                        CARGAR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-10 col-lg-7 col-xl-7">
              <div className="report-update-right-col">
                <div className="create-report-mainDiv col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <h3 className="updateReport_mainHeading text-end">
                    EXTRACTO TELEFÓNICO A SUBIR
                  </h3>
                  <p className="loadPhone-right__p">
                    Total extracto(s) telefónico(s) a subir 4
                  </p>
                </div>
              </div>
              <div className="extor-phoneTable-outer">
                <div className="extorPhoneTable  d-flex h-100 flex-column flex-grow-1 justify-content-between ps-5">
                  <table class="w-100">
                    <thead>
                      <th className="first_head">TIPO</th>
                      <th>EXTRACTO TELEFÓNICO</th>
                      <th>NÚMERO</th>
                      <th className="last">REMOVER</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="first">
                          <img src={ic_excel} className="loadPhone__images" />
                        </td>
                        <td>
                          <p>sabana_telcel_12232321.xlsx</p>
                          <span>TAMAÑO: 18 MB.</span>
                        </td>
                        <td>
                          <p>4422232321</p>
                          <span>TELCEL</span>
                        </td>
                        <td className="last">
                          <img
                            src={ic_trash_outline}
                            className="loadPhone__images"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="row" style={{ marginTop: "68vh" }}>
                    <button className="department-create--footer__buttonCancel role-model-close-btn col-6">
                      CANCELAR PROCESO
                    </button>
                    <button className="department-create--footer__buttonOk col-6">
                      SUBIR 4 EXTRACTO TELEFÓNICO(S)
                    </button>
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

export default LoadPhoneStatement;
