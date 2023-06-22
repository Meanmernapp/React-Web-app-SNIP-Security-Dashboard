import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import ic_check from "../../../images/ic-check.svg";
import pencil_solid from "../../../images/pencil-solid.svg";
import cloud from "../../../images/cloud.svg";
import upload_img from "../../../images/upload.png";
import TablePagination from "@mui/material/TablePagination";
import { AppContext } from "../../../App";
import ic_edit_outline from "../../../assets/images/icons/blue-edit-outline.svg";
import DeleteImagesModal from "./Modal/DeleteImagesModal";
import ic_add from "../../../assets/images/icons/white-trash.svg";
import cancelIcon from "../../../assets/images/icons/cancel.svg";
import { useTranslation } from "react-i18next";
import EditImageModal from "./Modal/editImageModal";

const ImagesMain = () => {
  let navigate = useNavigate();
  const { t } = useTranslation();

  const [open, setOpen] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [eliminateModalShow, setEliminateModalShow] = useState(false);
  const [addImageShow, setAddImageShow] = useState(false);
  const [editInfoShow, setEditInfoShow] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentValues, setCurrentValues] = useState();
  const { val1 } = useContext(AppContext);

  let fetchDetail = `22 Abril 
  11:21`;
  console.log(ic_check);
  console.log(fetchDetail);
  const imagesHeading = {
    name: "NOMBRE",
    takenBy: "TOMADA POR",
    module: "MODULO",
    fetch: "FECHA",
    Opc: "OPC",
    edit: "",
  };

  const imagesValues = [
    {
      nameImage: ``,
      nameText: "log_1.jpg",
      takenName: "Luis Cornejo",
      moduleName: "LOG",
      fetchDetail: fetchDetail,
      OPCtype: "checkbox",
      editType: `<i class='fa-light fa-pencil'></i>`,
    },
    {
      nameImage: <i class="fa-solid fa-eye"></i>,
      nameText: "log_1.jpg",
      takenName: "Luis Cornejo",
      moduleName: "LOG",
      fetchDetail: fetchDetail,
      OPCtype: "checkbox",
      editType: <i class="fa-light fa-pencil"></i>,
    },
    {
      nameImage: <i class="fa-solid fa-eye"></i>,
      nameText: "log_1.jpg",
      takenName: "Luis Cornejo",
      moduleName: "LOG",
      fetchDetail: fetchDetail,
      OPCtype: "checkbox",
      editType: <i class="fa-light fa-pencil"></i>,
    },
    {
      nameImage: <i class="fa-solid fa-eye"></i>,
      nameText: "log_1.jpg",
      takenName: "Luis Cornejo",
      moduleName: "LOG",
      fetchDetail: fetchDetail,
      OPCtype: "checkbox",
      editType: <i class="fa-light fa-pencil"></i>,
    },
    {
      nameImage: <i class="fa-solid fa-eye"></i>,
      nameText: "log_1.jpg",
      takenName: "Luis Cornejo",
      moduleName: "LOG",
      fetchDetail: fetchDetail,
      OPCtype: "checkbox",
      editType: <i class="fa-light fa-pencil"></i>,
    },
    {
      nameImage: <i class="fa-solid fa-eye"></i>,
      nameText: "log_1.jpg",
      takenName: "Luis Cornejo",
      moduleName: "LOG",
      fetchDetail: fetchDetail,
      OPCtype: "checkbox",
      editType: <i class="fa-light fa-pencil"></i>,
    },
  ];
  const handleAddButton = () => {
    navigate("/createDepartment");
  };
  {
    imagesValues.map((item) => {
      console.log(item.nameImage);
      console.log(item.nameText);
    });
  }

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
    setCurrentValues(imagesValues.splice(indexOfFirstValue, rowsPerPage));

    console.log(currentValues);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
    // const indexOfLastValue = currentPage * postsPerPage
    // const indexOfFirstValue = indexOfLastValue - postsPerPage
    setCurrentValues(imagesValues.slice(0, event.target.value));
    // console.log(indexOfFirstValue + ' ' + indexOfLastValue)
  };
  const totalPages = Math.ceil(imagesValues.length / rowsPerPage);

  return (
    <div>
      <div className="container-size">
        <div className="container-fluid">
          <div className="images-header row">
            <div className="col-sm-5  float-sm-right float-md-right float-lg-right float-xl-right  col-md-4 col-lg-4 col-xl-4">
              <h1 className="images-header__h1 ">{t('images')}</h1>
            </div>
            <div className="images-header__buttons col-sm-6 col-md-8 col-lg-8 col-xl-8 float-end">
              <div className="row">
                <div className=" ms-auto col-sm-10 col-md-6 col-lg-4 col-xl-4">
                  <button
                    className="images-header__buttons__downloadButton w-100"
                    onClick={() => setModalShow(true)}
                  >
                    {t('download_images')}
                    <i
                      class="fa-solid fa-plus ms-2"
                      style={{ color: "#ffffff" }}
                    ></i>
                  </button>
                  <InformationModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
                <div className=" ms-auto col-sm-10 col-md-6 col-lg-4 col-xl-4">
                  <button
                    className="images-header__buttons__deleteButton w-100"
                    onClick={() => setEliminateModalShow(true)}
                  >
                  {t('delete_images')}
                    <img
                      src={ic_add}
                      className="department-header__buttons__icAdd ms-2"
                    />
                  </button>
                  <DeleteImagesModal
                    show={eliminateModalShow}
                    onHide={() => setEliminateModalShow(false)}
                  />
                </div>
                <div className="ms-auto col-sm-10  col-md-6 col-lg-4 col-xl-4 ">
                  <button
                    className="images-header__buttons__addButton w-100"
                    onClick={() => setAddImageShow(true)}
                  >
                    {t('add_image')}
                    <i
                      class="fa-solid fa-plus ms-2"
                      style={{ color: "#ffffff" }}
                    ></i>
                  </button>
                  <AddImageModal
                    show={addImageShow}
                    onHide={() => setAddImageShow(false)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="department-main-heading ">
            <button
              className="department-main-heading__dept"
              onClick={() => setOpen(false)}
              style={{
                borderBottom: !open ? "2px solid #00506A" : "none",
                color: !open ? "#00506A" : "#707070",
                fontWeight: !open ? "bold" : "normal",
              }}
            >
             {t('my_images')}
            </button>
            <button
              className="department-main-heading__todos"
              onClick={() => setOpen(true)}
              style={{
                borderBottom: open ? "2px solid #00506A" : "none",
                color: open ? "#00506A" : "#707070",
                fontWeight: open ? "bold" : "normal",
              }}
            >
              {t('all')}
            </button>
          </div>

          <div className="images-main-table">
            <div className="row ">
              <div className=" vl-update-report col-md-12 col-lg-6 col-xl-6">
                <h3 className="images-header__h1">{t('images_without_cas')}</h3>
                <div className="ImagesTable">
                  <table class="w-100">
                    <thead>
                      <th >{t('name')}</th>
                      <th>{t('taken_by')}</th>
                      <th>{t('module')}</th>
                      <th>{t('date')}</th>
                      <th>OPC</th>
                      <th scope="col">&nbsp;</th>
                    </thead>
                    <tbody>
                      {imagesValues.map((item) => (
                        <tr>
                          <th className="first">
                            <button className="bg-white btn p-0">
                              <i class="fa-solid fa-eye"></i>
                            </button>
                            {item.nameText}
                          </th>
                          <td>{item.takenName}</td>
                          <td>{item.moduleName}</td>
                          <td>{item.fetchDetail}</td>
                          <td>
                            <input type={item.OPCtype} />
                          </td>

                          <td>
                            <button
                              className="department-create-header__button"
                              onClick={() => setEditInfoShow(true)}
                            >
                              <img
                                src={ic_edit_outline}
                                className="loadPhone__image"
                                // style={{ color: '#00506A', fontSize: '1.5em' }}
                              />
                            </button>
                            <EditImageModal
                              show={editInfoShow}
                              onHide={() => setEditInfoShow(false)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="pages">
                  <TablePagination
                    component="div"
                    rowsPerPageOptions={[5, 10, 20, 50, 100, 200, 500]}
                    count={imagesValues.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage={<span>{t('images')} {t('per_page')}</span>}
                    labelDisplayedRows={({ page }) => {
                      return `Página: ${page}  de ${totalPages}`;
                    }}
                  />
                </div>
              </div>
              <div className=" col-md-12 col-lg-6 col-xl-6">
                <h3 className="images-header__h1 right-image-text">
              {t('images_with_case')}
                </h3>
                <div className="ImagesTable">
                  <table class="w-100">
                    <thead>
                    <th >{t('name')}</th>
                      <th>{t('taken_by')}</th>
                      <th>{t('module')}</th>
                      <th>{t('date')}</th>
                      <th>OPC</th>
                      <th scope="col">&nbsp;</th>
                    </thead>
                    <tbody>
                      {imagesValues.map((item) => (
                        <tr>
                          <th className="first">
                            <button className="bg-white btn p-0">
                              <i class="fa-solid fa-eye"></i>
                            </button>
                            {item.nameText}
                          </th>
                          <td>{item.takenName}</td>
                          <td>{item.moduleName}</td>
                          <td>{item.fetchDetail}</td>

                          <td>
                            <input type={item.OPCtype} />
                          </td>
                          <td>
                            <button
                              className="department-create-header__button"
                              onClick={() => setEditInfoShow(true)}
                            >
                              <img
                                src={ic_edit_outline}
                                className="loadPhone__image "
                              />
                            </button>
                          </td>
                          <EditImageModal
                            show={editInfoShow}
                            onHide={() => setEditInfoShow(false)}
                          />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesMain;


function InformationModal(props) {
  const { t } = useTranslation();

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
         <button onClick={props.onHide} className="modal-close-btn">
          <img src={cancelIcon} alt="cancel icon" />
        </button>
        <h3 className="deparment-follow-modal__header text-center">{t('information')}</h3>
        <Modal.Body className="images-model-body mx-4">
            <div className="d-flex flex-column justify-content-center">
              <img src={ic_check} className="images-model-body__img mx-auto" />
              <h4 className="images-model-body__heading mt-2">
                {t('images_downloaded_successfully')}
              </h4>
            </div>
        </Modal.Body>
        <div className="btn-div pt-3">
          <button className="button-sec btn-cancel" onClick={props.onHide}>{t("cancel")}</button>
          <button className="button-sec btn-confirm">{t("confirm")}</button>
        </div>
      </Modal>
    </div>
  );
}

function AddImageModal(props) {
  const { t } = useTranslation();

  const [img, setImg] = useState();
  const [preview, setPreview] = useState();
  //file size calculate function
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  //select file
  const onImageChange = async (e) => {
    const file = e.target.files[0];
    setImg(file)
    const reader = new FileReader();
    console.log(file);
    reader.onload = function(e) {
      let binaryData = e.target.result;
      let base64String = window.btoa(binaryData);
      setPreview(base64String);
    };

    let image = reader.readAsBinaryString(file);
    console.log(reader);

    return image;
  };

  

  return (
    <div>
      <Modal
        dialogClassName="modal-90w deparment-follow-modal"
        {...props}
        // size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}
      >
        <button onClick={props.onHide} className="modal-close-btn">
          <img src={cancelIcon} alt="cancel icon" />
        </button>
        <h3 className="deparment-follow-modal__header text-center">
        {t('image_upload')}
        </h3>
        <Modal.Body className="images-model-body">
          <div className="report-info__detail col-12">
            <div className="input-group-report">
              <label className="input-group-report__label">{t('name')}</label>
              <input className="input-group-report__text user-info__name"></input>
            </div>
            <div className="input-group-report form-group-report">
              <label className="input-group-report__label">{t('case')}</label>
              {/* <input className='input-group-report__text user-  info__name'></input> */}
              <select class="input-group-report__text user-info__name form-control classic ">
                <option style={{ display: "none" }}></option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
              </select>
              <i class="fa fa-caret-down" style={{ marginTop: "-1.7em" }}></i>
            </div>
          </div>

          <p className="images-model-body__addImage-p report-info__detail pt-0 mt-0">
            {" "}
            {t('images')}{" "}
          </p>
          <div style={{ width: "80%", margin: "auto" }}>
            <div className="updata_img_m">
              <label htmlFor="file-input" className="dottedborderbox">
                <img src={cloud} alt="submitupload" className="submitupload" />
                <input
                  type="file"
                  id="file-input"
                  accept="image/png,image/jpg,image/jpeg"
                  onChange={onImageChange}
                />
                <p>
                  {/* {t("drag_drop")} <br /> {t("your_image")} <br /> {t("size_of_image")} */}
                  ARRASTRA <br /> Ó <br /> SULETA TU ARCHIVO <br />
                  <b> 20 MB MAX. </b>
                </p>
              </label>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-2">
          <img src={img ? `data:image/jpeg;base64,${preview}` : upload_img} style={{ width: "80%", margin: "auto",height:"160px" }}  />
          </div>

        </Modal.Body>
        <div className="btn-div pt-3">
          <button className="button-sec btn-cancel" onClick={props.onHide}>
            {t("cancel")}
          </button>
          <button className="button-sec btn-confirm">{t("confirm")}</button>
        </div>
      </Modal>
    </div>
  );
}

