import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../App";
import ic_add from "../../../images/ic-add.svg";
import Modal from "react-bootstrap/Modal";

const SwitchMain = () => {
  const { val1 } = useContext(AppContext);
  const [modalShow, setModalShow] = useState(false);
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/switch-searches");
  };
  return (
    <div   >
      <div className="container-size">
        <div className="container-fluid">
          <div className="roles-header row">
            <h1 className="roles-header__h1 col-sm-8 col-md-8  col-8">
              SWITCH
            </h1>
          </div>
          <div className="create-report-mainDiv col-sm-12 col-md-10 col-lg-10 col-xl-4 mx-auto ">
            <h3 className="settings_mainHeading mb-4">DATOS DEL OBJETIVO</h3>
            <p className="settings_subHeading">BUSCAR POR</p>
            <div className="report-info__detail col-12">
              <div className="input-group-report">
                <label className="input-group-report__label">
                  NÚMERO TELEFÓNICO
                </label>
                <input className="input-group-report__text user-info__name"></input>
              </div>
              <div>
                <h4 className="switch-horizontalLine"> &nbsp; Y/O &nbsp;</h4>
              </div>
              <div className="input-group-report">
                <label className="input-group-report__label">IMEI</label>
                <input className="input-group-report__text user-info__name"></input>
              </div>
            </div>
            <div className="create-report-btns">
              <button
                className="report-model-confirm-btn  col-10"
                onClick={handleClick}>
                CONTINUAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchMain;
