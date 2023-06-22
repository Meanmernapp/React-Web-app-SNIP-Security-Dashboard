import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ic_add from "../../../images/ic-add.svg";
import ic_trash from "../../../images/NavBar/ic-trash-outline.svg";
import ic_layer from "../../../images/ic-layer-group-solid.svg";
import { AppContext } from "../../../App";
import ic_edit_outline from "../../../assets/images/icons/blue-edit-outline.svg"
import ic_table from "../../../images/ic-table-solid.svg";
import ic_copy from "../../../images/ic-copy-solid.svg";
import { Modal } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import ic_map from "../../../images/ic-map.svg";
import DeleteRolesModal from "../RolesDeCaso/Modal/DeleteRolesModal";

const TemplateMain = () => {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();

  const [openMis, setOperMis] = useState(true);
  const { val1 } = useContext(AppContext);
  const [modalShow, setModalShow] = useState(false);

  const [values, setValues] = useState([
    {
      name: "ASESINATOS",
      noOfActivities: "4",
    },
    {
      name: "ASESINATOS",
      noOfActivities: "4",
    },
    {
      name: "ASESINATOS",
      noOfActivities: "4",
    },
    {
      name: "ASESINATOS",
      noOfActivities: "4",
    },
  ]);
  let navigate = useNavigate();

  const handleManual = () => {
    navigate("/switch");
  };

  const handleExtractPhone = () => {
    navigate("/casos-de-uso-create");
  };
  const handleReplicate = () => {
    navigate("/casos-de-uso-copy");
  };
  return (
    <div   >
      <div className="container-size">
        <div className="container-fluid">

        <div className="department-header row">
            <div className="col-sm-6 col-xl-4 ">
              <h1 className="department-header__h1">{t('use_cases')}</h1>
              <p className="department-header__p"> {t('total')}: 4 {t('use_cases')}.</p>
            </div>
            <div className="department-header__buttons col-sm-5 col-md-8 col-xl-6 text-end d-flex flex-column justify-content-end align-items-end">
              <div className="gobal-btn-width">
                <button
                  className="department-header__buttons__addButton w-100  "
                  onClick={handleExtractPhone}>
                 {t('add_use_case')} &nbsp;
                  <i class="fa-solid fa-plus" style={{ color: "#ffffff" }}></i>
                </button>
              </div>
              <div className="gobal-btn-width">
                <button
                  className="department-header__buttons__deleteButton w-100 "
                  onClick={() => setModalShow(true)}>
                   {t('delete_use_cases')} &nbsp;
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
          <div className="department-main-heading ">
            <button
              className="department-main-heading__dept"
              onClick={() => setOperMis(false)}
              style={{
                borderBottom: !openMis ? "2px solid #00506A" : "none",
                color: !openMis ? "#00506A" : "#707070",
                fontWeight: !openMis ? "bold " : "normal",
              }}
            >
             {t('my_use_case')}
            </button>
            <button
              className="department-main-heading__todos"
              onClick={() => setOperMis(true)}
              style={{
                borderBottom: openMis ? "2px solid #00506A" : "none",
                color: openMis ? "#00506A" : "#707070",
                fontWeight: openMis ? "bold " : "normal",
              }}
            >
              {t('all')}
            </button>
          </div>
          <div className="row">
            <div className="col-12 col-lg-8 vl-report pe-lg-4">
              <div className="row">
                <div style={{ display: openMis ? "block" : "none" }}>
                  <div className="CasosTable">
                    <table class="w-100">
                      <thead>
                          <th
                            scope="col-xs-auto"
                            className="first_head"
                          >
                            {t('name')}
                          </th>
                          <th scope="col-xs-auto" >
                         {t('created_by')}
                          </th>
                          <th scope="col-xs-auto" className="">
                           {t('number_of_activities')}
                          </th>
                          <th scope="col-xs-auto" className="">
                            OPC
                          </th>
                      </thead>
                      <tbody style={{ marginTop: "1em" }}>
                        {values.map((element, index) => (
                          <tr>
                            <td className="first">
                              {element.name}
                            </td>
                            <td>
                              {element.noOfActivities}
                            </td>
                            <td >
                          --
                          </td>
                            <td>
                              <input
                                type="checkbox"
                                className="text-start"
                                value={index}
                                // onChange={(e) => handleChange(index, e)}
                                id={element.index}
                              ></input>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div style={{ display: !openMis ? "block" : "none" }}>
                  <div className="CasosTable">
                    <table class="w-100">
                      <thead>
                          <th className="first_head"
                          >
                                                      {t('name')}

                          </th>
                          <th scope="col-xs-auto" >
                          {t('created_by')}
                          </th>
                          <th scope="col-xs-auto" >
                            OPC
                          </th>
                      </thead>
                      <tbody style={{ marginTop: "1em" }}>
                        {values.map((element, index) => (
                          <tr
                          >
                            <td style={{ textAlign: "left",paddingLeft: "1rem"}}>
                              {element.name}
                            </td>
                            <td>
                              {element.noOfActivities}
                            </td>

                            <td>
                              <input
                                type="checkbox"
                                className="text-start"
                                value={index}
                                // onChange={(e) => handleChange(index, e)}
                                id={element.index}
                              ></input>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 ps-lg-5">
              <div>
                <h3 className="roles-main-heading__extract ">
                 {t('details_of_selected_use_cases')}
                </h3>
                <p className="extract-phone-p">{t('total')} {t('selected')} 2</p>
                <div className="row">
                  <div className="switch-example w-100" style={{borderRadius:"12px"}}>
                      <div className="mt-2 p-3 mb-3 pb-0 d-flex justify-content-start align-items-center">
                        <img
                          src={ic_layer}
                          style={{width:"30px",height:"30px"}}
                          className="ms-3"
                        />
                        <div className="switch-example__div ps-5">
                          <p className="switch-example__div__fp">{t('name')}</p>
                          <p className="switch-example__div__sp" style={{fontSize:"14px"}}>{t('murders')}</p>
                        </div>
                      </div>

                      <div className="btn-row ">
                        <button
                          className="btn-row__btns"
                          onClick={handleReplicate}
                        >
                          <img src={ic_copy} className="btn-row__svg" />
                          {t('replicate_case')}
                        </button>
                        <div class="vr"></div>
                        <button
                          className="btn-row__btns "
                        // onClick={handleActualBtn}
                        >
                          <img src={ic_table} className="btn-row__svg" />
                          {t('apply_case')}
                        </button>
                      </div>
                  </div>
                  <div className="switch-example w-100" style={{borderRadius:"12px"}}>
                      <div className="mt-2 p-3 mb-3 pb-0 d-flex justify-content-start align-items-center">
                        <img
                          src={ic_layer}
                          style={{width:"30px",height:"30px"}}
                          className="ms-3"
                        />
                        <div className="switch-example__div ps-5">
                          <p className="switch-example__div__fp">{t('name')}</p>
                          <p className="switch-example__div__sp" style={{fontSize:"14px"}}>{t('murders')}</p>
                        </div>
                      </div>

                      <div className="btn-row ">
                        <button
                          className="btn-row__btns"
                          onClick={handleReplicate}
                        >
                          <img src={ic_copy} className="btn-row__svg" />
                          {t('replicate_case')}
                        </button>
                        <div class="vr"></div>
                        <button
                          className="btn-row__btns "
                        // onClick={handleActualBtn}
                        >
                          <img src={ic_table} className="btn-row__svg" />
                          {t('apply_case')}

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

export default TemplateMain;

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
            ELIMINAR CASOS DE USO
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="role-model-body">
          <h4 className="role-model-body__heading">
            Casos de uso seleccionados:
          </h4>
          <p className="role-model-body__p"> Total 4 </p>
          <ul className="role-model-body__ul">
            <li className="role-model-body__ul__li">
              <span> Asesinatos</span>
            </li>
            <li className="role-model-body__ul__li">
              <span> Asesinatos </span>
            </li>
            <li className="role-model-body__ul__li">
              <span> Asesinatos </span>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide} className="role-model-close-btn">
            CANCELAR
          </button>
          <button onClick={props.onHide} className="role-model-confirm-btn">
            CONTINUAR
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
