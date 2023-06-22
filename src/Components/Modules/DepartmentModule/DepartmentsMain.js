import React, { useState, useContext, useEffect } from "react";
import ic_add from "../../../images/ic-add.svg";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../App";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { getByIdData } from "../../../features/departmentSlice";
import ResponseOk from "../../UserDashBoard/pages/ResponseOk";
import ResponseError from "../../UserDashBoard/pages/ResponseError";
import trash from '../../../assets/images/icons/white-trash.svg';
import { useTranslation } from 'react-i18next';
import DeleteDepartmentModal from "./Modal/DeleteDepartmentModal";
import { GetAllDepartments, GetAllDepartmentsByCompanyId, GetDepartmentByDeparmentID } from "../../../reduxToolkit/Department/DepartmentApi";
import { toast } from 'react-toastify';

const DepartmentsMain = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { t } = useTranslation();
  const { getAllDepartments, getAllDepartmentsByCompanyId } = useSelector((state) => state?.departments);
  const CompanyID = useSelector((state) => state.company.CompanyID);

  const [open, setOpen] = useState(true);
  const [checkedValues, setCheckedValues] = useState([]);
  const [checkedItem, setCheckedItem] = useState([]);

  const [checkedValuesAll, setCheckedValuesAll] = useState([]);
  const [checkedItemAll, setCheckedItemAll] = useState([]);

  const [selectedUsers, setSelectedUsers] = useState([]);


  const { loginUsersData } = useSelector((state) => state.login);
  const [modalShow, setModalShow] = useState(false);
  const [responsePositive, setResponsePositive] = useState(false);
  const [responseNegative, setResponseNegative] = useState(false);
  const { val1 } = useContext(AppContext);
  const { allDeptValue } = useSelector((state) => state.dept);
  const { getIdData } = useSelector((state) => state.dept);


  const deptAccBody = {
    bodyHeading: "Usuarios en el departamento",
    total: "TOTAL 42.",
    name: "Luis Enrique Cornejo Arreola",
  };

  const handleAddButton = () => {
    navigate("/create-department");
  };

  const handleInputOnClick = (e, item) => {
    e.stopPropagation();
    console.log(e.target.value);
    console.log(item);
    const { value, checked } = e.target;

    if (checked) {
      setCheckedValues([...checkedValues, value]);
      setCheckedItem([...checkedItem, item]);
    } else {
      const index = checkedValues.indexOf(value);
      setCheckedValues([
        ...checkedValues.slice(0, index),
        ...checkedValues.slice(index + 1),
      ]);
      setCheckedItem([
        ...checkedItem.slice(0, index),
        ...checkedItem.slice(index + 1),
      ]);
    }
  };

 

  const handleDelete = (item, e) => {
    e.stopPropagation()
    const updatedUsers = [...selectedUsers];
    
    if (e.target.checked) {
      updatedUsers.push(item);
    } else {
      const index = updatedUsers.findIndex((el) => el?.id === item?.id);
      if (index !== -1) {
        updatedUsers.splice(index, 1);
      }
    }
  
    setSelectedUsers(updatedUsers);
  };

  const handleDeleteData = () => {
    if (!selectedUsers.length) {
      toast.info("Please Select a Department for Deletion")
      return null
    }
    setModalShow(true);
  };



  const handleMoreInfo = async ({ item }) => {
    localStorage.setItem('departmentID',item?.id)
    dispatch(GetDepartmentByDeparmentID({departmentID:item?.id}))
  };


  useEffect(() => {
    dispatch(GetAllDepartments())
    dispatch(GetAllDepartmentsByCompanyId({ companyID: CompanyID }))
  }, [])
  return (
    <div calssName="departmint-container"   >
      <div className="container-size">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 float-sm-right float-md-right float-lg-right float-xl-right  col-md-6 col-lg-6 col-xl-6">
              <h1 className="main-heading">{t('departments')}</h1>
              <p className="departmint-container__subtext">
                {t('total')}: {getAllDepartments && getAllDepartments?.length} {t('departments')} {loginUsersData}
              </p>
            </div>
            <div className="department-header__buttons col-sm-6 col-md-6 col-lg-6 col-xl-4 ms-auto">
              <div className="col-xl-12 text-end">
                <button
                  className="department-header__buttons__addButton"
                  onClick={handleAddButton}>
                  {t('add_new_departments')} &nbsp;
                  <i
                      class="fa-solid fa-plus ms-1"
                      style={{ color: "#ffffff" }}
                    ></i>
                </button>
              </div>
              <div className="col-xl-12 text-end">
                <button
                  className="department-header__buttons__deleteButton mt-2"
                  onClick={handleDeleteData}>
                  {t('delete_departments')} &nbsp;
                  <img
                    src={trash}
                    className="department-header__buttons__icAdd"
                  />
                </button>
                <DeleteDepartmentModal
                  data={selectedUsers}
                  responsepositive={() => setResponsePositive(true)}
                  responsenegative={() => setResponseNegative(true)}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <ResponseOk
                  to="/departments"
                  show={responsePositive}
                  onHide={() => setResponsePositive(false)}
                />
                <ResponseError
                  to="/departments"
                  show={responseNegative}
                  onHide={() => setResponseNegative(false)}
                />
              </div>
            </div>
          </div>
          <div className="department-main-heading">
            <button
              className="department-main-heading__btn mb-4"
              onClick={() => setOpen(false)}
              style={{
                borderBottom: !open ? "2px solid #00506A" : "none",
                color: !open ? "#00506A" : "#707070",
                fontWeight: !open ? "bold " : "normal",
              }}>
              {t('my_departments')}
            </button>
            <button
              className="department-main-heading__btn mb-4"
              onClick={() => setOpen(true)}
              style={{
                borderBottom: open ? "2px solid #00506A" : "none",
                color: open ? "#00506A" : "#707070",
                fontWeight: open ? "bold " : "normal",
              }}>
              {t('all')}
            </button>
            {
              open ? <Accordion defaultActiveKey="0">
                {Array.isArray(getAllDepartments) && getAllDepartments.length > 0 &&
                  getAllDepartments?.map((item, index) => (
                    <Accordion.Item
                      eventKey={item}
                      className="department-accordion mb-3">
                      <Accordion.Header className="">
                        <div className="row">
                          <div className="col-1 m-auto">
                            <input
                              onClick={(e) => handleDelete(item,e)}
                              type="checkbox"
                              value={item.id}
                              className="dept-accordion-header__checkbox"
                            />
                          </div>
                          <div className="col-3 ">
                            <p className="dept-accordion-header__heading ">
                              {item?.name}
                            </p>
                            <p className="dept-accordion-header__data">{t('name')}</p>
                          </div>
                          <div className="col-3">
                            <p className="dept-accordion-header__heading">
                              Luis Cornejo
                            </p>
                            <p className="dept-accordion-header__data">
                              {t('user_incharge')}
                            </p>
                          </div>
                          <div className="col-5 d-flex justify-content-end align-items-center">
                            <Link
                              to={`/update-dept/${item.id}`}
                              className="dept-accordion-header__link__btn"
                              onClick={() => handleMoreInfo({ item })}>
                              {t('manage_department')}
                            </Link>
                          </div>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="my-3">
                          <h3 className="dept-acc-body-one__heading">
                            {t('users_in_the_department')}
                          </h3>
                          <p className="dept-acc-body-one__p">
                            {deptAccBody.total}
                          </p>
                        </div>
                        <div className="dept-acc-body-two">
                          <ul className="dept-acc-body-two__ul">
                            <li>{deptAccBody.name}</li>
                            <li>{deptAccBody.name}</li>
                            <li>{deptAccBody.name}</li>
                            <li>{deptAccBody.name}</li>
                            <li>{deptAccBody.name}</li>
                          </ul>
                          <ul className="dept-acc-body-two__ul">
                            <li>{deptAccBody.name}</li>
                            <li>{deptAccBody.name}</li>
                            <li>{deptAccBody.name}</li>
                            <li>{deptAccBody.name}</li>
                            <li>{deptAccBody.name}</li>
                          </ul>
                          <ul className="dept-acc-body-two__ul">
                            <li>{deptAccBody.name}</li>
                            <li>{deptAccBody.name}</li>
                            <li>{deptAccBody.name}</li>
                            <li>{deptAccBody.name}</li>
                            <li>{deptAccBody.name}</li>
                          </ul>
                          <ul className="dept-acc-body-two__ul">
                            <li>{deptAccBody.name}</li>
                            <li>{deptAccBody.name}</li>
                            <li>{deptAccBody.name}</li>
                            <li>{deptAccBody.name}</li>
                            <li>{deptAccBody.name}</li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
              </Accordion> :
                <Accordion defaultActiveKey="0">
                  {Array.isArray(getAllDepartmentsByCompanyId) && getAllDepartmentsByCompanyId.length > 0 &&
                    getAllDepartmentsByCompanyId?.map((item, index) => (
                      <Accordion.Item
                        eventKey={item}
                        className="department-accordion mb-3">
                        <Accordion.Header className="">
                          <div className="row">
                            <div className="col-1 m-auto">
                              <input
                                onClick={(e) => handleDelete(item,e)}
                                type="checkbox"
                                value={item.id}
                                className="dept-accordion-header__checkbox"
                              />
                            </div>
                            <div className="col-3 ">
                              <p className="dept-accordion-header__heading ">
                                {item?.name}
                              </p>
                              <p className="dept-accordion-header__data">{t('name')}</p>
                            </div>
                            <div className="col-3">
                              <p className="dept-accordion-header__heading">
                                Luis Cornejo
                              </p>
                              <p className="dept-accordion-header__data">
                                {t('user_incharge')}
                              </p>
                            </div>
                            <div className="col-5 d-flex justify-content-end align-items-center">
                              <Link
                                to={`/update-dept/${item.id}`}
                                className="dept-accordion-header__link__btn"
                                onClick={() => handleMoreInfo({ item })}>
                                {t('manage_department')}
                              </Link>
                            </div>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="my-3">
                            <h3 className="dept-acc-body-one__heading">
                              {t('users_in_the_department')}
                            </h3>
                            <p className="dept-acc-body-one__p">
                              {deptAccBody.total}
                            </p>
                          </div>
                          <div className="dept-acc-body-two">
                            <ul className="dept-acc-body-two__ul">
                              <li>{deptAccBody.name}</li>
                              <li>{deptAccBody.name}</li>
                              <li>{deptAccBody.name}</li>
                              <li>{deptAccBody.name}</li>
                              <li>{deptAccBody.name}</li>
                            </ul>
                            <ul className="dept-acc-body-two__ul">
                              <li>{deptAccBody.name}</li>
                              <li>{deptAccBody.name}</li>
                              <li>{deptAccBody.name}</li>
                              <li>{deptAccBody.name}</li>
                              <li>{deptAccBody.name}</li>
                            </ul>
                            <ul className="dept-acc-body-two__ul">
                              <li>{deptAccBody.name}</li>
                              <li>{deptAccBody.name}</li>
                              <li>{deptAccBody.name}</li>
                              <li>{deptAccBody.name}</li>
                              <li>{deptAccBody.name}</li>
                            </ul>
                            <ul className="dept-acc-body-two__ul">
                              <li>{deptAccBody.name}</li>
                              <li>{deptAccBody.name}</li>
                              <li>{deptAccBody.name}</li>
                              <li>{deptAccBody.name}</li>
                              <li>{deptAccBody.name}</li>
                            </ul>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                </Accordion>
            }

          </div>
        </div>
      </div>
    </div>
  );
};


export default DepartmentsMain;
