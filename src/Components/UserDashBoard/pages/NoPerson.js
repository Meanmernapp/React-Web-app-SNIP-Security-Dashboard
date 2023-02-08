import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { Image } from 'react-bootstrap'

import { AppContext } from '../../../App'
import { useNavigate } from 'react-router-dom'
import img1 from '../../../images/Password/SNIP-SMALL.png'
import img2 from '../../../images/search.png'
import ic_cancel from '../../../images/ic-cancel.svg'

const NoPerson = () => {
  let navigate = useNavigate()
  const [check, setCheck] = useState('')
  const [checked, setChecked] = useState(0)
  const { val1, val2 } = useContext(AppContext)
  const [imgR, setImgR] = useState()
  const [message, setMessage] = useState('')
  const [oopen, setOopen] = useState(true)
  const [mainValue, setMainValue] = useState()
  const [mainPhone, setMainPhone] = useState([])
  const [abi, setAbi] = useState()
  const [text, setText] = useState()
  const [location, setLocation] = useState()
  const [open, setOpen] = useState(false)
  const [openn, setOpenn] = useState(true)
  const [aText, setLinkText] = useState('Búsqueda avanzada')

  const checkInput = (e) => {
    e.preventDefault()
    setText(e.target.value)
  }
  const checkLocation = (e) => {
    setLocation(e.target.value)
  }
  const [nameValues, setNameValues] = useState([
    { first: '', middle: '', last: '' },
  ])
  const [emailValues, setEmailValues] = useState([{ address: '' }])
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
      degree: '',
    },
  ])
  const [employeeValues, setEmployeeValues] = useState([
    {
      organization: '',
      title: '',
    },
  ])
  const [userNameValues, setUserNameValues] = useState()
  const [directionValues, setDirectionValues] = useState([
    { zip: '', city: '', state: '', country: '' },
  ])
  const [associateValues, setAssociateValues] = useState([
    { first: '', middle: '', last: '' },
  ])
  console.log(val1.state.inputText)
  let prevValue = val1.state.inputText

  console.log(prevValue)
  console.log('Kainat')
  let kai
  useEffect(() => {
    setText(val1.state.inputText)
    setLocation(val1.state.inputLocation)
  }, [val1.state.inputText, val1.state.inputLocation])

  useEffect(() => {
    const fetchData = async () => {
      if (mainValue) {
        console.log(mainValue)
        let cd = JSON.stringify(mainValue)
        console.log(
          `https://api.pipl.com/search/?key=n6fggbf0hqfr896xrdq16qkc&show_sources=matching&person=${cd}`
        )
        await axios
          .get(
            //`http://35.162.205.94/piplresponses/as06071312.txt`
            `https://api.pipl.com/search/?key=n6fggbf0hqfr896xrdq16qkc&show_sources=matching&person=${cd}`
            // `https://api.pipl.com/search/?phone=${myArray[0]}+${myArray[1]}&key=n6fggbf0hqfr896xrdq16qkc`
          )
          .then(function (response) {
            if (response.data.possible_persons) {
              val1.dispatch({ type: 'UPDATE_INPUT', data: response?.data })
              navigate('/example')
            } else if (response.data.person) {
              val1.dispatch({ type: 'UPDATE_INPUT', data: response?.data })
              navigate('/userDetails')
            } else {
              console.log(response.data)
              val1.dispatch({ type: 'UPDATE_INPUT', data: response?.data })
              navigate('/noPerson')
            }
          })
      }
    }

    fetchData()
  }, [mainPhone, mainValue, abi])
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
  var ac, ad
  let handleChangeforPhone = (i, e) => {
    if (e.target.name === 'countryCode') {
      let newPhoneValues = [...phoneValues]
      newPhoneValues[i][e.target.name] = e.target.value

      setPhoneValues(newPhoneValues)
      console.log(phoneValues)
    } else {
      console.log('rrrrrrrrrrrrrrr')
      let handlePhone = (i, e) => {
        let newPhoneValues = [...phoneValues]
        newPhoneValues[i][e.target.name] = e.target.value

        setPhoneValues(newPhoneValues)
        console.log(phoneValues)
      }
      handlePhone(i, e)
    }
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
    console.log(e.target.name)
    newEmailValues[i][e.target.name] = e.target.value
    setEmailValues(newEmailValues)
  }
  let handleChangeforAge = (i, e) => {
    let newAgeValues = [...ageValues]
    newAgeValues[i][e.target.name] = e.target.value
    setAgeValues(newAgeValues)
  }
  let handleChangeforUserName = (e) => {
    setMessage(e.target.value)

    console.log('value is:', e.target.value)
  }
  let handleChangeforDirection = (i, e) => {
    let newDirectionValues = [...directionValues]
    newDirectionValues[i][e.target.name] = e.target.value
    setDirectionValues(newDirectionValues)
  }

  let addFormFieldsForName = () => {
    setNameValues([...nameValues, { first: '', middle: '', last: '' }])
  }
  let addFormFieldsForAssociates = () => {
    setAssociateValues([
      ...associateValues,
      { first: '', middle: '', last: '' },
    ])
  }
  let addFormFieldsForPhone = () => {
    setPhoneValues([...phoneValues, { countryCode: '', phone: '' }])
  }
  let addFormFieldsForEducation = () => {
    setEducationValues([...educationValues, { school: '', degree: '' }])
  }
  let addFormFieldsForEmployee = () => {
    setEmployeeValues([...employeeValues, { organization: '', title: '' }])
  }
  let addFormFieldsForDirection = () => {
    setDirectionValues([
      ...directionValues,
      { zip: '', city: '', state: '', country: '' },
    ])
  }

  let addFormFieldsForEmail = () => {
    setEmailValues([...emailValues, { address: '' }])
  }
  let addFormFieldsForAge = () => {
    setAgeValues([...ageValues, { age: '' }])
  }
  let addFormFieldsForUserName = () => {
    setUserNameValues([...userNameValues, { username: '' }])
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

  useEffect(() => {
    const fetchData = async () => {
      if (mainValue) {
        console.log(mainValue)
        let cd = JSON.stringify(mainValue)
        console.log(
          `https://api.pipl.com/search/?key=n6fggbf0hqfr896xrdq16qkc&show_sources=matching&person=${cd}`
        )
        await axios
          .get(
            //`http://35.162.205.94/piplresponses/as06071312.txt`
            `https://api.pipl.com/search/?key=n6fggbf0hqfr896xrdq16qkc&show_sources=matching&person=${cd}`
            // `https://api.pipl.com/search/?phone=${myArray[0]}+${myArray[1]}&key=n6fggbf0hqfr896xrdq16qkc`
          )
          .then(function (response) {
            if (response.data.possible_persons) {
              val1.dispatch({ type: 'UPDATE_INPUT', data: response?.data })
              navigate('/example')
            } else if (response.data.person) {
              val1.dispatch({ type: 'UPDATE_INPUT', data: response?.data })
              navigate('/userDetails')
            } else {
              console.log(response.data)
              val1.dispatch({ type: 'UPDATE_INPUT', data: response?.data })
              navigate('/noPerson')
            }
          })
      }
    }

    fetchData()
  }, [mainPhone, mainValue, abi])

  const searchMe = async () => {
    val1.dispatch({ type: 'UPDATE_TEXT', data: text })
    val1.dispatch({ type: 'UPDATE_LOCATION', data: location })
    if (text.includes('@')) {
      if (location) {
        console.log('11111111111111111')
        await axios
          .get(
            // `http://35.162.205.94/piplresponses/aneliavelinogmailcom.txt`

            `https://api.pipl.com/search/?email=${text}&location=${location}&key=n6fggbf0hqfr896xrdq16qkc`
          )
          .then(function (response) {
            console.log(Response)
            if (response.data.possible_persons) {
              val1.dispatch({ type: 'UPDATE_INPUT', data: response?.data })
              navigate('/example')
            } else if (response.data.person) {
              val1.dispatch({ type: 'UPDATE_INPUT', data: response?.data })
              navigate('/userDetails')
            } else {
              console.log(response.data)
              val1.dispatch({ type: 'UPDATE_INPUT', data: response?.data })
              navigate('/noPerson')
            }
          })
      } else {
        console.log('2222222222222')
        await axios
          .get(
            // `http://35.162.205.94/piplresponses/luiscornejo96hotmail.txt`

            `https://api.pipl.com/search/?email=${text}&key=n6fggbf0hqfr896xrdq16qkc`
          )
          .then(function (response) {
            if (response.data.possible_persons) {
              console.log(response.data)

              console.log('Fatima')
              val1.dispatch({ type: 'UPDATE_INPUT', data: response?.data })
              navigate('/example')
            } else if (response.data.person) {
              console.log(response?.data)
              val1.dispatch({ type: 'UPDATE_INPUT', data: response?.data })
              console.log('Asra')
              navigate('/userDetails')
            } else {
              console.log('urghhhhhhhhhhhh')
              val1.dispatch({ type: 'UPDATE_INPUT', data: response?.data })
              navigate('/noPerson')
            }
          })
      }
    } else {
      const myArray = text.split(' ')
      const arrayLength = myArray.length
      if (arrayLength > 1) {
        if (arrayLength === 2) {
          if (location) {
            if (isNaN(myArray[0])) {
              console.log('33333333333333333')
              await axios
                .get(
                  `https://api.pipl.com/search/?first_name=${myArray[0]}&last_name=${myArray[1]}&location=${location}&key=n6fggbf0hqfr896xrdq16qkc`
                  //`http://35.162.205.94/piplresponses/aneliavelinogarcia.txt`
                )
                .then(function (response) {
                  if (response) {
                    val1.dispatch({
                      type: 'UPDATE_INPUT',
                      data: response?.data,
                    })
                    navigate('/example')
                  }
                })
            } else {
              console.log('44444444444444444')
              await axios
                .get(
                  `https://api.pipl.com/search/?phone=${myArray[0]}+${myArray[1]}&location=${location}&key=n6fggbf0hqfr896xrdq16qkc`
                  //`http://35.162.205.94/piplresponses/aneliavelinogarcia.txt`
                )
                .then(function (response) {
                  if (response) {
                    if (response.data)
                      val1.dispatch({
                        type: 'UPDATE_INPUT',
                        data: response?.data,
                      })
                    navigate('/example')
                  }
                })
            }
          } else {
            if (isNaN(myArray[0])) {
              console.log('5555555555555555555')
              await axios
                //
                .get(
                  `https://api.pipl.com/search/?first_name=${myArray[0]}&last_name=${myArray[1]}&key=n6fggbf0hqfr896xrdq16qkc`
                )
                .then(function (response) {
                  if (response) {
                    val1.dispatch({
                      type: 'UPDATE_INPUT',
                      data: response?.data,
                    })
                    navigate('/example')
                  }
                })
            } else {
              console.log('66666666666666666 - double check')
              await axios
                .get(
                  //`http://35.162.205.94/piplresponses/528119655503.txt`
                  `https://api.pipl.com/search/?phone=${myArray[0]}+${myArray[1]}&key=n6fggbf0hqfr896xrdq16qkc`
                )
                .then(function (response) {
                  if (response) {
                    console.log('Kainat')
                    console.log(response?.data)
                    //console.log("----------------------------");
                    console.log(response?.data)
                    val1.dispatch({
                      type: 'UPDATE_INPUT',
                      data: response?.data,
                    })
                    navigate('/example')
                  }
                })
            }
          }
        } else {
          if (location) {
            console.log('777777777777777777')
            console.log(`kainat${myArray[1]}kiran`)
            if (myArray[1] === ' ') {
              console.log('double check')
              await axios
                .get(
                  `https://api.pipl.com/search/?first_name=${myArray[0]}&last_name=${myArray[2]}&location=${location}&key=n6fggbf0hqfr896xrdq16qkc`
                  //`http://35.162.205.94/piplresponses/aneliavelinogarcia.txt`
                )
                .then(function (response) {
                  if (response) {
                    val1.dispatch({
                      type: 'UPDATE_INPUT',
                      data: response?.data,
                    })
                    navigate('/example')
                  }
                })
            } else {
              console.log(`kainat${myArray[1]}kiran`)

              await axios
                .get(
                  `https://api.pipl.com/search/?first_name=${myArray[0]}&middle_name=${myArray[1]}&last_name=${myArray[2]}&location=${location}&key=n6fggbf0hqfr896xrdq16qkc`
                  //`http://35.162.205.94/piplresponses/aneliavelinogarcia.txt`
                )
                .then(function (response) {
                  if (response) {
                    val1.dispatch({
                      type: 'UPDATE_INPUT',
                      data: response?.data,
                    })
                    navigate('/example')
                  }
                })
            }
          } else {
            console.log('88888888888888888')
            console.log(`kainat${myArray[1]}kiran`)
            console.log(myArray[2])
            console.log('javier')

            if (myArray[1] === '') {
              console.log('double check!!!!!!!')
              await axios
                .get(
                  `https://api.pipl.com/search/?first_name=${myArray[0]}&last_name=${myArray[2]}&key=n6fggbf0hqfr896xrdq16qkc`
                  //`http://35.162.205.94/piplresponses/aneliavelinogarcia.txt`
                )
                .then(function (response) {
                  if (response) {
                    val1.dispatch({
                      type: 'UPDATE_INPUT',
                      data: response?.data,
                    })
                    navigate('/example')
                  }
                })
            } else {
              console.log('Shikarpur')
              await axios
                .get(
                  `https://api.pipl.com/search/?first_name=${myArray[0]}&middle_name=${myArray[1]}&last_name=${myArray[2]}&key=n6fggbf0hqfr896xrdq16qkc`
                  //`http://35.162.205.94/piplresponses/aneliavelinogarcia.txt`
                )
                .then(function (response) {
                  if (response) {
                    val1.dispatch({
                      type: 'UPDATE_INPUT',
                      data: response?.data,
                    })
                    navigate('/example')
                  }
                })
            }
          }
        }
      } else {
        if (location) {
          if (isNaN(myArray[0])) {
            console.log('999999999999999999')
            await axios
              .get(
                `https://api.pipl.com/search/?username=${myArray[0]}&location=${location}&key=n6fggbf0hqfr896xrdq16qkc`
                //`http://35.162.205.94/piplresponses/luiscornejo96hotmail.txt`
              )
              .then(function (response) {
                if (response) {
                  val1.dispatch({ type: 'UPDATE_INPUT', data: response?.data })
                  navigate('/example')
                }
              })
          }
        } else {
          if (isNaN(myArray[0])) {
            console.log('1000000000000000000000000')
            await axios
              .get(
                //`http://35.162.205.94/piplresponses/luiscornejo96hotmail.txt`
                `https://api.pipl.com/search/?username=${myArray[0]}&key=n6fggbf0hqfr896xrdq16qkc`
              )
              .then(function (response) {
                console.log(response)
                if (response) {
                  val1.dispatch({ type: 'UPDATE_INPUT', data: response?.data })
                  navigate('/example')
                }
              })
          }
        }
      }
    }
  }
  function handleClick() {
    if (aText == 'Búsqueda avanzada') {
      setLinkText('Búsqueda básica')
    } else {
      setLinkText('Búsqueda avanzada')
    }
  }
  const advFunction = async (e) => {
    if (phoneValues[0].countryCode !== '') {
      let arr = mainPhone
      phoneValues.map((item) => {
        arr.push({
          raw: '+' + item.countryCode + ' ' + item.phone,
        })
        setMainPhone([
          ...mainPhone,
          {
            raw: '+' + item.countryCode + ' ' + item.phone,
          },
        ])
      })
      setMainValue({
        ...mainValue,
        names: nameValues,
        emails: emailValues,
        phones: arr,
        addresses: directionValues,
        educations: educationValues,
        jobs: employeeValues,
        relationships: abi,
      })
    }
    if (associateValues[0].first !== '') {
      console.log('kaleem')
      console.log(associateValues)
      setAbi([{ ...abi, names: associateValues }])
      console.log(abi)
    }

    console.log('buzzzzzzzzzzzzzzzzzzzzzzzzzzzzz')
    console.log(kai)
    e.preventDefault()

    if (userNameValues !== '') {
      console.log(message)
      let cd = JSON.stringify(userNameValues)
      console.log(
        `https://api.pipl.com/search/?key=n6fggbf0hqfr896xrdq16qkc&show_sources=matching&username=${message}`
      )

      console.log('111111')
      await axios
        .get(
          //`http://35.162.205.94/piplresponses/advancedsearch1.txt`
          `https://api.pipl.com/search/?key=n6fggbf0hqfr896xrdq16qkc&show_sources=matching&username=${message}`
          //`https://api.pipl.com/search/?phone=${myArray[0]}+${myArray[1]}&key=n6fggbf0hqfr896xrdq16qkc`
        )
        .then(function (response) {
          if (response.data.possible_persons) {
            val1.dispatch({ type: 'UPDATE_INPUT', data: response?.data })
            navigate('/example')
          } else if (response.data.person) {
            val1.dispatch({ type: 'UPDATE_INPUT', data: response?.data })
            navigate('/userDetails')
          } else {
            console.log(response.data)
            val1.dispatch({ type: 'UPDATE_INPUT', data: response?.data })
            navigate('/noPerson')
          }
        })
    } else {
    }
  }

  const keydown = (e) => {
    if (e.key === 13) {
      e.preventDefault()
      searchMe()
    }
  }
  console.log('Javiereeeeee')
  console.log(val1.state.name)

  console.log({ text })

  return (
    <div div className='home container'>
      <div className='ex_input_div'>
        <Image className='ex_main_img' src={img1} />
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='ex_main_input'>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <input
                type='text'
                className='search_input_one'
                placeholder='Name, Email, Username or Phone'
                onChange={checkInput}
                name=''
                id=''
                value={text}
              />
              <img
                src={ic_cancel}
                className='ic_cancel'
                onClick={() => {
                  console.log('setText')
                  setText('')
                }}
              />
            </div>
            <span className='search_span'></span>
            <input
              type='text'
              className='search_input_two'
              placeholder='Location (optional)'
              onChange={checkLocation}
              value={location}
              name=''
              id=''
            />
            <button
              className='search_button'
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  searchMe()
                  e.preventDefault()
                }
              }}
              onClick={searchMe}
            >
              <i class='fa-solid fa-magnifying-glass search_icon'></i>
            </button>
          </div>
        </form>
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
                      name='first'
                      value={element.first || ''}
                      placeholder='Nombre(s)'
                      onChange={(e) => handleChangeforName(index, e)}
                    />
                  </div>
                  <div class='col-sm'>
                    <input
                      type='text'
                      className='form-control'
                      name='middle'
                      value={element.middle || ''}
                      placeholder='Apellido paterno'
                      onChange={(e) => handleChangeforName(index, e)}
                    />
                  </div>
                  <div class='col-sm'>
                    <input
                      type='text'
                      className='form-control'
                      name='last'
                      value={element.last || ''}
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
                      name='address'
                      value={element.address || ''}
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
                      name='zip'
                      value={element.zip || ''}
                      placeholder='Casa'
                      onChange={(e) => handleChangeforDirection(index, e)}
                    />
                  </div>
                  <div className='col-sm'>
                    <input
                      type='text'
                      className='form-control'
                      name='city'
                      value={element.city || ''}
                      placeholder='Calle'
                      onChange={(e) => handleChangeforDirection(index, e)}
                    />
                  </div>
                  <div className='col-sm'>
                    <input
                      type='text'
                      className='form-control'
                      name='state'
                      value={element.state || ''}
                      placeholder='C.P.'
                      onChange={(e) => handleChangeforDirection(index, e)}
                    />
                  </div>
                  <div className='col-sm'>
                    <input
                      type='text'
                      className='form-control'
                      name='country'
                      value={element.country || ''}
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
                      name='first'
                      value={element.first || ''}
                      placeholder='Nombre(s)'
                      onChange={(e) => handleChangeforAssociates(index, e)}
                    />
                  </div>
                  <div className='col-sm'>
                    <input
                      type='text'
                      className='form-control'
                      name='middle'
                      value={element.middle || ''}
                      placeholder='Apellido paterno'
                      onChange={(e) => handleChangeforAssociates(index, e)}
                    />
                  </div>
                  <div className='col-sm'>
                    <input
                      type='text'
                      className='form-control'
                      name='last'
                      value={element.last || ''}
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
                      name='degree'
                      value={element.degree || ''}
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
                      name='organization'
                      value={element.organization || ''}
                      placeholder='Organización'
                      onChange={(e) => handleChangeforEmployee(index, e)}
                    />
                  </div>
                  <div className='col-sm'>
                    <input
                      type='text'
                      className='form-control'
                      name='title'
                      value={element.title || ''}
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

          <button className='searchM_button_submit' onClick={advFunction}>
            BUSCAR
          </button>
        </form>
      </div>
      <div className='noPerson'>
        <Image src={img2} className='noPerson__img' />
        <p className='noPerson__p'>No se encontraron resultados</p>
      </div>
    </div>
  )
}

export default NoPerson
