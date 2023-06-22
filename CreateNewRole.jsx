// import { Box, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom'
import deleteIcon from '../../../assets/images/ic-delete-red.svg';
import { toast } from 'react-toastify';
import {
    getAllRoleTasks,
    updateRoleRestriction,
    addPermissionTask,
    createRole,
    getAllEmployeesByCompanyId
} from '../../../Apis/roles';
import chevron_right_solid from '../../../assets/images/chevron-right-solid.svg'
import ic_cancel from '../../../assets/images/ic-cancel.svg'
import DeleteRoleModal from './CompanyModals/DeleteRoleModal';
import ManageRoleModal from './ManageRoleModal';

const CreateNewRole = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [roleRestrictions, setroleRestrictions] = useState([
        {
            name: "biocrValidation",
            res: "BIOCR Validation",
            check: false,
            info: "Use the BIOCR validation to confirm your identity",
        },
        {
            name: "eventValidation",
            res: "Event Validation",
            check: false,
            info: "Validate the event who created in this role.",
        },
        {
            name: "extraDataEmployee",
            res: "Extra Data Employee",
            check: false,
            info: "Add extra data to the employee.",
        },
        {
            name: "keepSessionActiveWebApp",
            res: "Keep session active",
            check: false,
            info: "To keep the session al the time active in the web app",
        },
        // {
        //     name: "twoWayValidationFactor",
        //     res: "Two way validation factor",
        //     check: false,
        //     info: "To use the 6 digits code to log in on the web app",
        // },
        {
            name: "sharePdfInMobileApp",
            res: "Share Pdf In MobileApp",
            check: false,
            info: "To use the 6 digits code to log in on the web app",
        },
        {
            name: "useTokenWebApp",
            res: "Use Token WebApp",
            check: false,
            info: "To use the 6 digits code to log in on the web app",
        },
    ]);
    const [selectedRestrictions, setSelectedRestrictions] = useState({
        biocrValidation: false,
        eventValidation: false,
        extraDataEmployee: false,
        id: "",
        keepSessionActiveWebApp: false,
        // twoWayValidationFactor: false,
        sharePdfInMobileApp: false,
        useTokenWebApp: false
    })
    const [roleTasks, setRoleTasks] = useState();
    const [selectedTaskList, setSelectedTaskList] = useState([]);
    const [roleName, setRoleName] = useState("");
    const [loading, setLoading] = useState(false);
    const [totalEmployees, setTotalEmployees] = useState();
    const [deleteId, setDeleteId] = useState();
    const [deleteItemName, setdeleteItemName] = useState();
    const [show, setShow] = useState(false);
    const [manageShow, setManageShow] = useState(false);
    const [roleId, setroleId] = useState()
    // console.log(roleTasks)

    useEffect(() => {
        getAllRoleTasks().then(({ data: { data } }) => {
            setRoleTasks(data)
        }).catch(error => {
            // toast.error("something went wrong.")
        })
    }, [])

    const handleCheckBox = (e, item) => {
        const { checked, name } = e.target
        let checkboxList = roleRestrictions;
        checkboxList.forEach(chkItem => {
            if (chkItem === item) {
                chkItem.check = checked;
                setSelectedRestrictions({ ...selectedRestrictions, [name]: checked })
            }
        })
        setroleRestrictions(checkboxList);
    }

    const handleSelectedTask = (task2) => {
        setSelectedTaskList(selectedTaskList => [...selectedTaskList.filter(item => item.id !== task2.id), task2]);
        // setRoleTasks(roleTasks.filter(item => item.id !== task2.id))
    }
    const handleDeleteTask = (deleteItem) => {
        setRoleTasks(roleTasks => [...roleTasks.filter(item => item.id !== deleteItem.id), deleteItem]);
        setSelectedTaskList(selectedTaskList.filter(item => item.id !== deleteItem.id))
    }


    // const handleCreateRole = () => {
    //     setLoading(true)

    //     const roleBody = {
    //         name: roleName,
    //     }
    //     if (roleName !== "") {
    //         createRole(roleBody).then(({ data: { data } }) => {
    //             // console.log(data)
    //             const roleRestriction = {
    //                 biocrValidation: selectedRestrictions?.biocrValidation,
    //                 eventValidation: selectedRestrictions?.eventValidation,
    //                 extraDataEmployee: selectedRestrictions?.extraDataEmployee,
    //                 keepSessionActiveWebApp: selectedRestrictions?.keepSessionActiveWebApp,
    //                 sharePdfInMobileApp: selectedRestrictions?.sharePdfInMobileApp,
    //                 useTokenWebApp: selectedRestrictions?.useTokenWebApp,
    //                 id: data?.roleRestriction?.id,
    //                 role: {
    //                     id: data?.id,
    //                 }
    //             }
    //             const role = {
    //                 createdAt: data?.createdAt,
    //                 id: data?.id,
    //                 updatedAt: data?.updatedAt
    //             }
    //             let rollTask = []
    //             selectedTaskList.forEach((task) => {
    //                 rollTask.push({
    //                     "task": task,
    //                     "role": role,
    //                 })
    //             })

    //             addPermissionTask(rollTask).then(({ data: { data } }) => {
    //                 // console.log(data)
    //                 updateRoleRestriction(roleRestriction).then(({ data: { data } }) => {
    //                     // console.log(data)
    //                     toast.success("data updated successfully.")
    //                     setLoading(false)
    //                     navigate("/dashboard/company/roles-panel")
    //                 }).catch(error => {
    //                     toast.error("something went wrong in updating restructions.")
    //                     setLoading(false)
    //                 })

    //             }).catch(error => {
    //                 toast.error("something went wrong in updating task list")
    //                 setLoading(false)
    //             })

    //         }).catch(error => {
    //             toast.error("something went wrong in updating name.")
    //             setLoading(false)
    //         })
    //     } else {
    //         toast.error("Must Provide the Role name..!")
    //         setLoading(false)
    //     }

    // }

    return (
        <>
            <div className='head'>
                <div className='headLeft'>
                    <Link to="/dashboard/company/roles-panel">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </Link>
                    <h2>CREATE ROLE</h2>
                </div>
            </div>
            <div className='create_new_role'>
                <div className="row">
                    <div className="col-4">
                        <div className="create_new_role_data">
                            <h3>DATA</h3>
                            <div className="create_new_role_data_item">
                                {/* <Box
                                    component="form"
                                    sx={{
                                        width: "100%",
                                        maxWidth: "100%",
                                        fontSize: "20px",
                                        height: "40px",
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        fullWidth
                                        placeholder="Role Name"
                                        label="Role Name"
                                        name="roleName"
                                        id="outlined-size-normal"
                                        defaultValue=" "
                                        value={roleName}
                                        onChange={(e) => setRoleName(e.target.value)}
                                    />
                                </Box> */}
                            </div>
                            <h3 className='mt-3'>RESTRICSIONS</h3>
                            {
                                roleRestrictions?.map((item, index) => (
                                    <div className="create_new_role_data_restrictions" key={index}>
                                        <div className="data_restrictions_item">
                                            <p className='roleName'>{item.res}</p>
                                            <label className="checkboxLabel">
                                                <input
                                                    type="checkbox"
                                                    name={item.name}
                                                    checked={item.check}
                                                    onChange={(e) => handleCheckBox(e, item)}
                                                />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <p className='roleInfo'><span>Info: </span>{item.info}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-4 mt-4 new_role_available">
                        <p>AVAILABLE</p>
                        <div className='new_role_available_container'>
                            <Accordion defaultActiveKey="0">
                                {
                                    roleTasks?.map(task1 => (
                                        task1?.name.split("_")[1] == "MENU" ?
                                            <Accordion.Item
                                                eventKey={task1?.id}
                                                key={task1?.id}
                                            >
                                                <Accordion.Header>{task1?.name.split("_")[0]}</Accordion.Header>
                                                {roleTasks.map(task2 => (
                                                    task1?.module.name === task2?.module.name && task2?.name.split("_")[1] !== "MENU" ?
                                                        <Accordion.Body
                                                            onClick={() => handleSelectedTask(task2)}
                                                        >
                                                            <span>{task2?.name}</span>
                                                            <img src={ic_cancel} alt="chevron_right_solid" />
                                                        </Accordion.Body> : null
                                                ))}
                                            </Accordion.Item> : null
                                    ))
                                }
                            </Accordion>
                        </div>
                    </div>

                    <div className="col-4 new_role_available">
                        <h3>PERMISSIONS</h3>
                        <p>CHOOSED</p>
                        <div className='new_role_available_container'>
                            <Accordion defaultActiveKey="0">
                                {
                                    roleTasks?.map(task1 => (
                                        task1?.name.split("_")[1] == "MENU" ?
                                            <Accordion.Item
                                                eventKey={task1?.id}
                                                key={task1?.id}
                                            >
                                                <Accordion.Header>{task1?.name.split("_")[0]}</Accordion.Header>
                                                {roleTasks.map(task2 => (
                                                    selectedTaskList?.map(selectedItem => (
                                                        selectedItem?.module.name === task1?.module.name && selectedItem?.name === task2?.name ?
                                                            <Accordion.Body key={selectedItem.id}>
                                                                <span>{selectedItem?.name}</span>
                                                                <img
                                                                    src={ic_cancel}
                                                                    alt="ic_cancel"
                                                                    onClick={() => handleDeleteTask(selectedItem)}
                                                                />
                                                            </Accordion.Body> : null
                                                    ))
                                                ))}
                                            </Accordion.Item> : null
                                    ))
                                }
                            </Accordion>
                        </div>

                    </div>
                </div>
                {/* employee */}
                <div className='role_card_detail mt-5'>
                    <div className='role_card_detail_head'>
                        <p>
                            EMPLOYEES
                            <sub
                                onClick={() => {
                                    setDeleteId("")
                                    setManageShow(true)
                                }}
                            >manage Users</sub>
                        </p>
                    </div>

                    <div className="row role_card_detail_body">
                        {
                            totalEmployees?.map(roleEmployee => (
                                <div className="col-md-3 role_card_detail_body_item">
                                    <img
                                        src={deleteIcon}
                                        alt="deleteimg"
                                    />
                                    <p>{roleEmployee.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* <div className='mt-5 mb-5 ' style={{ float: 'right' }}>
                    <Link to="/dashboard/company/roles-panel">
                        <button className='btn_role_cancel'>CANCEL</button>
                    </Link>
                    <button className='btn_role_create' onClick={handleCreateRole}>
                        {
                            loading ? "CREATING...." : "CREATE ROLE"
                        }
                    </button>
                </div> */}
                {/* <DeleteRoleModal
                    show={show}
                    onHide={() => setShow(false)}
                    deleteid={deleteId}
                    deleteitemname={deleteItemName}
                    setLoading={setLoading}
                />

                <ManageRoleModal
                    show={manageShow}
                    onHide={() => setManageShow(false)}
                    deleteid={id}
                // roleid={roleId}
                /> */}

            </div>
        </>
    )
}

export default CreateNewRole