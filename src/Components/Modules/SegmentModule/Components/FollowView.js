import React, { useState, useContext } from "react";
import ic_left_arrow from "../../../../images/ic-left-arrow.svg";
import ic_employee from "../../../../images/ic-employee.png";
import ic_trash_outline from "../../../../images/ic-trash-outline.png";
import ic_cancel from "../../../../images/ic-cancel.svg";
import { useNavigate } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import { Modal } from "react-bootstrap";
import { AppContext } from "../../../../App";
import word_file from "../../../../images/ic-file-word-solid.svg";
import ic_trash from "../../../../assets/images/icons/red-trash.svg"
import powerpoint_file from "../../../../images/ic-file-powerpoint-solid.svg";

import edit_white from "../../../../images/ic-edit-outline-white.svg";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { makeStyles } from "@material-ui/core";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const useStyles = makeStyles({
  select_option: {
    font: "normal normal 600 14px/18px Montserrat",
    textAlign: "left",
    color: "#707070",
  },
});
const selectOption = {
  font: "normal normal 600 14px/18px Montserrat",
  textAlign: "left",
  color: "#707070",
  "& .MuiSlider-thumb": {
    borderRadius: "1px",
  },
};

const FollowView = () => {
  let navigate = useNavigate();
  const classes = useStyles();
  const [modalSee, setModalSee] = useState(false);
  const { val1 } = useContext(AppContext);
  const [value, setValue] = useState(0);
  const [date, setDate] = useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setDate(newValue);
  };
  const handleEditButton = () => {
    navigate("/create-report");
  };
  const handleActualBtn = () => {
    navigate("/update-report");
  };
  const employee_data = [
    {
      Leftimg: ic_employee,
      name: "Luis Cornejo Arreola",
      nameVar: "NOMBRE",
      phone: "4422232321",
      phoneVar: "TELÉFONO",
      email: "lcornejo@ibl.mx",
      emailVar: "CORREO",
      rightImg: ic_trash_outline,
    },
    {
      Leftimg: ic_employee,
      name: "Luis Cornejo Arreola",
      nameVar: "NOMBRE",
      phone: "4422232321",
      phoneVar: "TELÉFONO",
      email: "lcornejo@ibl.mx",
      emailVar: "CORREO",
      rightImg: ic_trash_outline,
    },
    {
      Leftimg: ic_employee,
      name: "Luis Cornejo Arreola",
      nameVar: "NOMBRE",
      phone: "4422232321",
      phoneVar: "TELÉFONO",

      email: "lcornejo@ibl.mx",
      emailVar: "CORREO",
      rightImg: ic_trash_outline,
    },
    {
      Leftimg: ic_employee,
      name: "Luis Cornejo Arreola",
      nameVar: "NOMBRE",
      phone: "4422232321",
      phoneVar: "TELÉFONO",
      email: "lcornejo@ibl.mx",
      emailVar: "CORREO",
      rightImg: ic_trash_outline,
    },
    {
      Leftimg: ic_employee,
      name: "Luis Cornejo Arreola",
      nameVar: "NOMBRE",
      phone: "4422232321",
      phoneVar: "TELÉFONO",
      email: "lcornejo@ibl.mx",
      emailVar: "CORREO",
      rightImg: ic_trash_outline,
    },
  ];
  const handleClick = () => {
    console.log("Navigate");
    navigate("/follow-owner");
  };

  const handleClickC = () => {
    console.log("Navigate");
    navigate("/");
  };
  return (
    <div   >
      <div className="container-size">
        <div className="container-fluid">
          <div className=" Actual_h1 row">
            <div className="col-sm-6 float-sm-right float-md-right float-lg-right float-xl-right  col-md-6 col-lg-6 col-xl-6">
              <div className="images-header-row">
                <h1 className="images-header__h1">
                  <button
                    onClick={handleClick}
                    className="department-create-header__button">
                    <img src={ic_left_arrow} className="back-arrow" />
                  </button>
                  CONSULTAR SEGUIMIENTO
                </h1>
              </div>
            </div>
            <div className="department-header__buttons col-sm-6 col-md-6 col-lg-6 col-xl-4 ms-auto">
              <div className="col-sm-12 col-md-12 col-lg-8 col-xl-10 float-end">
                <button
                  className="department-header__buttons__addButton w-100"
                  // onClick={handleAddButton}
                >
                  ACTUALIZAR SEGUIMIENTO &nbsp;
                  <img
                    src={edit_white}
                    className="department-header__buttons__icAdd"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="report-create report-update row m-0">
            <div className="report-create__left vl-update-report col-sm-12 col-lg-4 ">
              <div className="row d-flex justify-content-center">
                <form className="col-sm-6 col-lg-10">
                  <h5 className="report-create__headings mb-3">CASOS</h5>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                      <FormControl
                        fullWidth
                        sx={selectOption}
                        // className={classes.select_option}
                      >
                        <InputLabel id="demo-simple-select my-3">Label</InputLabel>
                        <Select
                          value={value}
                          size="small"
                          onChange={(e) => setValue(e.target.value)}
                          labelId="test-select-label"
                          label="Label">
                          <MenuItem key={1} value="test">
                            BIL-2091 | Encargado: Luis Cornejo
                          </MenuItem>
                          <MenuItem key={2} value="test2">
                            BIL-2091 | Encargado: Luis Cornejo
                          </MenuItem>
                          <MenuItem key={2} value="test2">
                            BIL-2091 | Encargado: Luis Cornejo
                          </MenuItem>
                          <MenuItem key={2} value="test2">
                            BIL-2091 | Encargado: Luis Cornejo
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <h5 className="report-create__headings my-3">NOTAS</h5>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                      <FormControl fullWidth>
                        <TextField
                          InputLabelProps={{ shrink: true }}
                          id="outlined-multiline-static"
                          label="NOTAS"
                          multiline
                          rows={4}
                          className={classes.select_option}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                  <h5 className="report-create__headings my-3">
                    FECHA DE PRESENTACIÓN
                  </h5>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                      <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <Stack spacing={3}>
                            <DesktopDatePicker
                              label="FECHA DE PRESENTACIÓN"
                              inputFormat="MM/DD/YYYY"
                              value={date}
                              onChange={handleChange}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </Stack>
                        </LocalizationProvider>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <h5 className="report-create__headings my-3">
                    HORA DE PRESENTACIÓN
                  </h5>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                      <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <Stack spacing={3}>
                            <TimePicker
                              label="Time"
                              value={date}
                              onChange={handleChange}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </Stack>
                        </LocalizationProvider>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <h5 className="report-create__headings my-3">
                    LUGAR DE PRESENTACIÓN
                  </h5>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                      <FormControl fullWidth>
                        <TextField
                          InputLabelProps={{ shrink: true }}
                          id="outlined-required"
                          label="LUGAR"
                          rows={4}
                          className={classes.select_option}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </div>

            <div className="col-md-12 col-lg-8 ">
              <div className="">
                <div className="report-update-right-col m-0 p-0">
                  <p className="report-rightColumn__pUpdate">
                    AGREGAR IMAGEN +
                  </p>
                  <p className="report-rightColumn__headingOne">IMÁGENES</p>
                </div>
              </div>
              <div className="row m-0 p-0">
                <p className="col-12 text-end department-create__right__mainHeading__p">
                  TOTAL 6 EVIDENCIAS
                </p>
              </div>
              <div className="container-fluid m-0 p-0 ">
                <div className="row">
                <div className="col-6 w-90">
                    <div className="segment-rightColumn__firstItem">
                      <div className="segment-rightColumn__delete-icon">
                        <img
                          src={ic_trash}
                        />
                      </div>
                      <div className="firstItem-div-segment row">
                        <img src={word_file} className="fileSize mt-3 col-4" />
                        <div className="col-8 mt-3">
                          <div className="row">
                            <div className="report-rightColumn__firstItem__div col-6">
                              <p className="report-rightColumn__firstItem__div__fp">
                                NOMBRE
                              </p>
                              <p className="report-rightColumn__firstItem__div__sp">
                                Asesinatos
                              </p>
                            </div>
                            <div className="report-rightColumn__firstItem__div col-6">
                              <p className="report-rightColumn__firstItem__div__fp report-rightColumn__firstItem__div__fp__ffp">
                                IMÁGENES
                              </p>
                              <p className="report-rightColumn__firstItem__div__sp report-rightColumn__firstItem__div__sp__ffp">
                                4
                              </p>
                            </div>
                          </div>

                          <div className="report-rightColumn__firstItem__div">
                            <p className="report-rightColumn__firstItem__div__fp">
                              CASO
                            </p>
                            <p className="report-rightColumn__firstItem__div__sp">
                              Asesinato María
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="segment-rightColumn__firstItem">
                      <div className="segment-rightColumn__delete-icon">
                        <img
                          src={ic_trash}
                        />
                      </div>
                      <div className="firstItem-div-segment row">
                        <img
                          src={powerpoint_file}
                          className="fileSize mt-3 col-4"
                        />
                        <div className="col-8 mt-3">
                          <div className="row">
                            <div className="report-rightColumn__firstItem__div col-6">
                              <p className="report-rightColumn__firstItem__div__fp">
                                NOMBRE
                              </p>
                              <p className="report-rightColumn__firstItem__div__sp">
                                Asesinatos
                              </p>
                            </div>
                            <div className="report-rightColumn__firstItem__div col-6">
                              <p className="report-rightColumn__firstItem__div__fp report-rightColumn__firstItem__div__fp__ffp">
                                IMÁGENES
                              </p>
                              <p className="report-rightColumn__firstItem__div__sp report-rightColumn__firstItem__div__sp__ffp">
                                4
                              </p>
                            </div>
                          </div>

                          <div className="report-rightColumn__firstItem__div">
                            <p className="report-rightColumn__firstItem__div__fp">
                              CASO
                            </p>
                            <p className="report-rightColumn__firstItem__div__sp">
                              Asesinato María
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-sm-0 col-md-0 col-lg-5"></div>
            <div className="col-sm-12 col-md-12 col-lg-7">
              <div className="segment-create--footer row justify-content-end">
                <button className="department-create--footer__buttonCancel col-sm-6 col-md-6 col-lg-5  role-model-close-btn">
                  CANCELAR
                </button>
                <button
                  className="department-create--footer__buttonOk col-sm-6 col-md-6 col-lg-5 "
                  onClick={handleClick}
                >
                  CREAR SEGUIMIENTO
                </button>
                <div className="col-sm-0 col-md-0 col-lg-2"></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FollowView;
