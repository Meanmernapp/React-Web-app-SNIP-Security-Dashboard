import React, { useState, useContext } from "react";
import spain from "../../../images/spain.png";
import united_states from "../../../images/united-states.png";
import france from "../../../images/france.png";
import night_mode from "../../../images/night-mode.png";
import brightness from "../../../images/brightness.png";
import { Button, Modal } from "react-bootstrap";
import { AppContext } from "../../../App";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import cancelIcon from "../../../assets/images/icons/cancel.svg";

const SettingsMain = () => {
  const [modalShow, setModalShow] = useState(false);
  const { t } = useTranslation();
  const { val1 } = useContext(AppContext);
  const lCode = Cookies.get("i18next") || "en";

  const [language, setLanguage] = useState(lCode);
  return (
    <div>
      <div className="container-size">
        <div className="container-fluid">
          <div className="department-header">
            <div>
              <h1 className="department-header__h1">{t("settings")}</h1>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center setting-container">
            <div className="row justify-content-center">
              <div className="col-sm-8 col-md-6 col-lg-6 col-xl-6 px-0">
                <p className="settings_mainHeading mb-4">{t("system")}</p>

                <div className="settings_mainDiv">
                  <div class="container px-5">
                    <p className="settings-radio__mainp"> {t("languages")}</p>
                    <form className="">
                      <div class="form-check">
                        <label class="form-check-label" for="radio1">
                          <input
                            type="radio"
                            class="form-check-input"
                            id="radio1"
                            name="optradio"
                            value="sp"
                            checked={language == "sp"}
                            onChange={(e) => {
                              console.log("this is language", e.target.value);
                              setLanguage("sp");
                              i18next.changeLanguage("sp");
                            }}
                            style={{ marginTop: "1em" }}
                          />
                          <div className="settings-radio ">
                            <img src={spain} className="settings-radio__img " />
                            <p className="settings-radio__p">
                              {" "}
                              {t("spanish")}{" "}
                            </p>
                          </div>
                        </label>
                      </div>
                      <div class="form-check">
                        <label class="form-check-label" for="radio2">
                          <input
                            type="radio"
                            class="form-check-input"
                            id="radio2"
                            name="optradio"
                            value="en"
                            checked={language == "en"}
                            onChange={(e) => {
                              console.log("this is language", e.target.value);
                              setLanguage("en");
                              i18next.changeLanguage("en");
                            }}
                            style={{ marginTop: "1em" }}
                          />
                          <div className="settings-radio ">
                            <img
                              src={united_states}
                              className="settings-radio__img "
                            />
                            <p className="settings-radio__p">
                              {" "}
                              {t("english")}{" "}
                            </p>
                          </div>
                        </label>
                      </div>
                      <div class="form-check">
                        <label class="form-check-label" for="radio3">
                          <input
                            type="radio"
                            class="form-check-input"
                            id="radio2"
                            name="optradio"
                            value="fr"
                            checked={language == "fr"}
                            onChange={(e) => {
                              console.log("this is language", e.target.value);
                              setLanguage("fr");
                              i18next.changeLanguage("fr");
                            }}
                            style={{ marginTop: "1em" }}
                          />
                          <div className="settings-radio ">
                            <img
                              src={france}
                              className="settings-radio__img "
                            />
                            <p className="settings-radio__p"> {t("franch")} </p>
                          </div>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 col-md-6 col-lg-6 col-xl-6 px-0">
                <p className="settings_mainHeading mb-4">{t("screen")}</p>
                <div className=" settings_mainDiv">
                  <div class="container px-5">
                    <p className="settings-radio__mainp">{t("theme")}</p>
                    <form className="">
                      <div class="form-check">
                        <label class="form-check-label" for="radio1">
                          <input
                            type="radio"
                            class="form-check-input"
                            id="radio1"
                            name="optradio"
                            value="option1"
                            checked
                            style={{ marginTop: "1em" }}
                          />
                          <div className="settings-radio ">
                            <img
                              src={brightness}
                              className="settings-radio__img "
                            />
                            <p className="settings-radio__p"> {t("light")} </p>
                          </div>
                        </label>
                      </div>
                      <div class="form-check">
                        <label class="form-check-label" for="radio2">
                          <input
                            type="radio"
                            class="form-check-input"
                            id="radio2"
                            name="optradio"
                            value="option2"
                            style={{ marginTop: "1em" }}
                          />
                          <div className="settings-radio ">
                            <img
                              src={night_mode}
                              className="settings-radio__img "
                            />
                            <p className="settings-radio__p"> {t("dark")}</p>
                          </div>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="setting-btn__btn"
                  onClick={() => setModalShow(true)}
                >
                  {t("restore_default_settings")}
                  <i class="fa-solid fa-gear setting-btn__icon "></i>
                </button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsMain;

function MyVerticallyCenteredModal(props) {
  const { t } = useTranslation();
  return (
    <Modal
      dialogClassName="setting-confirmation-modal"
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <button onClick={props.onHide} className="modal-close-btn">
        <img src={cancelIcon} alt="cancel icon" />
      </button>
      <span className="main-modal-heading mt-3"> {t("restore_settings")}</span>
      <div className="unlink-modal-body">
        <span className="modal-desc-text mt-4 mb-5">
          {" "}
          {t("to_apply_the_changes_you_need_to_confirm_the_action")}
        </span>
        <div className="btn-div pt-3">
          <button className="button-sec btn-cancel" onClick={props.onHide}>
            {t("cancel")}
          </button>
          <button className="button-sec btn-confirm">{t("confirm")}</button>
        </div>
      </div>
    </Modal>
  );
}
