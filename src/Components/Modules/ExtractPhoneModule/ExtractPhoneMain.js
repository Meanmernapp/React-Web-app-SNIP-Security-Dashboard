import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../App";
import ic_add from "../../../images/ic-add.svg";
import ic_trash from "../../../images/trash-alt-regular.svg";
import ic_layer from "../../../images/ic-layer-group-solid.svg";
import ic_download from "../../../images/ic-download-file.svg";
import ic_pdf from "../../../images/pdf-img.svg";
import edit_white from "../../../images/ic-edit-outline-white.svg";
import Modal from "react-bootstrap/Modal";
import ic_table from "../../../images/ic-table-solid.svg";
import ic_map from "../../../images/ic-map.svg";
import ic_search from "../../../images/NavBar/ic-search.svg";
import DeleteTelephonic from "./Modal/deleteTelephonic";
import ic_edit_outline from "../../../assets/images/icons/blue-edit-outline.svg"
import { useTranslation } from 'react-i18next';

const ExtractPhoneMain = () => {
  const { val1 } = useContext(AppContext);
  const [open, setOpen] = useState(true);
  const [openA, setOpenA] = useState(false);
  const [openMis, setOperMis] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalSee, setModalSee] = useState(false);
  const [groupModal, setGroupModal] = useState(true);

  const [telephonicShow, setTelephonicShow] = useState(false);
  const { t } = useTranslation();



  let navigate = useNavigate();

  const handleManual = () => {
    navigate("/switch");
  };
  const handleActualBtn = () => {
    navigate("/data-in-load-update");
  };
  const [values, setValues] = useState([
    {
      id: "1",
      csvName: "4433343343_telcel.csv",

      phone: "4433343343",
      identifier: "POE-123",
      group: "LOP-#44",
      opc: "OPC",
    },
    {
      id: "1",
      csvName: "4433343343_telcel.csv",

      phone: "4433343343",
      identifier: "POE-123",
      group: "LOP-#44",
      opc: "OPC",
    },
    {
      id: "1",
      csvName: "4433343343_telcel.csv",

      phone: "4433343343",
      identifier: "POE-123",
      group: "LOP-#44",
      opc: "OPC",
    },
    {
      id: "1",
      csvName: "4433343343_telcel.csv",

      phone: "4433343343",
      identifier: "POE-123",
      group: "LOP-#44",
      opc: "OPC",
    },
  ]);
  const [groupValues, setGroupValues] = useState([
    {
      id: "12321-SAD-23D-211",
      groupValue: "ICL-029",

      phone: "4",
      caseValue: "PLK-#44",

      opc: "OPC",
    },
  ]);
  const handleExtractPhone = () => {
    navigate("/data-in-load-sabanas");
  };

  const handleClick = () => { };
  const removeValue = () => {
    setTelephonicShow(true);
  };
  const handleBackButton = () => { };
  return (
    <div   >
      <div className="container-size">
        <div className="container-fluid">
          <div className="Actual_h1 row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="images-header-row">
                <h1 className="images-header__h1">{t('telephone_extract')}
                  <span className="user-heading-span ms-2">{t('total')} 10</span>
                </h1>
              </div>
            </div>
            <div className="images-header__buttons mx-0 col-sm-12 col-md-6 col-lg-6 text-end">
              <button
                onClick={handleManual}
                className="department-header__buttons__downloadButton"
              >
                {t('hand_search')}
                <i
                  className="fa-solid fa-magnifying-glass ms-2"
                  style={{ color: " #ffffff" }}
                ></i>
                {/* <img
                      src={ic_search}
                      className="images-header__buttons__icAdd"
                    /> */}
              </button>

              <button
                className="department-header__buttons__addButton ms-2"
                onClick={handleExtractPhone}
              >
                {t('upload_phone_statment')}
                <i
                  class="fa-solid fa-plus ms-2"
                  style={{ color: " #ffffff" }}
                ></i>
              </button>
            </div>
          </div>
          <div className="roles-main-heading row mx-0 px-0">
            <button
              className="roles-main-heading__roles col-6"
              onClick={() => {
                setOpen(false);
                setOpenA(true);
                setGroupModal(false);
              }}
              style={{
                color: open === false && openA === true && "#63B3CE",
                borderBottom:
                  open == false && openA === true && "2px solid #63B3CE",
                fontWeight:
                  open == false && openA === true && "bold",

              }}
            >
              {t('telephone_extract')}
            </button>
            <button
              className="roles-main-heading__permission col-6"
              onClick={() => {
                setOpen(true);
                setOpenA(false);
                setGroupModal(true);
              }}
              style={{
                color: open === true && openA === false && "#63B3CE",
                borderBottom:
                  open === true && openA == false && "2px solid #63B3CE",
                fontWeight:
                  open === true && openA == false && "bold",
              }}
            >
              {t('delete_group')}
            </button>
          </div>
          <div style={{ display: !groupModal ? "block" : "none" }}>
            <div className="row mx-0 px-0">
              <div className="col-12 col-lg-8 vl-report ps-0 pe-4">
                <div className="row mx-0 px-0">
                  <div className="department-main-heading col-4 ps-0">
                    <div className="row mx-0 px-0">
                      <button
                        className="department-main-heading__exdept text-start col-7 px-0"
                        onClick={() => setOperMis(false)}
                        style={{
                          borderBottom: !openMis ? "2px solid #00506A" : "none",
                          color: !openMis ? "#00506A" : "#707070",
                          fontWeight: !openMis ? "bold " : "normal",
                        }}
                      >
                        {t('my_extracts')} <br /> {t('telephone')}
                      </button>
                      <button
                        className="department-main-heading__extodos text-start text-start col-5 "
                        onClick={() => setOperMis(true)}
                        style={{
                          borderBottom: openMis ? "2px solid #00506A" : "none",
                          color: openMis ? "#00506A" : "#707070",
                          fontWeight: openMis ? "bold " : "normal",
                        }}
                      >
                        <br />
                        {t('all')}
                      </button>
                    </div>
                  </div>
                  <div className="department-main-heading col-8 d-flex text-end flex-wrap justify-content-end">
                    <button
                      className="extract_button_add "
                      onClick={() => setModalSee(true)}
                    >
                      {t('create_group')}
                      <i
                  class="fa-solid fa-plus ms-2"
                  style={{ color: " #ffffff" }}
                ></i>
                    </button>
                    <AddImageModal
                      show={modalShow}
                      onHide={() => setModalSee(false)}
                    />
                    <button
                      className="extract_button_delete ms-2"
                      onClick={removeValue}
                    >
                      {t('delete_phone_statment')}
                      <img src={ic_trash} className="extractButton"/>
                    </button>
                  </div>
                  <div style={{ display: openMis ? "block" : "none" }} className="ps-0">
                    <div className="ImagesTable">
                      <table class="w-100">
                        <thead>
                          <th className="first_head">{t('telephone_extract')}</th>
                          <th>{t('telephone')}</th>
                          <th>{t('identify')} / {t('alias')}</th>
                          <th>{t('cluster')}</th>
                          <th>OPC</th>
                        </thead>
                        <tbody style={{ marginTop: "1em" }}>
                          {values.map((element, index) => (
                            <tr>
                              <td className="first">{element.csvName}</td>
                              <td>{element.phone}</td>
                              <td>{element.identifier}</td>
                              <td>
                                <img src={ic_layer} className="extractButton" />
                                {element.group}
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
                  <div style={{ display: !openMis ? "block" : "none" }} className="ps-0">
                    <div className="ImagesTable">
                      <table class="table table-borderless">
                        <thead>
                          <th className="first_head">{t('telephone_extract')}</th>
                          <th>{t('telephone')}</th>
                          <th>{t('identify')} / {t('alias')}</th>
                          <th>{t('cluster')}</th>
                          <th>OPC</th>
                        </thead>
                        <tbody style={{ marginTop: "1em" }}>
                          {values.map((element, index) => (
                            <tr>
                              <td className="first">{element.csvName}</td>
                              <td>{element.phone}</td>
                              <td>{element.identifier}</td>
                              <td>
                                <img src={ic_layer} className="extractButton" />

                                {element.group}
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
              <div className="col-12 col-lg-4 ">
                <div>
                  <h3 className="roles-main-heading__extract mt-2">
                    {t('detail_of_selected_telephone_statments')}
                  </h3>
                  <p className="extract-phone-p">{t('total')} {t('selected')} 4</p>
                  <div className="row mx-0 px-0">
                    <div className="switch-example position-relative">
                      <div className=" float-end mt-2">
                        <button
                          className=" col-12 department-create-header__button"
                          onClick={() => setModalShow(true)}

                        >
                          <img
                            src={ic_download}
                            className="switch-example__icAdd-download "
                          />
                        </button>
                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </div>
                      <div>
                        <div className="row m-0 pt-3">
                          <img
                            src={ic_pdf}
                            className="switch-example__icAdd-pdf col-sm-3 col-md-4 col-lg-4 col-xl-4"
                          />
                          <div className="switch-example__div col-8 col-sm-9 col-md-9 col-lg-8 col-xl-8">
                            <p className="switch-example__div__fp">{t('sheet')}</p>
                            <p className="switch-example__div__sp">
                              sabana_telcel_12232321.xlsx
                            </p>
                            <p className="switch-example__div__tp">
                              {t('size')}: 18 MB.
                            </p>
                          </div>
                        </div>

                        <div className="row mx-0 px-0">
                          <div className="col-12 text-end">
                            <button
                              className="switch-example__buttonOk col-sm-10 col-md-8 col-lg-8 col-xl-8 col-xxl-7"
                              onClick={handleActualBtn}
                            >
                              {t('update')}
                              <img
                                src={edit_white}
                                className="switch-example__buttonOk__btnimg"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="row card-table">
                          <div className="col-6 card-table__fc">
                            {t('identify')} / {t('alias')}
                          </div>
                          <div className="col-6  card-table__sc">UIS-343</div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">
                            {t('owner')}
                          </div>
                          <div className="col-6 card-table__sc">
                            Luis Cornejo
                          </div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">{t('address')}</div>
                          <div className="col-6  card-table__sc">
                            Casa blanca 303
                          </div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">{t('supplier')}</div>
                          <div className="col-6  card-table__sc">Telcel</div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">IMEI</div>
                          <div className="col-6 card-table__sc">
                            234234234242
                          </div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">IMSI</div>
                          <div className="col-6 card-table__sc">
                            23424242423423
                          </div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">
                            {t('groups_to_which_it_belongs')}
                          </div>
                          <div className="col-6 card-table__sc">ASDL-#43</div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">{t('case')}</div>
                          <div className="col-6 text-end card-table__sc">
                            <button
                              className="department-create-header__button__switchUnderlined card-table__btnC"
                              onClick={() => setModalSee(true)}
                            >
                              {t('no_case')} / {t('add_case')}
                            </button>
                            <AddImageModal
                              show={modalSee}
                              onHide={() => setModalSee(false)}
                            />
                          </div>
                        </div>

                        <div className="btn-row ">
                          <button className="btn-row__btns ">
                            <img src={ic_map} className="btn-row__svg" />
                            {t('view_map')} &nbsp;
                          </button>
                          <div class="vr w-10"></div>
                          <button
                            className="btn-row__btns"
                          // onClick={handleActualBtn}
                          >
                            <img src={ic_table} className="btn-row__svg" />
                            {t('view_records')}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="switch-example">
                      <div className=" float-end mt-2">
                        <button
                          className=" col-12 department-create-header__button"
                          onClick={() => setModalShow(true)}
                        >
                          <img
                            src={ic_download}
                            className="switch-example__icAdd-download "
                          />
                        </button>
                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </div>
                      <div>
                        <div className="row m-0 pt-3">
                          <img
                            src={ic_pdf}
                            className="switch-example__icAdd-pdf col-sm-3 col-md-4 col-lg-4 col-xl-4"
                          />
                          <div className="switch-example__div col-8 col-sm-9 col-md-9 col-lg-8 col-xl-8">
                            <p className="switch-example__div__fp">{t('sheet')}</p>
                            <p className="switch-example__div__sp">
                              sabana_telcel_12232321.xlsx
                            </p>
                            <p className="switch-example__div__tp">
                              {" "}
                              {t('size')}: 18 MB.
                            </p>
                          </div>
                        </div>

                        <div className="row mx-0 px-0">
                          <div className="col-12 text-end">
                            <button
                              className="switch-example__buttonOk col-sm-10 col-md-8 col-lg-8 col-xl-8 col-xxl-7"
                              onClick={handleActualBtn}
                            >
                              {t('update')}
                              <img
                                src={edit_white}
                                className="switch-example__buttonOk__btnimg"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="row card-table">
                          <div className="col-6 card-table__fc">
                            {t('identify')} / {t('alias')}
                          </div>
                          <div className="col-6  card-table__sc">UIS-343</div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">
                            {t('owner')}
                          </div>
                          <div className="col-6 card-table__sc">
                            Luis Cornejo
                          </div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">{t('address')}</div>
                          <div className="col-6  card-table__sc">
                            Casa blanca 303
                          </div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">{t('supplier')}</div>
                          <div className="col-6  card-table__sc">Telcel</div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">IMEI</div>
                          <div className="col-6 card-table__sc">
                            234234234242
                          </div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">IMSI</div>
                          <div className="col-6 card-table__sc">
                            23424242423423
                          </div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">
                            {t('groups_to_which_it_belongs')}
                          </div>
                          <div className="col-6 card-table__sc">ASDL-#43</div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">CASO</div>
                          <div className="col-6 text-end card-table__sc">
                            <button
                              className="department-create-header__button__switchUnderlined card-table__btnC"
                              onClick={() => setModalSee(true)}
                            >
                              {t('no_case')} / {t('add_case')}
                            </button>
                            <AddImageModal
                              show={modalSee}
                              onHide={() => setModalSee(false)}
                            />
                          </div>
                        </div>

                        <div className="btn-row ">
                          <button className="btn-row__btns ">
                            <img src={ic_map} className="btn-row__svg" />
                            {t('view_map')} &nbsp;
                          </button>
                          <div class="vr w-10"></div>
                          <button
                            className="btn-row__btns"
                          // onClick={handleActualBtn}
                          >
                            <img src={ic_table} className="btn-row__svg" />
                            {t('view_records')}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: groupModal ? "block" : "none" }} className="ps-2">
            <div className="row ">
              <div className="col-12 col-lg-8 vl-report pe-4">
                <div className="row ">
                  <div className="department-main-heading col-4">
                    <div className="row">
                      <button
                        className="department-main-heading__exdept text-start col-5 px-0"
                        onClick={() => setOperMis(false)}
                        style={{
                          borderBottom: !openMis ? "2px solid #00506A" : "none",
                          color: !openMis ? "#00506A" : "#707070",
                          fontWeight: !openMis ? "bold " : "normal",
                        }}
                      >
                        {t('my_groups')}
                      </button>
                      <button
                        className="department-main-heading__extodos text-start text-start col-4 "
                        onClick={() => setOperMis(true)}
                        style={{
                          borderBottom: openMis ? "2px solid #00506A" : "none",
                          color: openMis ? "#00506A" : "#707070",
                          fontWeight: openMis ? "bold " : "normal",
                        }}
                      >
                        <br />
                        {t('all')}
                      </button>
                    </div>
                  </div>
                  <div className="department-main-heading col-8 ">
                    <div className="row">
                      <div className="col-sm-8 col-lg-8 py-auto text-end w-100">
                        <button
                          className="extract_button_delete px-0"
                          onClick={removeValue}
                          style={{ width: "223px" }}
                        >
                          {t('delete_group')}(S)
                          <img src={ic_trash} className="extractButton" />
                          {/* <i class='fa-solid fa-trash-can homeAddButton'></i> */}
                        </button>

                        <DeleteTelephonic
                          show={telephonicShow}
                          onHide={() => setTelephonicShow(false)}
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ display: openMis ? "block" : "none" }} className="ps-0">
                    <div className="ImagesTable">
                      <table class="w-100">
                        <thead>
                          <th className="first_head">ID</th>
                          <th>{t('cluster')}</th>
                          <th>{t('telephone_extract')}</th>
                          <th>{t('case')}</th>
                          <th>OPC</th>
                        </thead>
                        <tbody style={{ marginTop: "1em" }}>
                          {groupValues.map((element, index) => (
                            <tr>
                              <td className="first">{element.id}</td>
                              <td>{element.groupValue}</td>
                              <td>{element.phone}</td>
                              <td>
                                <img src={ic_layer} className="extractButton" />
                                {element.caseValue}
                              </td>
                              <td>
                                <input
                                  type="checkbox"
                                  className="text-start"

                                // onChange={(e) => handleChange(index, e)}
                                ></input>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div style={{ display: !openMis ? "block" : "none" }} className="ps-0">
                    <div className="CasosTable">
                      <table class="w-100">
                        <thead>
                          <th className="first_head">ID</th>
                          <th>{t('cluster')}</th>
                          <th>{t('telephone_extract')}</th>
                          <th>{t('case')}</th>
                          <th>OPC</th>
                        </thead>
                        <tbody style={{ marginTop: "1em" }}>
                          {groupValues.map((element, index) => (
                            <tr>
                              <td className="first">{element.id}</td>
                              <td>{element.groupValue}</td>
                              <td>{element.phone}</td>
                              <td>
                                <img src={ic_layer} className="extractButton" />
                                {element.caseValue}
                              </td>
                              <td>
                                <input
                                  type="checkbox"
                                  className="text-start"
                                // onChange={(e) => handleChange(index, e)}
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
              <div className="col-12 col-lg-4 ">
                <div>
                  <h3 className="roles-main-heading__extract ">
                    {t('group_detail')}<br></br> {t('selected')}
                  </h3>
                  <p className="extract-phone-p">{t('total')} {t('selected')} 4</p>
                  <div className="row mx-0 px-0">
                    <div className="switch-example position-relative me-0">
                      <div className="">
                        <div className="row float-end mr-2 ">
                          <button
                            className=" col-12 department-create-header__button"
                            onClick={() => setModalShow(true)}
                            style={{
                              position: "absolute",
                              top: "13px",
                              right: "-6px"
                            }}
                          >
                            <img
                              src={ic_edit_outline}
                              className="switch-example__icAdd-download  "
                            />
                          </button>
                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                        </div>
                        <div className="row mt-2 pt-3">
                          <img
                            src={ic_layer}
                            className="switch-example__icAdd-pdf col-sm-3 col-md-4 col-lg-4 col-xl-4"
                          />
                          <div className="switch-example__div col-8 col-sm-9 col-md-9 col-lg-8 col-xl-8">
                            <p className="switch-example__div__fp">{t('cluster')}</p>
                            <p className="switch-example__div__sp">
                              Caso María Juarez
                            </p>
                            <p className="switch-example__div__ep">
                              {" "}
                              {t('telephone_statment')} 4.
                            </p>
                          </div>
                        </div>

                        <div className="row mx-0 px-0">
                          <div className="col-6 switch-example__div__rowp">
                            ID
                          </div>
                          <div className="col-6 switch-example__div__rowp text-end d-flex justify-content-end">
                            UIS-343
                          </div>
                        </div>
                        <div className="row switch-examle-outer" >
                          <div className="col-6 switch-example__div__rowp">
                            {t('cluster')}
                          </div>
                          <div className="col-6 switch-example__div__rowp text-end d-flex justify-content-end">
                            Luis Cornejo
                          </div>
                        </div>
                        <div className="btn-row ">
                          <button className="btn-row__btns ">
                            <img src={ic_map} className="btn-row__svg" />
                            {t('view_map')} &nbsp;
                          </button>
                          <div class="vr"></div>
                          <button
                            className="btn-row__btns"
                          // onClick={handleActualBtn}
                          >
                            <img src={ic_table} className="btn-row__svg" />
                            {t('view_records')}
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
      </div>
    </div>
  );
};

export default ExtractPhoneMain;
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
            className="images-model-top"
          >
            DESCARGAR EXTRACTO TELEFÓNICO
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="role-model-body">
          <h4 className="role-model-body__settingheading">
            ¿Para descargar la extracto telefónico 4422232493_telcer.csv por
            favor confirma la acción?
          </h4>
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
function AddImageModal(props) {
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
            className="images-model-top "
          >
            CREAR GRUPO
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="images-model-body">
          <form>
            <div className="input-group-report ">
              <label className="input-group-report__label">
                ALIAS DEL GRUPO
              </label>
              <input className="input-group-report__text user-info__name"></input>
            </div>
            <div className="input-group-report form-group-report">
              <label className="input-group-report__label">
                SELECCIONAR CASO
              </label>
              {/* <input className='input-group-report__text user-info__name'></input> */}
              <select class="input-group-report__text user-info__name form-control classic ">
                <option style={{ display: "none" }}></option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
              </select>
              {/* <i class='fa fa-caret-down' style={{ marginTop: '-1.3em' }}></i> */}
            </div>
          </form>
          <ul className="role-model-body__ul">
            <li className="role-model-body__ul__li">
              <span> 4422232493_telcer.csv </span> <p> | C1 </p>
            </li>
            <li className="role-model-body__ul__li">
              <span> 4422232493_telcer.csv </span> <p> | C1 </p>
            </li>
            <li className="role-model-body__ul__li">
              <span> 4422232493_telcer.csv </span> <p>| C1 </p>
            </li>
            <li className="role-model-body__ul__li">
              <span> 4422232493_telcer.csv </span> <p> | C1 </p>
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
