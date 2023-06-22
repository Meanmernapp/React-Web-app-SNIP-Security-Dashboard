import React, { useEffect, useState, useContext, useRef, useMemo } from "react";
import { Image } from "react-bootstrap";
import img4 from "../../../images/NavBar/ic-search.svg";
import ic_list from "../../../images/ic-list-detail.svg";
import ic_menu from "../../../images/ic-menu.svg";
import ic_key from "../../../images/ic-key.svg";
import ic_trash_outline from "../../../images/ic-trash-outline.svg";
import ic_edit_outline from "../../../images/ic-edit-outline.svg";
import ic_trash_black from "../../../images/ic-trash-outline-black.svg";
import { Card, Button, Modal } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import TablePagination from "@mui/material/TablePagination";
import { AppContext } from "../../../App";
import ResponseOk from "../../UserDashBoard/pages/ResponseOk";
import axios from "axios";
import { allDepartments } from "../../../features/departmentSlice";
import { allStatuses } from "../../../features/statusSlice";
import ic_add from "../../../images/ic-add.svg";
import { allRoles } from "../../../features/roleSlice";
import {
  getByIdData,
  getByUserIdData,
  getPassResetId,
} from "../../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { allUsers } from "../../../features/userSlice";
import { allCompanyGender } from "../../../features/genderSlice";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useTranslation } from 'react-i18next';
import DeleteUserModal from "./Modal/DeleteUserModal";
import { AllDepartmentsByCompanyID, AllGenderByCompanyID, AllRoleByCompanyID, AllStatus, FindAllUsers } from "../../../reduxToolkit/Users/UsersApi";
import { toast } from 'react-toastify';
import { Box } from "@mui/material";


