import React, { useContext, useState } from 'react'
import { AppContext } from '../../../App'
import { Image, Accordion, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img1 from '../../../images/Password/SNIP-SMALL.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Example = () => {
  const { val1 } = useContext(AppContext)
  const [open, setOpen] = useState()
  const [openn, setOpenn] = useState(true)
  const [openk, setOpenk] = useState(true)

  const [oopen, setOopen] = useState(true)
  
  const [aText, setLinkText] = useState('Búsqueda avanzada')

  // +52 8119655503
  // +52 7661000101
  // aneliavelino@gmail.com
  // valevoliveras@gmail.com
  // luis.cornejo.96@hotmail.com
  // francisco_jb1995@outlook.com
  // aneliavelinogmailcom.txt
  var email = val1.state.name

  console.log('haye')
  console.log(val1.state.name)
  var phone = val1.state.name.query.phones
  var names = val1.state.name.query.names
  var userNames = val1.state.name.query.usernames
  var mainData = val1.state.name.possible_persons

  let navigate = useNavigate()
  const [location, setLocation] = useState()
  const [text, setText] = useState()
  function handleClick() {
    if (aText == 'Búsqueda avanzada') {
      setLinkText('Búsqueda básica')
    } else {
      setLinkText('Búsqueda avanzada')
    }
  }
  
  const checkLocation = (e) => {
    setLocation(e.target.value)
  }

  const [nameValues, setNameValues] = useState([
    { firstName: '', middleName: '', lastName: '' },
  ])
  const [emailValues, setEmailValues] = useState([{ email: '' }])
  const [phoneValues, setPhoneValues] = useState([
    {
      countryCode: '',
      phone: '',
    },
  ])
  const [ageValues, setAgeValues] = useState([{ age: '' }])
  const [educationValues, setEducationValues] = useState([
    {
      school: '',
      academicDegree: '',
    },
  ])
  const [employeeValues, setEmployeeValues] = useState([
    {
      organization: '',
      jobTitle: '',
    },
  ])
  const [userNameValues, setUserNameValues] = useState([{ username: '' }])
  const [directionValues, setDirectionValues] = useState([
    { house: '', street: '', cp: '', csc: '' },
  ])
  const [associateValues, setAssociateValues] = useState([
    { associate1: '', associate2: '', associate3: '' },
  ])

  let handleChangeforName = (i, e) => {
    let newNameValues = [...nameValues]
    newNameValues[i][e.target.name] = e.target.value
    setNameValues(newNameValues)
  }

  let handleChangeforAssociates = (i, e) => {
    let newAssociateValues = [...associateValues]
    newAssociateValues[i][e.target.name] = e.target.value
    setAssociateValues(newAssociateValues)
  }

  let handleChangeforPhone = (i, e) => {
    let newPhoneValues = [...phoneValues]
    newPhoneValues[i][e.target.name] = e.target.value
    setNameValues(newPhoneValues)
  }
  let handleChangeforEmployee = (i, e) => {
    let newEmployeeValues = [...employeeValues]
    newEmployeeValues[i][e.target.name] = e.target.value
    setEmployeeValues(newEmployeeValues)
  }
  let handleChangeforEducation = (i, e) => {
    let newEducationValues = [...educationValues]
    newEducationValues[i][e.target.name] = e.target.value
    setEducationValues(newEducationValues)
  }

  let handleChangeforEmail = (i, e) => {
    let newEmailValues = [...emailValues]
    newEmailValues[i][e.target.name] = e.target.value
    setEmailValues(newEmailValues)
  }
  let handleChangeforAge = (i, e) => {
    let newAgeValues = [...ageValues]
    newAgeValues[i][e.target.name] = e.target.value
    setAgeValues(newAgeValues)
  }
  let handleChangeforUserName = (i, e) => {
    let newUserNameValues = [...userNameValues]
    newUserNameValues[i][e.target.name] = e.target.value
    setUserNameValues(newUserNameValues)
  }
  let handleChangeforDirection = (i, e) => {
    let newDirectionValues = [...directionValues]
    newDirectionValues[i][e.target.name] = e.target.value
    setDirectionValues(newDirectionValues)
  }

  let addFormFieldsForName = () => {
    setNameValues([
      ...nameValues,
      { firstName: '', middleName: '', lastName: '' },
    ])
  }
  let addFormFieldsForAssociates = () => {
    setAssociateValues([
      ...associateValues,
      { associate1: '', associate2: '', associate3: '' },
    ])
  }
  let addFormFieldsForPhone = () => {
    setPhoneValues([...phoneValues, { countryCode: '', phone: '' }])
  }
  let addFormFieldsForEducation = () => {
    setEducationValues([...educationValues, { school: '', academicDegree: '' }])
  }
  let addFormFieldsForEmployee = () => {
    setEmployeeValues([...employeeValues, { organization: '', jobTitle: '' }])
  }
  let addFormFieldsForDirection = () => {
    setDirectionValues([
      ...directionValues,
      { house: '', street: '', cp: '', csc: '' },
    ])
  }

  let addFormFieldsForEmail = () => {
    setEmailValues([...emailValues, { email: '' }])
  }
  let addFormFieldsForAge = () => {
    setAgeValues([...ageValues, { age: '' }])
  }
  let addFormFieldsForUserName = () => {
    setUserNameValues([...userNameValues, {
      username: ''
    }])
  }

  let removeFormFieldsForName = (i) => {
    let newNameValues = [...nameValues]
    newNameValues.splice(i, 1)
    setNameValues(newNameValues)
  }
  let removeFormFieldsForUserName = (i) => {
    let newUserNameValues = [...userNameValues]
    newUserNameValues.splice(i, 1)
    setUserNameValues(newUserNameValues)
  }
  let removeFormFieldsForDirection = (i) => {
    let newDirectionValues = [...directionValues]
    newDirectionValues.splice(i, 1)
    setDirectionValues(newDirectionValues)
  }
  let removeFormFieldsForPhone = (i) => {
    let newPhoneValues = [...phoneValues]
    newPhoneValues.splice(i, 1)
    setPhoneValues(newPhoneValues)
  }

  let removeFormFieldsForEmployee = (i) => {
    let newEmployeeValues = [...employeeValues]
    newEmployeeValues.splice(i, 1)
    setEmployeeValues(newEmployeeValues)
  }

  let removeFormFieldsForEducation = (i) => {
    let newEducationValues = [...educationValues]
    newEducationValues.splice(i, 1)
    setEducationValues(newEducationValues)
  }
  let removeFormFieldsForEmail = (i) => {
    let newEmailValues = [...emailValues]
    newEmailValues.splice(i, 1)
    setEmailValues(newEmailValues)
  }
  let removeFormFieldsForAge = (i) => {
    let newAgeValues = [...ageValues]
    newAgeValues.splice(i, 1)
    setAgeValues(newAgeValues)
  }
  let removeFormFieldsForAssociates = (i) => {
    let newAssociateValues = [...associateValues]
    newAssociateValues.splice(i, 1)
    setAssociateValues(newAssociateValues)
  }
  const checkInput = (e) => {
    e.preventDefault()
    setText(e.target.value)
  }

  const searchMe = async () => {
    if (text.includes('@')) {
      if (location) {
        await axios
          .get(
            `https://api.pipl.com/search/?email=${text}&location=${location}&key=n6fggbf0hqfr896xrdq16qkc`
          )
          .then(function (response) {
            if (response) {
              val1.dispatch({
                type: 'UPDATE_INPUT',
                data: response?.data.possible_persons,
              })
              navigate('/userDetails')
            }
          })
      } else {
        await axios
          .get(
            `https://api.pipl.com/search/?email=${text}&key=n6fggbf0hqfr896xrdq16qkc`
          )
          .then(function (response) {
            if (response) {
              val1.dispatch({
                type: 'UPDATE_INPUT',
                data: response?.data.possible_persons,
              })
              navigate('/userDetails')
            }
          })
      }
    } else {
      const myArray = text.split(' ')
      const arrayLength = myArray.length
      if (arrayLength > 0) {
        if (arrayLength === 2) {
          if (location) {
            await axios
              .get(
                `https://api.pipl.com/search/?first_name=${myArray[0]}&last_name=${myArray[1]}&location=${location}&key=n6fggbf0hqfr896xrdq16qkc`
              )
              .then(function (response) {
                if (response) {
                  val1.dispatch({
                    type: 'UPDATE_INPUT',
                    data: response?.data.possible_persons,
                  })
                  navigate('/example')
                }
              })
          } else {
            await axios
              .get(
                `https://api.pipl.com/search/?first_name=${myArray[0]}&last_name=${myArray[1]}&key=n6fggbf0hqfr896xrdq16qkc`
              )
              .then(function (response) {
                if (response) {
                  val1.dispatch({
                    type: 'UPDATE_INPUT',
                    data: response?.data.possible_persons,
                  })
                  navigate('/example')
                }
              })
          }
        } else {
          if (location) {
            await axios
              .get(
                `https://api.pipl.com/search/?first_name=${myArray[0]}&middle_name=${myArray[1]}&last_name=${myArray[2]}&location=${location}&key=n6fggbf0hqfr896xrdq16qkc`
              )
              .then(function (response) {
                if (response) {
                  val1.dispatch({
                    type: 'UPDATE_INPUT',
                    data: response?.data.possible_persons,
                  })
                  navigate('/example')
                }
              })
          } else {
            await axios
              .get(
                `https://api.pipl.com/search/?first_name=${myArray[0]}&middle_name=${myArray[1]}&last_name=${myArray[2]}&key=n6fggbf0hqfr896xrdq16qkc`
              )
              .then(function (response) {
                if (response) {
                  val1.dispatch({
                    type: 'UPDATE_INPUT',
                    data: response?.data.possible_persons,
                  })
                  navigate('/example')
                }
              })
          }
        }
      } else {
        if (location) {
          await axios
            .get(
              `https://api.pipl.com/search/?username=${myArray[0]}&location=${location}&key=n6fggbf0hqfr896xrdq16qkc`
            )
            .then(function (response) {
              if (response) {
                val1.dispatch({
                  type: 'UPDATE_INPUT',
                  data: response?.data.possible_persons,
                })
                navigate('/example')
              }
            })
        } else {
          await axios
            .get(
              `https://api.pipl.com/search/?username=${myArray[0]}&key=n6fggbf0hqfr896xrdq16qkc`
            )
            .then(function (response) {
              if (response) {
                val1.dispatch({
                  type: 'UPDATE_INPUT',
                  data: response?.data.possible_persons,
                })
                navigate('/example')
              }
            })
        }
      }
    }
  }
  {
    mainData.map((item) => {
      console.log(typeof item?.['@match'])
    })
  }

  return (
    <>
      <div className='home container '>
        <div className='ex_input_div'>
          <Image className='ex_main_img' src={img1} />
          <div className='ex_main_input'>
            <input
              type='text'
              className='search_input_one'
              placeholder='Name, Email, Username or Phone'
              onChange={checkInput}
              name=''
              id=''
            />
            <span className='search_span'></span>
            <input
              type='text'
              className='search_input_two'
              placeholder='Location (optional)'
              onChange={checkLocation}
              name=''
              id=''
            />
            <button className='search_button' onClick={searchMe}>
              <i class='fa-solid fa-magnifying-glass search_icon'></i>
            </button>
          </div>

          <a
            className='MoreDetails_a_tag'
            onClick={() => {
              setOpenn(!openn)
              handleClick()
            }}
          >
            {aText}
          </a>
        </div>
        <div
          className='searchM_name_input'
          style={{ display: openn ? 'none' : 'block' }}
        >
          <form>
            <div>
              {nameValues.map((element, index) => (
                <div className='' key={index}>
                  <div className='row' style={{ marginTop: '1%' }}>
                    <div class='col-1'>
                      <label className=''>Nombre</label>
                    </div>
                    <div class='col-sm'>
                      <input
                        type='text'
                        className='form-control'
                        name='firstName'
                        value={element.firstName || ''}
                        placeholder='Nombre(s)'
                        onChange={(e) => handleChangeforName(index, e)}
                      />
                    </div>
                    <div class='col-sm'>
                      <input
                        type='text'
                        className='form-control'
                        name='middleName'
                        value={element.middleName || ''}
                        placeholder='Apellido paterno'
                        onChange={(e) => handleChangeforName(index, e)}
                      />
                    </div>
                    <div class='col-sm'>
                      <input
                        type='text'
                        className='form-control'
                        name='lastName'
                        value={element.lastName || ''}
                        placeholder='Apellido materno'
                        onChange={(e) => handleChangeforName(index, e)}
                      />
                    </div>

                    <div className='col-3'>
                      {nameValues.length - 1 === index ? (
                        <button
                          className='button add'
                          type='button'
                          onClick={() => addFormFieldsForName()}
                        >
                          <i class='fa-solid fa-plus'></i>
                          Agregar nombre
                        </button>
                      ) : (
                        <button
                          type='button'
                          className='button remove'
                          style={{ color: 'red' }}
                          onClick={() => removeFormFieldsForName(index)}
                        >
                          <i class='fa-solid fa-minus'></i>
                          Eliminar nombre
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* // email  */}
            <div style={{ marginTop: '10px' }}>
              {emailValues.map((element, index) => (
                <div className='' key={index}>
                  <div className='row' style={{ marginTop: '1%' }}>
                    <div className='col-1'>
                      <label className=''>Correo</label>
                    </div>
                    <div className='col-sm'>
                      <input
                        type='text'
                        className='form-control'
                        name='email'
                        value={element.email || ''}
                        placeholder='Correo'
                        onChange={(e) => handleChangeforEmail(index, e)}
                      />
                    </div>

                    <div className='col-3'>
                      {emailValues.length - 1 === index ? (
                        <button
                          className='button add'
                          type='button'
                          onClick={() => addFormFieldsForEmail()}
                        >
                          <i class='fa-solid fa-plus'></i>
                          Agregar correo
                        </button>
                      ) : (
                        <button
                          type='button'
                          className='button remove'
                          style={{ color: 'red' }}
                          onClick={() => removeFormFieldsForEmail(index)}
                        >
                          <i class='fa-solid fa-minus'></i>
                          Eliminar correo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* phone */}
            <div style={{ marginTop: '10px' }}>
              {phoneValues.map((element, index) => (
                <div className=' ' key={index}>
                  <div className='row' style={{ marginTop: '1%' }}>
                    <div className='col-1'>
                      <label className=''>Teléfono</label>
                    </div>
                    <div className='col-sm'>
                      <input
                        type='number'
                        className='form-control'
                        name='countryCode'
                        value={element.countryCode || ''}
                        placeholder='Código de país'
                        onChange={(e) => handleChangeforPhone(index, e)}
                      />
                    </div>
                    <div className='col-sm'>
                      <input
                        type='number'
                        className='form-control'
                        name='phone'
                        value={element.phone || ''}
                        placeholder='Teléfono'
                        onChange={(e) => handleChangeforPhone(index, e)}
                      />
                    </div>

                    <div className='col-3'>
                      {phoneValues.length - 1 === index ? (
                        <button
                          className='button add'
                          type='button'
                          onClick={() => addFormFieldsForPhone()}
                        >
                          <i class='fa-solid fa-plus'></i>
                          Agregar teléfono
                        </button>
                      ) : (
                        <button
                          type='button'
                          className='button remove'
                          style={{ color: 'red' }}
                          onClick={() => removeFormFieldsForPhone(index)}
                        >
                          <i class='fa-solid fa-minus addButton'></i>
                          Eliminar teléfono
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* // userName  */}
            <div style={{ marginTop: '10px' }}>
              {userNameValues.map((element, index) => (
                <div className='' key={index}>
                  <div className='row' style={{ marginTop: '1%' }}>
                    <div className='col-1'>
                      <label className=''>Username</label>
                    </div>
                    <div className='col-sm'>
                      <input
                        type='text'
                        className='form-control'
                        name='username'
                        value={element.username || ''}
                        placeholder='Nombre de usuario'
                        onChange={(e) => handleChangeforUserName(index, e)}
                      />
                    </div>
                    <div className='col-3'>
                      {userNameValues.length - 1 === index ? (
                        <button
                          className='button add'
                          type='button'
                          onClick={() => addFormFieldsForUserName()}
                        >
                          <i class='fa-solid fa-plus'></i>
                          Agregar nombre de usuario
                        </button>
                      ) : (
                        <button
                          type='button'
                          className='button remove'
                          style={{ color: 'red' }}
                          onClick={() => removeFormFieldsForUserName(index)}
                        >
                          <i class='fa-solid fa-minus'></i>
                          Eliminar nombre de usuario
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* direction */}
            <div style={{ marginTop: '10px' }}>
              {directionValues.map((element, index) => (
                <div className='' key={index}>
                  <div className='row' style={{ marginTop: '1%' }}>
                    <div className='col-1'>
                      <label className=''>Dirección</label>
                    </div>
                    <div className='col-sm'>
                      <input
                        type='text'
                        className='form-control'
                        name='house'
                        value={element.house || ''}
                        placeholder='Casa'
                        onChange={(e) => handleChangeforDirection(index, e)}
                      />
                    </div>
                    <div className='col-sm'>
                      <input
                        type='text'
                        className='form-control'
                        name='street'
                        value={element.street || ''}
                        placeholder='Calle'
                        onChange={(e) => handleChangeforDirection(index, e)}
                      />
                    </div>
                    <div className='col-sm'>
                      <input
                        type='text'
                        className='form-control'
                        name='cp'
                        value={element.cp || ''}
                        placeholder='C.P.'
                        onChange={(e) => handleChangeforDirection(index, e)}
                      />
                    </div>
                    <div className='col-sm'>
                      <input
                        type='text'
                        className='form-control'
                        name='csc'
                        value={element.csc || ''}
                        placeholder='Ciudad, edo y país'
                        onChange={(e) => handleChangeforDirection(index, e)}
                      />
                    </div>

                    <div className='col-3'>
                      {directionValues.length - 1 === index ? (
                        <button
                          className='button add'
                          type='button'
                          onClick={() => addFormFieldsForDirection()}
                        >
                          <i class='fa-solid fa-plus'></i>
                          Agregar dirección
                        </button>
                      ) : (
                        <button
                          type='button'
                          className='button remove'
                          style={{ color: 'red' }}
                          onClick={() => removeFormFieldsForDirection(index)}
                        >
                          <i class='fa-solid fa-minus'></i>
                          Eliminar dirección
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Associate Values */}
            <div style={{ marginTop: '10px' }}>
              {associateValues.map((element, index) => (
                <div className='' key={index}>
                  <div className='row' style={{ marginTop: '1%' }}>
                    <div className='col-1'>
                      <label className=''>Asociado</label>
                    </div>
                    <div className='col-sm'>
                      <input
                        type='text'
                        className='form-control'
                        name='associate1'
                        value={element.associate1 || ''}
                        placeholder='Nombre(s)'
                        onChange={(e) => handleChangeforAssociates(index, e)}
                      />
                    </div>
                    <div className='col-sm'>
                      <input
                        type='text'
                        className='form-control'
                        name='associate2'
                        value={element.associate2 || ''}
                        placeholder='Apellido paterno'
                        onChange={(e) => handleChangeforAssociates(index, e)}
                      />
                    </div>
                    <div className='col-sm'>
                      <input
                        type='text'
                        className='form-control'
                        name='lastName'
                        value={element.associate3 || ''}
                        placeholder='Apellido materno'
                        onChange={(e) => handleChangeforAssociates(index, e)}
                      />
                    </div>

                    <div className='col-3'>
                      {associateValues.length - 1 === index ? (
                        <button
                          className='button add'
                          type='button'
                          onClick={() => addFormFieldsForAssociates()}
                        >
                          <i class='fa-solid fa-plus'></i>
                          Agregar asociado
                        </button>
                      ) : (
                        <button
                          type='button'
                          className='button remove'
                          style={{ color: 'red' }}
                          onClick={() => removeFormFieldsForAssociates(index)}
                        >
                          <i class='fa-solid fa-minus'></i>
                          Eliminar asociado
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '10px' }}>
              {educationValues.map((element, index) => (
                <div className='' key={index}>
                  <div className='row' style={{ marginTop: '1%' }}>
                    <div className='col-1'>
                      <label className=''>Educacion</label>
                    </div>
                    <div className='col-sm'>
                      <input
                        type='text'
                        className='form-control'
                        name='school'
                        value={element.school || ''}
                        placeholder='Escuela'
                        onChange={(e) => handleChangeforEducation(index, e)}
                      />
                    </div>
                    <div className='col-sm'>
                      <input
                        type='text'
                        className='form-control'
                        name='academicDegree'
                        value={element.academicDegree || ''}
                        placeholder='Nombre(s)'
                        onChange={(e) => handleChangeforEducation(index, e)}
                      />
                    </div>

                    <div className='col-3'>
                      {educationValues.length - 1 === index ? (
                        <button
                          className='button add'
                          type='button'
                          onClick={() => addFormFieldsForEducation()}
                        >
                          <i class='fa-solid fa-plus'></i>
                          Agregar grado escolar
                        </button>
                      ) : (
                        <button
                          type='button'
                          className='button remove'
                          style={{ color: 'red' }}
                          onClick={() => removeFormFieldsForEducation(index)}
                        >
                          <i class='fa-solid fa-minus'></i>
                          Eliminar grado escolar
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '10px' }}>
              {employeeValues.map((element, index) => (
                <div className=' ' key={index}>
                  <div className='row' style={{ marginTop: '1%' }}>
                    <div className='col-1'>
                      <label className=''>Empleo</label>
                    </div>
                    <div className='col-sm'>
                      <input
                        type='text'
                        className='form-control'
                        name='orgnization'
                        value={element.orgnization || ''}
                        placeholder='Organización'
                        onChange={(e) => handleChangeforEmployee(index, e)}
                      />
                    </div>
                    <div className='col-sm'>
                      <input
                        type='text'
                        className='form-control'
                        name='jobTitle'
                        value={element.jobTitle || ''}
                        placeholder='Puesto laboral'
                        onChange={(e) => handleChangeforEmployee(index, e)}
                      />
                    </div>

                    <div className='col-3'>
                      {employeeValues.length - 1 === index ? (
                        <button
                          className='button add'
                          type='button'
                          onClick={() => addFormFieldsForEmployee()}
                        >
                          <i class='fa-solid fa-plus'></i>
                          Agregar empleo
                        </button>
                      ) : (
                        <button
                          type='button'
                          className='button remove'
                          style={{ color: 'red' }}
                          onClick={() => removeFormFieldsForEmployee(index)}
                        >
                          <i class='fa-solid fa-minus'></i>
                          Eliminar empleo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* age */}
            <div style={{ marginTop: '10px' }}>
              {ageValues.map((element, index) => (
                <div className='' key={index}>
                  <div className='row' style={{ marginTop: '1%' }}>
                    <div className='col-1'>
                      <label className=''>Edad</label>
                    </div>
                    <div className='col-sm'>
                      <input
                        type='text'
                        className='form-control'
                        name='age'
                        value={element.age || ''}
                        placeholder='Fecha de nacimiento (MM/DD/YYYY), edad, o rango (e.j. 30-35)'
                        onChange={(e) => handleChangeforAge(index, e)}
                      />
                    </div>

                    <div className='col-3'>
                      {ageValues.length - 1 === index ? (
                        <button
                          className='button add'
                          type='button'
                          onClick={() => addFormFieldsForAge()}
                        >
                          <i class='fa-solid fa-plus'></i>
                          Agregar edad
                        </button>
                      ) : (
                        <button
                          type='button'
                          className='button remove'
                          style={{ color: 'red' }}
                          onClick={() => removeFormFieldsForAge(index)}
                        >
                          <i class='fa-solid fa-minus'></i>
                          Eliminar edad
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className='searchM_button_submit'>BUSCAR</button>
          </form>
        </div>
        {phone && (
          <div className='home_kainat'>
            <div className='home_left_div'>
              <div>
                <p className='ex_first_p'>Resultados relacionados</p>
                {mainData.map((item, index) => (
                  <div>
                      <Accordion defaultActiveKey='0' className='example_main'>
                    {item?.['@match'] > 0 && (
                        <Accordion.Item eventKey={index} key='0'>
                          <>
                            <Accordion.Header onClick={() => setOpenk(!openk)}>
                              <div className=''>
                                {item?.names
                                  ? item?.names?.slice(0, 1).map((val) => (
                                      <>
                                        <div className='whatever2'>
                                          <Link
                                            to='/userDetails'
                                            name={val.display}
                                            style={{ textDecoration: 'none' }}
                                            state={{
                                              val: val.display,
                                              state: val1.state,
                                            }}
                                          >
                                            <h4 className='example_h5'>
                                              {val.display}
                                            </h4>
                                          </Link>
                                          <i
                                            class='fa-solid fa-circle-chevron-right'
                                            onClick={() => setOpenk(!openk)}
                                          ></i>
                                        </div>
                                      </>
                                    ))
                                  : item?.phones
                                  ? item?.phones?.slice(0, 1).map((val) => (
                                      <>
                                        <div className='whatever2'>
                                          <Link
                                            to='/userDetails'
                                            name={val.display}
                                            style={{ textDecoration: 'none' }}
                                            state={{
                                              val: val.display,
                                              state: val1.state,
                                            }}
                                          >
                                            <h4 className='example_h5'>
                                              {val.display}
                                            </h4>
                                          </Link>
                                          <i
                                            class='fa-solid fa-circle-chevron-right'
                                            onClick={() => setOpenk(!openk)}
                                          ></i>
                                        </div>
                                      </>
                                    ))
                                  : ''}
                                <div
                                  style={{ display: openk ? 'none' : 'block' }}
                                >
                                  {item?.addresses?.slice(0, 1).map((val) => (
                                    <p className='example_h3'>{val.display}</p>
                                  ))}
                                  <hr className='example_hr' />
                                  {item?.phones?.slice(0, 1).map((val) => (
                                    <p className='example_p'>
                                      {val.display_international}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </Accordion.Header>

                            <Accordion.Body>
                              <div className='search-module__datail'>
                                <div className='search-module__all'>
                                  <label>Email</label>
                                  {item?.emails?.content
                                    ? item?.emails?.slice(0, 1).map((val) => (
                                        <span className='search-module__all--desc'>
                                          {item?.emails?.content}
                                          <p className='search-module__all--desc--note'></p>
                                        </span>
                                      ))
                                    : 'No email found'}
                                </div>
                                <div className='search-module__all'>
                                  <label>Phones</label>
                                  {item?.phones?.slice(0, 1).map((val) => (
                                    <span className='search-module__all--desc'>
                                      {val.display_international}
                                      <p className='search-module__all--desc--note'></p>
                                    </span>
                                  ))}
                                </div>
                                <div className='search-module__all'>
                                  <label>Place</label>
                                  {item?.addresses?.slice(0, 1).map((val) => (
                                    <span className='search-module__all--desc'>
                                      {val.display}
                                      <p className='search-module__all--desc--note'></p>
                                    </span>
                                  ))}
                                </div>
                                <div className='search-module__all'>
                                  <label>Career</label>
                                  {item?.addresses?.slice(0, 1).map((val) => (
                                    <span className='search-module__all--desc'>
                                      {val.display}
                                      <p className='search-module__all--desc--note'></p>
                                    </span>
                                  ))}
                                </div>
                                <div className='search-module__all'>
                                  <label>Source</label>
                                  <span className='search-module__all--desc'>
                                    766 102 0101
                                    <p className='search-module__all--desc--note'></p>
                                  </span>
                                </div>
                              </div>
                            </Accordion.Body>
                          </>
                        </Accordion.Item>
                    )}
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
            <div className='home_right_div'>
              <div>
                <p className='ex_second_p'>
                  Resultados posiblemente relacionados
                </p>
                {mainData.map((item, index) => (
                  <div>
                      <Accordion defaultActiveKey='0' className='example_main'>
                    {item?.['@match'] === 0 && (
                        <Accordion.Item
                          eventKey='0'
                          key='0'
                        >
                          <>
                            <Accordion.Header onClick={() => setOpen(index)}>
                              <div className=''>
                                {item?.names ? (
                                  item?.names?.slice(0, 1).map((val) => (
                                    <>
                                      <div className='whatever2'>
                                        <Link
                                          to='/userDetails'
                                          name={val.display}
                                          style={{ textDecoration: 'none' }}
                                          state={{
                                            val: val.display,
                                            state: val1.state,
                                          }}
                                        >
                                          <h4 className='example_h5'>
                                            {val.display}
                                          </h4>
                                        </Link>
                                        <i
                                          class='fa-solid fa-circle-chevron-right'
                                          onClick={() => setOpen(index)}
                                        ></i>
                                      </div>
                                    </>
                                  ))
                                ) : (
                                  <div className='whatever2'>
                                    <Link
                                      to='/userDetails'
                                      name={
                                        item?.phones[0]?.display_international
                                      }
                                      style={{ textDecoration: 'none' }}
                                      state={{
                                        val: item?.phones
                                          ?.display_international,
                                        state: val1.state,
                                      }}
                                    >
                                      <h4 className='example_h5'>
                                        {item?.phones[0]?.display_international}
                                      </h4>
                                    </Link>
                                    <i
                                      class='fa-solid fa-circle-chevron-right'
                                      onClick={() => setOpen(index)}
                                    ></i>
                                  </div>
                                )}
                                <div
                                  style={{ display: open === index ? 'none' : 'block' }}
                                >
                                  {item?.addresses?.slice(0, 1).map((val) => (
                                    <p className='example_h3'>{val.display}</p>
                                  ))}
                                  <hr className='example_hr' />
                                  {item?.phones?.slice(0, 1).map((val) => (
                                    <p className='example_p'>
                                      {val.display_international}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </Accordion.Header>

                            <Accordion.Body>
                              <div className='search-module__datail'>
                                <div className='search-module__all'>
                                  <label>Email</label>
                                  {item?.emails?.content
                                    ? item?.emails?.slice(0, 1).map((val) => (
                                        <span className='search-module__all--desc'>
                                          {item?.emails?.content}
                                          <p className='search-module__all--desc--note'></p>
                                        </span>
                                      ))
                                    : 'No email found'}
                                </div>
                                <div className='search-module__all'>
                                  <label>Phones</label>
                                  {item?.phones?.slice(0, 1).map((val) => (
                                    <span className='search-module__all--desc'>
                                      {val.display_international}
                                      <p className='search-module__all--desc--note'></p>
                                    </span>
                                  ))}
                                </div>
                                <div className='search-module__all'>
                                  <label>Place</label>
                                  {item?.addresses?.slice(0, 1).map((val) => (
                                    <span className='search-module__all--desc'>
                                      {val.display}
                                      <p className='search-module__all--desc--note'></p>
                                    </span>
                                  ))}
                                </div>
                                <div className='search-module__all'>
                                  <label>Career</label>
                                  {item?.addresses?.slice(0, 1).map((val) => (
                                    <span className='search-module__all--desc'>
                                      {val.display}
                                      <p className='search-module__all--desc--note'></p>
                                    </span>
                                  ))}
                                </div>
                                <div className='search-module__all'>
                                  <label>Source</label>
                                  <span className='search-module__all--desc'>
                                    766 102 0101
                                    <p className='search-module__all--desc--note'></p>
                                  </span>
                                </div>
                              </div>
                            </Accordion.Body>
                          </>
                        </Accordion.Item>
                    )}
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* {email && (
          <div className='home_kainat'>
            <div className='home_left_div'>
              <div>
                <p className='ex_first_p'>Resultados relacionados</p>
                {mainData.map((item, index) => (
                  <div>
                    {item?.['@match'] > 0 && (
                      <Accordion defaultActiveKey='0' className='example_main'>
                        <Accordion.Item eventKey='0' key='0'>
                          <>
                            <Accordion.Header onClick={() => setOpen(!open)}>
                              <div className=''>
                                {item?.names ? (
                                  item?.names?.slice(0, 1).map((val) => (
                                    <>
                                      <div className='whatever2'>
                                        <Link
                                          to='/userDetails'
                                          name={val.display}
                                          style={{ textDecoration: 'none' }}
                                          state={{
                                            val: val.display,
                                            state: val1.state,
                                          }}
                                        >
                                          <h4 className='example_h5'>
                                            {val.display}
                                          </h4>
                                        </Link>
                                        <i
                                          class='fa-solid fa-circle-chevron-right'
                                          onClick={() => setOpen(!open)}
                                        ></i>
                                      </div>
                                    </>
                                  ))
                                ) : item?.phones ? (
                                  item?.phones?.slice(0, 1).map((val) => (
                                    <>
                                      <div className='whatever2'>
                                        <Link
                                          to='/userDetails'
                                          name={val.display_international}
                                          style={{ textDecoration: 'none' }}
                                          state={{
                                            val: val.display_international,
                                            state: val1.state,
                                          }}
                                        >
                                          <h4 className='example_h5'>
                                            {val.display_international}
                                          </h4>
                                        </Link>
                                        <i
                                          class='fa-solid fa-circle-chevron-right'
                                          onClick={() => setOpen(!open)}
                                        ></i>
                                      </div>
                                    </>
                                  ))
                                ) : (
                                  <div className='whatever2'>
                                    {
                                      <Link
                                        to='/userDetails'
                                        name={item?.usernames[0]?.content}
                                        style={{ textDecoration: 'none' }}
                                        state={{
                                          val: item?.usernames[0]?.content,
                                          state: val1.state,
                                        }}
                                      >
                                        <h4 className='example_h5'>
                                          {item?.usernames[0]?.content}
                                        </h4>
                                      </Link>
                                    }
                                    <i
                                      class='fa-solid fa-circle-chevron-right'
                                      onClick={() => setOpen(!open)}
                                    ></i>
                                  </div>
                                )}
                                <div
                                  style={{ display: open ? 'none' : 'block' }}
                                >
                                  {item?.addresses?.slice(0, 1).map((val) => (
                                    <p className='example_h3'>{val.display}</p>
                                  ))}
                                  <hr className='example_hr' />
                                  {item?.phones?.slice(0, 1).map((val) => (
                                    <p className='example_p'>
                                      {val.display_international}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </Accordion.Header>

                            <Accordion.Body>
                              <div className='search-module__datail'>
                                <div className='search-module__all'>
                                  <label>Email</label>
                                  {item?.emails?.content
                                    ? item?.emails?.slice(0, 1).map((val) => (
                                        <span className='search-module__all--desc'>
                                          {item?.emails?.content}
                                          <p className='search-module__all--desc--note'></p>
                                        </span>
                                      ))
                                    : 'No email found'}
                                </div>
                                <div className='search-module__all'>
                                  <label>Phones</label>
                                  {item?.phones?.slice(0, 1).map((val) => (
                                    <span className='search-module__all--desc'>
                                      {val.display_international}
                                      <p className='search-module__all--desc--note'></p>
                                    </span>
                                  ))}
                                </div>
                                <div className='search-module__all'>
                                  <label>Place</label>
                                  {item?.addresses?.slice(0, 1).map((val) => (
                                    <span className='search-module__all--desc'>
                                      {val.display}
                                      <p className='search-module__all--desc--note'></p>
                                    </span>
                                  ))}
                                </div>
                                <div className='search-module__all'>
                                  <label>Career</label>
                                  {item?.addresses?.slice(0, 1).map((val) => (
                                    <span className='search-module__all--desc'>
                                      {val.display}
                                      <p className='search-module__all--desc--note'></p>
                                    </span>
                                  ))}
                                </div>
                                <div className='search-module__all'>
                                  <label>Source</label>
                                  <span className='search-module__all--desc'>
                                    766 102 0101
                                    <p className='search-module__all--desc--note'></p>
                                  </span>
                                </div>
                              </div>
                            </Accordion.Body>
                          </>
                        </Accordion.Item>
                      </Accordion>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className='home_right_div'>
              <div>
                <p className='ex_second_p'>
                  Resultados posiblemente relacionados
                </p>
                {mainData.map((item, index) => (
                  <div>
                    {item?.['@match'] === 0 && (
                      <Accordion defaultActiveKey='0' className='example_main'>
                        <Accordion.Item
                          eventKey='0'
                          key='0'
                        >
                          <>
                            <Accordion.Header onClick={() => setOpen(!open)}>
                              <div className=''>
                                {item?.names ? (
                                  item?.names?.slice(0, 1).map((val) => (
                                    <>
                                      <div className='whatever2'>
                                        <Link
                                          to='/userDetails'
                                          name={val.display}
                                          style={{ textDecoration: 'none' }}
                                          state={{
                                            val: val.display,
                                            state: val1.state,
                                          }}
                                        >
                                          <h4 className='example_h5'>
                                            {val.display}
                                          </h4>
                                        </Link>
                                        <i
                                          class='fa-solid fa-circle-chevron-right'
                                          onClick={() => setOpen(!open)}
                                        ></i>
                                      </div>
                                    </>
                                  ))
                                ) : item?.phones ? (
                                  item?.phones?.slice(0, 1).map((val) => (
                                    <>
                                      <div className='whatever2'>
                                        <Link
                                          to='/userDetails'
                                          name={val.display_international}
                                          style={{ textDecoration: 'none' }}
                                          state={{
                                            val: val.display_international,
                                            state: val1.state,
                                          }}
                                        >
                                          <h4 className='example_h5'>
                                            {val.display_international}
                                          </h4>
                                        </Link>
                                        <i
                                          class='fa-solid fa-circle-chevron-right'
                                          onClick={() => setOpen(!open)}
                                        ></i>
                                      </div>
                                    </>
                                  ))
                                ) : (
                                  <div className='whatever2'>
                                    {
                                      <Link
                                        to='/userDetails'
                                        name={item?.usernames[0]?.content}
                                        style={{ textDecoration: 'none' }}
                                        state={{
                                          val: item?.usernames[0]?.content,
                                          state: val1.state,
                                        }}
                                      >
                                        <h4 className='example_h5'>
                                          {item?.usernames[0]?.content}
                                        </h4>
                                      </Link>
                                    }
                                    <i
                                      class='fa-solid fa-circle-chevron-right'
                                      onClick={() => setOpen(!open)}
                                    ></i>
                                  </div>
                                )}

                                <div
                                  style={{ display: open ? 'none' : 'block' }}
                                >
                                  {item?.addresses?.slice(0, 1).map((val) => (
                                    <p className='example_h3'>{val.display}</p>
                                  ))}
                                  <hr className='example_hr' />
                                  {item?.phones?.slice(0, 1).map((val) => (
                                    <p className='example_p'>
                                      {val.display_international}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </Accordion.Header>

                            <Accordion.Body>
                              <div className='search-module__datail'>
                                <div className='search-module__all'>
                                  <label>Email</label>
                                  {item?.emails?.content
                                    ? item?.emails?.slice(0, 1).map((val) => (
                                        <span className='search-module__all--desc'>
                                          {item?.emails?.content}
                                          <p className='search-module__all--desc--note'></p>
                                        </span>
                                      ))
                                    : 'No email found'}
                                </div>
                                <div className='search-module__all'>
                                  <label>Phones</label>
                                  {item?.phones?.slice(0, 1).map((val) => (
                                    <span className='search-module__all--desc'>
                                      {val.display_international}
                                      <p className='search-module__all--desc--note'></p>
                                    </span>
                                  ))}
                                </div>
                                <div className='search-module__all'>
                                  <label>Place</label>
                                  {item?.addresses?.slice(0, 1).map((val) => (
                                    <span className='search-module__all--desc'>
                                      {val.display}
                                      <p className='search-module__all--desc--note'></p>
                                    </span>
                                  ))}
                                </div>
                                <div className='search-module__all'>
                                  <label>Career</label>
                                  {item?.addresses?.slice(0, 1).map((val) => (
                                    <span className='search-module__all--desc'>
                                      {val.display}
                                      <p className='search-module__all--desc--note'></p>
                                    </span>
                                  ))}
                                </div>
                                <div className='search-module__all'>
                                  <label>Source</label>
                                  <span className='search-module__all--desc'>
                                    766 102 0101
                                    <p className='search-module__all--desc--note'></p>
                                  </span>
                                </div>
                              </div>
                            </Accordion.Body>
                          </>
                        </Accordion.Item>
                      </Accordion>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )} */}
        {/* userNames */}

        {userNames &&
          mainData.map((item, index) => (
            <Accordion defaultActiveKey='0' className='example_main'>
              <Accordion.Item eventKey='0' key='0'>
                {item?.names && (
                  <>
                    <Accordion.Header onClick={() => setOpen(!open)}>
                      <div className=''>
                        {item?.names?.slice(0, 1).map((val) => (
                          <>
                            <div className='whatever2'>
                              <Link
                                to='/userDetails'
                                name={val.display}
                                style={{ textDecoration: 'none' }}
                                state={{ val: val.display, state: val1.state }}
                              >
                                <h4 className='example_h5'>{val.display}</h4>
                              </Link>
                              <i
                                class='fa-solid fa-circle-chevron-right'
                                onClick={() => setOpen(!open)}
                              ></i>
                            </div>
                          </>
                        ))}
                        <div style={{ display: open ? 'none' : 'block' }}>
                          {item?.addresses?.slice(0, 1).map((val) => (
                            <p className='example_h3'>{val.display}</p>
                          ))}
                          <hr className='example_hr' />
                          {item?.phones?.slice(0, 1).map((val) => (
                            <p className='example_p'>
                              {val.display_international}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Accordion.Header>

                    <Accordion.Body>
                      <div className='search-module__datail'>
                        <div className='search-module__all'>
                          <label>Email</label>
                          {item?.emails?.content
                            ? item?.emails?.slice(0, 1).map((val) => (
                                <span className='search-module__all--desc'>
                                  {item?.emails?.content}
                                  <p className='search-module__all--desc--note'></p>
                                </span>
                              ))
                            : 'No email found'}
                        </div>
                        <div className='search-module__all'>
                          <label>Phones</label>
                          {item?.phones?.slice(0, 1).map((val) => (
                            <span className='search-module__all--desc'>
                              {val.display_international}
                              <p className='search-module__all--desc--note'></p>
                            </span>
                          ))}
                        </div>
                        <div className='search-module__all'>
                          <label>Place</label>
                          {item?.addresses?.slice(0, 1).map((val) => (
                            <span className='search-module__all--desc'>
                              {val.display}
                              <p className='search-module__all--desc--note'></p>
                            </span>
                          ))}
                        </div>
                        <div className='search-module__all'>
                          <label>Career</label>
                          {item?.addresses?.slice(0, 1).map((val) => (
                            <span className='search-module__all--desc'>
                              {val.display}
                              <p className='search-module__all--desc--note'></p>
                            </span>
                          ))}
                        </div>
                        <div className='search-module__all'>
                          <label>Source</label>
                          <span className='search-module__all--desc'>
                            766 102 0101
                            <p className='search-module__all--desc--note'></p>
                          </span>
                        </div>
                      </div>
                    </Accordion.Body>
                  </>
                )}
              </Accordion.Item>
            </Accordion>
          ))}
        {names && (
          <>
            <div className='name_nav'>
              <div className='side-filter-bar'>
                <Nav defaultActiveKey='/home' className='flex-column'>
                  <Nav.Link eventKey='disabled' disabled>
                    Resultados para:
                  </Nav.Link>
                  <Nav.Link href=''>{names[0].display}</Nav.Link>
                  <Nav.Link eventKey=''>Javier Benítez</Nav.Link>
                  <Nav.Link eventKey='disabled' disabled>
                    Filtros:
                  </Nav.Link>
                </Nav>
                <div className='check-box-containers'>
                  <span className='parent-check-box'>
                    <input
                      type='checkbox'
                      id='vehicle1'
                      name='vehicle1'
                      value='Bike'
                    />
                    <label for='vehicle1'>Todas las direcciones</label>
                  </span>
                  <span className='parent-check-box'>
                    <input
                      type='checkbox'
                      id='vehicle1'
                      name='vehicle1'
                      value='Bike'
                    />
                    <label for='vehicle1'>Estados Unidos</label>
                  </span>
                  <span className='sub-check-box'>
                    <input
                      type='checkbox'
                      id='vehicle1'
                      name='vehicle1'
                      value='Bike'
                    />
                    <label for='vehicle1'> I have a bike</label>
                    <br></br>
                  </span>
                  <span className='sub-check-box'>
                    <input
                      type='checkbox'
                      id='vehicle1'
                      name='vehicle1'
                      value='Bike'
                    />
                    <label for='vehicle1'> I have a bike</label>
                  </span>
                  <span className='sub-check-box'>
                    <input
                      type='checkbox'
                      id='vehicle1'
                      name='vehicle1'
                      value='Bike'
                    />
                    <label for='vehicle1'> I have a bike</label>
                  </span>
                  <span className='parent-check-box'>
                    <input
                      type='checkbox'
                      id='vehicle1'
                      name='vehicle1'
                      value='Bike'
                    />
                    <label for='vehicle1'>México</label>
                  </span>
                  <span className='sub-check-box'>
                    <input
                      type='checkbox'
                      id='vehicle1'
                      name='vehicle1'
                      value='Bike'
                    />
                    <label for='vehicle1'> I have a bike</label>
                    <br></br>
                  </span>
                  <span className='sub-check-box'>
                    <input
                      type='checkbox'
                      id='vehicle1'
                      name='vehicle1'
                      value='Bike'
                    />
                    <label for='vehicle1'> I have a bike</label>
                  </span>
                  <span className='sub-check-box'>
                    <input
                      type='checkbox'
                      id='vehicle1'
                      name='vehicle1'
                      value='Bike'
                    />
                    <label for='vehicle1'> I have a bike</label>
                  </span>
                  <span className='parent-check-box'>
                    <input
                      type='checkbox'
                      id='vehicle1'
                      name='vehicle1'
                      value='Bike'
                    />
                    <label for='vehicle1'>Todas las edades</label>
                  </span>
                  <span className='sub-check-box'>
                    <input
                      type='checkbox'
                      id='vehicle1'
                      name='vehicle1'
                      value='Bike'
                    />
                    <label for='vehicle1'>18-30 años</label>
                  </span>
                  <span className='sub-check-box'>
                    <input
                      type='checkbox'
                      id='vehicle1'
                      name='vehicle1'
                      value='Bike'
                    />
                    <label for='vehicle1'>30-40 años</label>
                  </span>{' '}
                  <span className='sub-check-box'>
                    <input
                      type='checkbox'
                      id='vehicle1'
                      name='vehicle1'
                      value='Bike'
                    />
                    <label for='vehicle1'>50-60 años</label>
                  </span>
                  <span className='sub-check-box'>
                    <input
                      type='checkbox'
                      id='vehicle1'
                      name='vehicle1'
                      value='Bike'
                    />
                    <label for='vehicle1'>más de 60 años</label>
                  </span>
                </div>
              </div>

              <div>
                {mainData.map((item, index) => (
                  <Accordion defaultActiveKey='0' className='example_main'>
                    <Accordion.Item eventKey='0' key='0'>
                      {item?.names && (
                        <>
                          <Accordion.Header onClick={() => setOpen(!open)}>
                            <div className=''>
                              {item?.names?.slice(0, 1).map((val) => (
                                <>
                                  <div className='whatever2'>
                                    <Link
                                      to='/userDetails'
                                      name={val.display}
                                      style={{ textDecoration: 'none' }}
                                      state={{
                                        val: val.display,
                                        state: val1.state,
                                      }}
                                    >
                                      <h4 className='example_h5'>
                                        {val.display}
                                      </h4>
                                    </Link>
                                    <i
                                      class='fa-solid fa-circle-chevron-right'
                                      onClick={() => setOpen(!open)}
                                    ></i>
                                  </div>
                                </>
                              ))}
                              <div style={{ display: open ? 'none' : 'block' }}>
                                {item?.addresses?.slice(0, 1).map((val) => (
                                  <p className='example_h3'>{val.display}</p>
                                ))}
                                <hr className='example_hr' />
                                {item?.phones?.slice(0, 1).map((val) => (
                                  <p className='example_p'>
                                    {val.display_international}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </Accordion.Header>

                          <Accordion.Body>
                            <div className='search-module__datail'>
                              <div className='search-module__all'>
                                <label>Email</label>
                                {item?.emails?.content
                                  ? item?.emails?.slice(0, 1).map((val) => (
                                      <span className='search-module__all--desc'>
                                        {item?.emails?.content}
                                        <p className='search-module__all--desc--note'></p>
                                      </span>
                                    ))
                                  : 'No email found'}
                              </div>
                              <div className='search-module__all'>
                                <label>Phones</label>
                                {item?.phones?.slice(0, 1).map((val) => (
                                  <span className='search-module__all--desc'>
                                    {val.display_international}
                                    <p className='search-module__all--desc--note'></p>
                                  </span>
                                ))}
                              </div>
                              <div className='search-module__all'>
                                <label>Place</label>
                                {item?.addresses?.slice(0, 1).map((val) => (
                                  <span className='search-module__all--desc'>
                                    {val.display}
                                    <p className='search-module__all--desc--note'></p>
                                  </span>
                                ))}
                              </div>
                              <div className='search-module__all'>
                                <label>Career</label>
                                {item?.addresses?.slice(0, 1).map((val) => (
                                  <span className='search-module__all--desc'>
                                    {val.display}
                                    <p className='search-module__all--desc--note'></p>
                                  </span>
                                ))}
                              </div>
                              <div className='search-module__all'>
                                <label>Source</label>
                                <span className='search-module__all--desc'>
                                  766 102 0101
                                  <p className='search-module__all--desc--note'></p>
                                </span>
                              </div>
                            </div>
                          </Accordion.Body>
                        </>
                      )}
                    </Accordion.Item>
                  </Accordion>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Example
