import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AppContext } from '../../../App'
import { FaShareSquare, FaInstagram } from 'react-icons/fa'
import { BsFacebook, BsPinterest } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img1 from '../../../images/NavBar/SNIP-MEDIUM.png'
import { useNavigate } from 'react-router-dom'
import img5 from '../../../images/NavBar/Icons---Social-Icons---Source---Facebook.svg'
import img2 from '../../../images/NavBar/Icons---Social-Icons---Source---Instagram.svg'
import img3 from '../../../images/NavBar/Icons---Social-Icons---Source---Pinterest.svg'
import img4 from '../../../images/NavBar/Icons---Social-Icons---Source---Twitter.svg'
import ic_cancel from '../../../images/ic-cancel.svg'

import axios from 'axios'
const MoreDetails = () => {
  const [open, setOpen] = useState(true)
  const loc = useLocation()
  const [openn, setOpenn] = useState(true)
  const [data, setData] = useState(true)
  let item, kai
  let abc = true
  const [mainValue, setMainValue] = useState()
  const [mainPhone, setMainPhone] = useState([])
  const [abi, setAbi] = useState()
  const [message, setMessage] = useState('')
  const [aText, setLinkText] = useState('Búsqueda avanzada')

  const { val1, val2 } = useContext(AppContext)
  let valt
  console.log(val1.state.name)
  console.log(val1.state.name.person)
  const { query } = val1.state.name
  console.log(query)
  let phone
  const { state } = loc

  let userNames
  if (query.phones) {
    console.log('phone')

    phone = query.phones
    console.log('2........................,,,,,,,,,,,,.............')
  } else if (query.usernames) {
    userNames = query.usernames
  }
  if (
    query.names &&
    query.names.length === 1 &&
    !query.emails &&
    !query.phones
  ) {
    console.log('location')
    // console.log(val)
  } else if (
    (query.names && query.names.length >= 1) ||
    query.emails ||
    query.phones
  ) {
    console.log('Multiple queries')
    // console.log('Laptop')
    // console.log(names)
  }

  let navigate = useNavigate()
  const [location, setLocation] = useState()
  const [text, setText] = useState()
  const fbVal = []
  const fbHref = []
  const tVal = []
  const tHref = []
  const pVal = []
  const pHref = []
  const iVal = []
  const iHref = []
  const liVal = []
  const liHref = []
  var mainData = val1.state.name.possible_persons
  // {
  //   mainData.map((item) => {
  //     console.log(item?.names?.[0].display)
  //     console.log('Javier')
  //     console.log(val)
  //   })
  // }
  // useEffect(() => {
  //   {
  //     if (val1.state.name.possible_persons) {
  //       console.log('inside if')
  //       mainData.map(async (item) => {
  //         console.log('----------------')
  //         console.log(item?.names?.[0].display)
  //         // console.log(val)
  //         console.log('*******************')
  //         if (item?.names?.[0].display === state?.val) {
  //           console.log('inside iff')
  //           await axios
  //             .get(
  //               // 'http://35.162.205.94/piplresponses/sp_valeria_email.txt'

  //               `https://api.pipl.com/search/?search_pointer=${item?.['@search_pointer']}&key=n6fggbf0hqfr896xrdq16qkc`
  //             )
  //             .then((response) => {
  //               val2.dispatch1({
  //                 type: 'UPDATE_INPUT',
  //                 data: response?.data,
  //               })
  //             })
  //             .catch((error) => {
  //               console.log(error.response)
  //             })
  //         }
  //       })
  //     }
  //   }
  // }, [state])
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
  const [userNameValues, setUserNameValues] = useState([{ userName: '' }])
  const [directionValues, setDirectionValues] = useState([
    { house: '', street: '', cp: '', csc: '' },
  ])
  const [associateValues, setAssociateValues] = useState([
    { associate1: '', associate2: '', associate3: '' },
  ])
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
    setUserNameValues([...userNameValues, { userName: '' }])
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

  // http://api.pipl.com/search/?search_pointer=SEARCH_POINTER_STRING&key=YOURKEY
  // console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz')

  if (
    (query.names &&
      query.names.length === 1 &&
      !query.emails &&
      !query.phones &&
      !query.addresses &&
      !query.educations &&
      !query.jobs) ||
    userNames ||
    phone
  ) {
    console.log('sssssssssssssssss')
    if(val1.state.name.person)
      item = val1.state.name.person
    else
      item = val2.state1.name.person
    console.log(item)
    abc = false
    {
      item?.user_ids?.map((bla, index) => {
        if (bla.content.includes('facebook')) {
          console.log(bla.content.split('@')[0])
          fbVal.push(bla.content.split('@')[0])
          fbHref.push(`https://www.facebook.com/${bla.content.split('@')[0]}`)
        }
      })
    }
    {
      item?.user_ids?.map((bla, index) => {
        if (bla.content.includes('linkedin')) {
          console.log('Marzia')
          console.log(bla.content.split('@')[0])
          liVal.push(bla.content.split('@')[0])
          liHref.push(`https://www.linkedin.com/${bla.content.split('@')[0]}`)
        }
      })
    }
    {
      liHref.map((item) => {
        console.log('Tanzeel')
        console.log(item)
      })
    }
    {
      item?.user_ids?.map((bla, index) => {
        if (bla.content.includes('twitter')) {
          console.log(bla.content.split('@')[0])
          tVal.push(bla.content.split('@')[0])
          tHref.push(`https://www.twitter.com/${bla.content.split('@')[0]}`)
        }
      })
    }

    {
      item?.user_ids?.map((bla, index) => {
        if (bla.content.includes('pinterest')) {
          console.log(bla.content.split('@')[0])

          pVal.push(bla.content.split('@')[0])
          pHref.push(`https://www.pinterest.com/${bla.content.split('@')[0]}`)
        }
      })
    }
    {
      item?.user_ids?.map((bla, index) => {
        if (bla.content.includes('instagram')) {
          console.log(bla.content.split('@')[0])
          iVal.push(bla.content.split('@')[0])
          iHref.push(`https://www.instagram.com/${bla.content.split('@')[0]}/`)
        }
      })
    }
  } else if (
    (query.names && query.names.length >= 1) ||
    query.emails ||
    query.phones ||
    query.educations ||
    query.jobs ||
    query.addresses ||
    query.email
  ) {
    // console.log('ABL')
    // console.log(val1.state.name)
    if (val1.state.name.possible_persons) {
      abc = false
      item = val2.state1.name.person
    } else if (val1.state.name.person) {
      console.log('Pakistan')
      if (query.emails) {
        console.log('Sumeet')
        abc = true
        item = val1.state.name.person
        console.log(item)
        console.log('Daniyal Shah')
      } else if (
        (query.names && query.names.length >= 1) ||
        (query.names && query.names.length >= 1 && query.emails) ||
        query.phones
      ) {
        console.log('Sumeet')
        abc = true
        item = val1.state.name.person
        console.log(item)
      }
    }

    {
      item?.user_ids?.map((bla, index) => {
        if (bla.content.includes('facebook')) {
          console.log(bla.content.split('@')[0])
          fbVal.push(bla.content.split('@')[0])
          fbHref.push(`https://www.facebook.com/${fbVal[index]}`)
        }
      })
    }
    {
      item?.user_ids?.map((bla, index) => {
        if (bla.content.includes('twitter')) {
          console.log(bla.content.split('@')[0])
          tVal.push(bla.content.split('@')[0])

          tHref.push(`https://www.twitter.com/${bla.content.split('@')[0]}`)
        }
      })
    }

    {
      item?.user_ids?.map((bla, index) => {
        if (bla.content.includes('pinterest')) {
          console.log(bla.content.split('@')[0])
          pVal.push(bla.content.split('@')[0])
          pHref.push(`https://www.linkedin.com/${pVal[index]}`)
        }
      })
    }
    {
      item?.user_ids?.map((bla, index) => {
        if (bla.content.includes('linkedin')) {
          console.log('Aishay')
          console.log(bla.content.split('@')[0])
          liVal.push(bla.content.split('@')[0])
          liHref.push(`https://www.linkedin.com/${liVal[index]}`)
        }
      })
    }
    {
      item?.user_ids?.map((bla, index) => {
        if (bla.content.includes('instagram')) {
          console.log(bla.content.split('@')[0])
          iVal.push(bla.content.split('@')[0])
          iHref.push(`https://www.instagram.com/${iVal[index]}/`)
        }
      })
    }
  }
  function handleClick() {
    if (aText == 'Búsqueda avanzada') {
      setLinkText('Búsqueda básica')
    } else {
      setLinkText('Búsqueda avanzada')
    }
  }
  {
    tVal.map((item) => console.log(item))
    fbVal.map((item) => console.log(item))
    iVal.map((item) => console.log(item))
    pVal.map((item) => console.log(item))
    liVal.map((item) => console.log(item))
    tHref.map((item) => console.log(item))
    fbHref.map((item) => console.log(item))
    iHref.map((item) => console.log(item))
    pHref.map((item) => console.log(item))
    liHref.map((item) => console.log(item))
  }

  const checkInput = (e) => {
    e.preventDefault()
    setText(e.target.value)
  }
  const checkLocation = (e) => {
    setLocation(e.target.value)
  }
  const searchMe = async () => {
    if (text.includes('@')) {
      if (location) {
        console.log('11111111111111111')
        await axios
          .get(
            // `http://35.162.205.94/piplresponses/aneliavelinogmailcom.txt`
            `https://api.pipl.com/search/?email=${text}&location=${location}&key=n6fggbf0hqfr896xrdq16qkc`
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
        console.log('2222222222222')
        await axios
          .get(
            //`http://35.162.205.94/piplresponses/luiscornejo96hotmail.txt`
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
                  `http://35.162.205.94/piplresponses/528119655503.txt`
                  // `https://api.pipl.com/search/?phone=${myArray[0]}+${myArray[1]}&key=n6fggbf0hqfr896xrdq16qkc`
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
                //
                `https://api.pipl.com/search/?username=${myArray[0]}&location=${location}&key=n6fggbf0hqfr896xrdq16qkc`
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
  console.log(pVal.length)
  console.log(val1.state.name)
  return (
    <>
      {item && (
        <div className='home container'>
          <div style={{ margin: '0 0em 0 4em' }}>
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

          {/* <button className='MoreDetails_print_btn'>
      {abc === true ? (
        <Link
          to='/kainat'
          style={{ textDecoration: 'none' }}
          state={{
            val: val.display,
            state: loc.state,
          }}
        >
          <i class='fa-solid fa-print'></i> Imprimir página
        </Link>
      ) : (
        <Link
          to='/kainat'
          style={{ textDecoration: 'none' }}
          state={{
            val: valt,
            state: val1.state,
          }}
        >
          <i class='fa-solid fa-print'></i> Imprimir página
        </Link>
      )}
    </button> */}
          <div style={{ margin: '0 17em' }}>
            <div className='search-module'>
              <div className='search-module__about'>
                <span className='search-module__name'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '50vw',
                    }}
                  >
                    {item?.names?.[0].display}{' '}
                    {item?.phones ? item?.phones?.[0].number : ''}
                    <div>
                      {tVal.length !== 0 &&
                        tHref.map((item) => (
                          <a href={item} target='_blank'>
                            <img className='socialss' src={img4} />
                          </a>
                        ))}

                      {fbVal.length !== 0 &&
                        fbHref.map((item) => (
                          <a href={item} target='_blank'>
                            <img className='socialss' src={img5} />
                          </a>
                        ))}
                      {pVal.length !== 0 &&
                        pHref.map((item) => (
                          <a href={item} target='_blank'>
                            <img className='socialss' src={img3} />
                          </a>
                        ))}

                      {iVal.length !== 0 &&
                        iHref.map((item) => (
                          <a href={item} target='_blank'>
                            <img className='socialss' src={img2} />
                          </a>
                        ))}
                    </div>
                  </div>
                </span>
                <span className='search-module__self'>
                  {item?.gender && item?.gender?.content}{' '}
                  {item?.gender && <span>,</span>}
                  {item?.languages && (
                    <span>
                      speaks &nbsp;
                      {item?.languages[0]?.language === 'es'
                        ? 'Spanish'
                        : item?.languages[0]?.language === 'en'
                        ? 'English'
                        : item?.languages[0]?.language}
                    </span>
                  )}
                </span>
                <br />
                <span className='search-module__self'>
                  {item?.dob && item?.dob?.display} {item?.dob && ',  '}
                  {item?.dob && item?.dob.date_range?.start}
                </span>
                <div style={{ lineHeight: '0px' }}>
                  {item?.addresses && (
                    <span className='search-module__location'>
                      From {item?.addresses && item?.addresses?.[0].display}
                    </span>
                  )}
                  {/* <span className='search-module__map'>Map View</span> */}
                </div>
              </div>
              <div className='search-module__datail'>
                {item?.emails && (
                  <div className='search-module__all'>
                    <label>Email</label>
                    {item?.emails.map((vals) => (
                      <span className='search-module__all--desc'>
                        {vals?.address}
                        <p className='search-module__all--desc--note'></p>
                      </span>
                    ))}
                  </div>
                )}
                {item?.phones && (
                  <div className='search-module__all'>
                    <label>Phones</label>
                    {item?.phones?.map((val) => (
                      <span className='search-module__all--desc'>
                        {val.number}
                        <p className='search-module__all--desc--note'></p>
                      </span>
                    ))}
                  </div>
                )}
                {(tVal.length !== 0 ||
                  fbVal.length !== 0 ||
                  pVal.length !== 0 ||
                  iVal.length !== 0 ||
                  liVal.length !== 0) && (
                  <div className='search-module__all'>
                    <label>Social</label>
                  </div>
                )}
                {(tVal.length !== 0 ||
                  fbVal.length !== 0 ||
                  pVal.length !== 0 ||
                  iVal.length !== 0 ||
                  liVal.length !== 0) && (
                  <div className='search-module__all sub-socail-sec'>
                    <label>Possibly Related Social</label>

                    {fbVal.length !== 0 && (
                      <span className='search-module__all--desc'>
                        <BsFacebook color='#4267B2' />
                        {fbVal && fbVal}
                        {fbHref.map((fbLink) => (
                          <a
                            className='search-module__all--desc--note'
                            href={fbLink}
                            target='_blank'
                          >
                            FaceBook <FaShareSquare />
                          </a>
                        ))}
                      </span>
                    )}
                    {tVal.length !== 0 && (
                      <span className='search-module__all--desc'>
                        <AiOutlineTwitter color='#1DA1F2' fontSize='14px' />{' '}
                        {tVal && tVal}
                        {tHref.map((tLink) => (
                          <a
                            className='search-module__all--desc--note'
                            href={tLink}
                            target='_blank'
                          >
                            Twitter <FaShareSquare />
                          </a>
                        ))}
                      </span>
                    )}
                    {pVal.length !== 0 && (
                      <h1>Hello Worldddddddddddddddddddd </h1>
                    )}

                    {/* {liVal.length !== 0 && (
                      <span className='search-module__all--desc'>
                        <BsPinterest color='#E60023' />
                        {pVal.length !== 0 && pVal.map((pValL) => pValL)}
                        {pHref.map((pLink) => (
                          <a
                            className='search-module__all--desc--note'
                            target='_blank'
                            href={pLink}
                          >
                            Pintrest <FaShareSquare />
                          </a>
                        ))}
                      </span>
                    )} */}
                    {/* {liVal.length !== 0 && (
                      <span className='search-module__all--desc'>
                        <BsPinterest color='#E60023' />
                        {liVal.length !== 0 && liVal.map((liValL) => liValL)}
                        {liHref.map((liLink) => (
                          <a
                            className='search-module__all--desc--note'
                            target='_blank'
                            href={liLink}
                          >
                            linkedin <FaShareSquare />
                          </a>
                        ))}
                      </span>
                    )} */}
                    {iVal.length !== 0 && (
                      <span className='search-module__all--desc'>
                        <FaInstagram color='#d92f49' />
                        {iVal.length !== 0 && iVal.map((iValL) => iValL)}
                        {iHref.map((iHrefL) => (
                          <a
                            className='search-module__all--desc--note'
                            href={iHrefL}
                            target='_blank'
                          >
                            Instagram <FaShareSquare />
                          </a>
                        ))}
                      </span>
                    )}
                  </div>
                )}
                {item?.urls && (
                  <div className='search-module__all'>
                    <label>URLs</label>
                    {item?.urls.map((val) => (
                      <span className='search-module__all--desc'>
                        <a href={val.url}>
                          {val?.['@name']
                            ? val?.['@name'].toLowerCase()
                            : val?.['@domain'].split('.')[0]}{' '}
                        </a>
                        <p className='search-module__all--desc--note'></p>
                      </span>
                    ))}
                  </div>
                )}
                {item?.addresses && (
                  <div className='search-module__all'>
                    <label>Place</label>
                    {item?.addresses.map((val) => (
                      <span className='search-module__all--desc'>
                        {val.display}
                        <p className='search-module__all--desc--note'></p>
                      </span>
                    ))}
                  </div>
                )}
                {item?.jobs && (
                  <div className='search-module__all'>
                    <label>Career</label>
                    {item?.jobs?.map((val) => (
                      <span className='search-module__all--desc'>
                        {val.display}
                        <p className='search-module__all--desc--note'></p>
                      </span>
                    ))}
                  </div>
                )}
                {item?.names && (
                  <div className='search-module__all'>
                    <label>Additional Names</label>
                    {item?.names?.map((val) => (
                      <>
                        <span className='search-module__all--desc'>
                          {val.display}
                          <p className='search-module__all--desc--note'></p>
                        </span>
                      </>
                    ))}
                  </div>
                )}
                {item?.relationships && (
                  <div className='search-module__all'>
                    <label>Associated with</label>
                    {item?.relationships?.map((vals) => (
                      <>
                        <span className='search-module__all--desc'>
                          {vals?.names[0].display}
                          <p className='search-module__all--desc--note'></p>
                        </span>
                      </>
                    ))}
                  </div>
                )}
                {/* {tVal && (
                  <div className='search-module__all'>
                    <label>Twitter</label>
                    <span className='search-module__all--desc'>
                      {tVal ? tVal : 'twitter id does not exist'}
                      <p className='search-module__all--desc--note'></p>
                    </span>
                  </div>
                )} */}
                {item?.educations?.map((vals) => (
                  <div className='search-module__all'>
                    <label>Career</label>   

                    <>
                      <span className='search-module__all--desc'>
                        {vals?.display}
                        <p className='search-module__all--desc--note'></p>
                      </span>
                    </>
                  </div>
                ))}
                {/* <div className='search-module__all'>
            <label>Pages</label>
            <span className='search-module__all--desc'>
              javierbenitez@gmail.com
              <p className='search-module__all--desc--note'></p>
            </span>
          </div>
          <div className='search-module__all'>
            <label>Sources</label>
            <span className='search-module__all--desc'>
              {pVal ? pVal : 'Pinterest pages does not exist'}
              <p className='search-module__all--desc--note'>Pinterest</p>
            </span>
          </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MoreDetails

{
}