const UserMain = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const formRef = useRef();
  const { t } = useTranslation();
  const AllUsers = useSelector(state => state.users.AllUsers);

  const [openOptions, setOpenOptions] = useState(-1);
  const [modalShow, setModalShow] = useState(false);
  const [table, setTable] = useState(true);
  const { val1 } = useContext(AppContext);
  
  
  const [query, setQuery] = useState("");
  const [searchParam] = useState(["email", "name"]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleDelete = (item, e) => {
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


  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) > -1;
      });
    });
  }

  const handleClick = () => {
    navigate("/add-user");
  };

  const handleMoreInfo = async ({ item }) => {
    localStorage.setItem("UserIdToUpdate",item.id)
     const requestUserCompanyData = await axios.get(
      `http://38.65.139.14:8081/corporate-citras-v1/user-company-service/get-by-user-id/${item.id}`
    );
    console.log("user company service", requestUserCompanyData);
  };

  const handleListButton = () => {
    setTable(false);
  };

  const optionsOnClick = (id) => {
    setOpenOptions(openOptions === id ? -1 : id);
  };

  const handleMoreDetails = async ({ item }) => {
    dispatch(getPassResetId(item.id));
    console.log("save");
    navigate("/passwordChange");
  };

  const handleDetailButton = () => {
    setTable(true);
  };


  const handleDeleteData = () => {
    if (!selectedUsers.length) {
      toast.info("Please Select a User for Deletion")
      return null
    }
    setModalShow(true);
  };

  const handleSearchClick = () => {
  };

  const Demo = styled("div")(({ theme }) => ({
    // backgroundColor: theme.palette.background.paper,
  }));


  //pagination
  const [orderBy, setOrderBy] = useState();
  const [sortBy, setSortBy] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // function to set page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };



  useEffect(() => {
    dispatch(FindAllUsers());
  }, []);

  let img_update = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dAlfxEHeXNtUb2cbBqAIAvNJKqLsLsTGdw&usqp=CAU"

  return (
    <div>
      <div className="container-size">
        <div className="container-fluid">
          <div className="row Actual_h1">
            <div className="col-sm-12 float-sm-right float-md-right float-lg-right float-xl-right  col-md-4 col-lg-4 col-xl-4">
              <div className="images-header-row ">
                <h1 className="main-heading">{t('users')}
                  <span className="user-heading-span ms-2">TOTAL {AllUsers?.data?.length}</span>
                </h1>
              </div>
            </div>

            <div className="col-sm-12 col-md-8">
              <div className="" style={{ display: "flex", justifyContent: "end" }}>
                <div className="me-3" >
                  <div className="name_nav">
                    <button
                      className="home_list_button"
                      style={{ backgroundColor: table && "#c2bebe" }}
                      onClick={handleDetailButton}>
                      <img
                        src={ic_list}
                        className="images-header__buttons__icAddHome"
                      />
                    </button>

                    <button
                      className="home_list_button"
                      onClick={handleListButton}
                      style={{ backgroundColor: !table && "#c2bebe" }}>
                      <img
                        src={ic_menu}
                        className="images-header__buttons__icAddHome"
                      />
                    </button>
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <div className="">
                      <button
                        className="home_button_add me-3" style={{ width: "252px" }}
                        onClick={handleClick}>
                        {t('add_user')} &nbsp;
                        <i class="fa-solid fa-plus fa-lg"></i>
                      </button>
                    </div>
                    <div>
                      <button
                        className="home_button_delete " style={{ width: "252px" }}
                        onClick={handleDeleteData}>
                        {t('remove_user')} &nbsp;
                        <i class="fa-solid fa-trash-can fa-lg"></i>
                      </button>
                      {/* <ConfirmDeleteModal
                        deletedata={deleteData}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      /> */}
                      <DeleteUserModal
                        show={modalShow}
                        setSelectedUsers={setSelectedUsers}
                        data={selectedUsers}
                        onHide={() => setModalShow(false)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="search_box_main my-2 card_main_div justify-content-center">
            <input
              type="text"
              placeholder={t('type_the_name_to_search')}
              className="input_text user-search-bar"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="home_search_button"
              onClick={handleSearchClick}>
              <Image src={img4} />
            </button>
          </div>
          <div
            className="card_main_div justify-content-center"
            style={{ display: !table ? "none" : "flex" }}>
            {AllUsers?.data && AllUsers?.data?.length > 0 &&
              search(AllUsers?.data).map((item, index) => {
                const dob = new Date(item?.dob);
                return (
                  <>
                    <Card
                      key={item.id}
                      className="home_card justify-content-center"
                      style={{ width: "272px", height: "360px" }}>
                      <div className="home_cb_line p-2">
                        <input
                          type="checkbox"
                          onChange={(e) => handleDelete(item, e)}
                        />
                        <div className="home_cb_p">
                          <p>{t('active')} &nbsp; &nbsp; </p>
                          <i class="fa-solid fa-circle home_cb_circle "></i>
                        </div>
                      </div>
                      <Image
                        variant="top"
                        className="home_card_img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dAlfxEHeXNtUb2cbBqAIAvNJKqLsLsTGdw&usqp=CAU"
                      />
                      <Card.Body>
                        <div className="home_card_title_main">
                          <Link
                            className="btn text-end home_card_title"
                            to={`/update-user/${item.id}`}
                            state={{ data: img_update }}
                            ref={formRef}
                            onClick={() => handleMoreInfo({ item })}
                          >
                            {t('update_data')}
                          </Link>
                          <i class="fa-solid fa-angle-right home_card_title_icon"></i>
                        </div>
                        <div className="home_card_details">
                          <div className="home_card_values">
                            <span className="home_card_span_value">{t('name')}</span>
                            <p className="home_card_p_value">{item.name}</p>
                          </div>
                          <div className="home_card_values">
                            <span className="home_card_span_value">{t('last_name')}</span>
                            <p className="home_card_p_value">Apellido</p>
                          </div>
                          <div className="home_card_values">
                            <span className="home_card_span_value">{t('email')}</span>
                            <p className="home_card_p_value">{item.email}</p>
                          </div>
                          <div className="home_card_values">
                            <span className="home_card_span_value">{t('telephone')}</span>
                            <p className="home_card_p_value">
                              {item.phoneNumber}
                            </p>
                          </div>
                          <div className="home_card_values">
                            <span className="home_card_span_value">
                              {t('user_type')}
                            </span>
                            <p className="home_card_p_value">Root</p>
                          </div>
                          <div className="home_card_values">
                            <span className="home_card_span_value">
                              {t('expiration_date')}
                            </span>
                            <p className="home_card_p_value">{dob.toLocaleDateString("en-US")}</p>
                          </div>
                          <div className="home_card_values">
                            <span className="home_card_span_value">{t('equipment')}</span>
                            <p className="home_card_p_value">-</p>
                          </div>
                        </div>
                        <button
                          className="card_bottom_p"
                          onClick={() => handleMoreDetails({ item })}>
                          {t('restore_password')}
                        </button>
                      </Card.Body>
                    </Card>
                  </>
                )
              })}
              
          </div>
          <div className="page">
            <TablePagination
              sx={{
                width: "100%",
                justifyContent: "center",
                margin: "auto",
                alignItems: "center",
              }}
              component="div"
              rowsPerPageOptions={[10, 15, 20]}
              count={AllUsers?.data?.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              labelRowsPerPage="Users per page"
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
          <div
            className="UserRoletable"
            style={{ display: table ? "none" : "block" }}>
            <table class="table">
              <thead>
                <th scope="col-xs-auto">
                  ID
                </th>
                <th scope="col-xs-auto">
                  {t('name')}
                </th>
                {/* <th scope="col-xs-auto" className="">
                    {t('last_name')}
                  </th> */}
                <th scope="col-xs-auto">
                  {t('email')}
                </th>
                <th scope="col-xs-auto">
                  {t('telephone')}
                </th>
                <th scope="col-xs-auto">
                  {t('user_type')}
                </th>
                <th scope="col-xs-auto">
                  {t('status')}
                </th>
                <th scope="col-xs-auto">
                  {t('expiration_date')}
                </th>
                <th scope="col-xs-auto">
                  {t('options')}
                </th>
                <th scope="col-xs-auto">
                  &nbsp;
                </th>
              </thead>
              <tbody style={{ marginTop: "1em" }}>
                {AllUsers?.data && AllUsers?.data?.length > 0 &&
                  search(AllUsers?.data).map((item, index) => {
                    const dob = new Date(item?.dob);
                    return (
                      <tr className="main_row " style={{ marginTop: "1em" }}>
                        <td>
                          {item.id}
                        </td>
                        <td>{item.name}</td>
                        {/* <td>{item.surName}</td> */}
                        <td>{item.email}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.userName}</td>
                        <td>{item.status}</td>
                        <td>{dob.toLocaleDateString("en-US")}</td>
                        <td >
                          <div class="dropdown">
                            <button
                              onClick={() => optionsOnClick(item.id)}
                              className="btn btn-outline-none bg-white">
                              <MoreHorizIcon />
                            </button>
                            <div
                              class="dropdown__dropdown-content"
                              style={{
                                display:
                                  openOptions === item.id ? "block" : "none",
                              }}>
                             <Demo> 
                              <List>
                                <ListItem>
                                  <Link
                                    to={`/update-user/${item.id}`}
                                    onClick={() => handleMoreInfo({ item })}
                                    className="text-decoration-none d-flex justify-content-between">
                                    <ListItemIcon>
                                      <img
                                        src={ic_edit_outline}
                                        className="dropdown__dropdown-icons"
                                      />
                                    </ListItemIcon>

                                    <ListItemText sx={{textTransform:"uppercase"}} primary={t('update')} />
                                  </Link>
                                </ListItem>
                                <ListItem>
                                  <Box
                                    onClick={handleDeleteData}
                                    className="text-decoration-none d-flex justify-content-between">
                                    <ListItemIcon>
                                      <img
                                        src={ic_trash_black}
                                        className="dropdown__dropdown-icons"
                                      />
                                    </ListItemIcon>
                                    <ListItemText sx={{textTransform:"uppercase"}} primary={t('eliminate')}/>
                                  </Box>
                                </ListItem>
                                <ListItem>
                                  <Link
                                    to="/passwordChange"
                                    className="text-decoration-none d-flex justify-content-between">
                                    <ListItemIcon>
                                      <img
                                        src={ic_key}
                                        className="dropdown__dropdown-icons"
                                      />
                                    </ListItemIcon>
                                    <ListItemText sx={{textTransform:"uppercase"}} primary={t('restore_password')} />
                                  </Link>
                                </ListItem>
                              </List>
                            </Demo>
                            </div>
                          </div>
                        </td>
                        <td className="last">
                        <input
                          type="checkbox"
                          onChange={(e) => handleDelete(item, e)}
                        />
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default UserMain;
