import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AppContext } from '../../../App'
import { FaShareSquare, FaInstagram } from 'react-icons/fa'
import { BsFacebook, BsPinterest } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img1 from '../../../images/Password/SNIP-SMALL.png'
import { useNavigate } from 'react-router-dom'
import img5 from '../../../images/NavBar/Icons---Social-Icons---Source---Facebook.svg'
import img2 from '../../../images/NavBar/Icons---Social-Icons---Source---Instagram.svg'
import img3 from '../../../images/NavBar/Icons---Social-Icons---Source---Pinterest.svg'
import img4 from '../../../images/NavBar/Icons---Social-Icons---Source---Twitter.svg'

import axios from 'axios'
const Print = () => {
    console.log('kainat')
  const [open, setOpen] = useState(true)
  const [aText, setLinkText] = useState('Búsqueda avanzada')

  const { val1, val2, val3 } = useContext(AppContext)
  var loc
  const phone = val1.state.name.query.phones
  var names = val1.state.name.query.names
  var userNames = val1.state.name.query.usernames
  loc = useLocation()
  var item

  if (names) {
    var { val } = loc.state
  } else if (userNames) {
    var { val } = loc.state
  } else if (phone) {
    var { val } = loc.state
  }
  let navigate = useNavigate()
  const [location, setLocation] = useState()
  const [text, setText] = useState()
  const email = val1.state.name.query.email
  var fbVal, liVal
  var tVal, tHref
  var pVal, pHref
  var iVal, iHref
  var fbHref, liHref
  var mainData = val1.state.name.possible_persons
  useEffect(() => {
    {
      if (val1.state.name.possible_persons) {
        mainData.map(async (item) => {
          if (item?.names?.[0].display === val) {
            await axios
              .get(
                //'http://35.162.205.94/piplresponses/searchpointer2.txt'
                 `https://api.pipl.com/search/?search_pointer=${item?.['@search_pointer']}&key=n6fggbf0hqfr896xrdq16qkc`
              )
              .then((response) => {
                val3.dispatch2({
                  type: 'UPDATE_INPUT',
                  data: response?.data,
                })
              })
              .catch((error) => {
                console.log(error.response)
              })
          }
        })
      }
    }
  }, [val, item?.['@search_pointer']])

  // http://api.pipl.com/search/?search_pointer=SEARCH_POINTER_STRING&key=YOURKEY

  if (names || phone || userNames) {
    item = val3.state2.name.person
    {
      item?.user_ids?.map((bla) => {
        if (bla.content.includes('facebook')) {
          fbVal = bla.content.split('@')[0]
          fbHref = `https://www.facebook.com/${fbVal}`
        }
      })
    }
    {
      item?.user_ids?.map((bla) => {
        if (bla.content.includes('twitter')) {
          tVal = bla.content.split('@')[0]
          tHref = `https://www.linkedin.com/${tVal}`
        }
      })
    }

    {
      item?.user_ids?.map((bla) => {
        if (bla.content.includes('pinterest')) {
          pVal = bla.content.split('@')[0]
          pHref = `https://www.linkedin.com/${pVal}`
        }
      })
    }
    {
      item?.user_ids?.map((bla) => {
        if (bla.content.includes('instagram')) {
          iVal = bla.content.split('@')[0]
          iHref = `https://www.linkedin.com/${iVal}`
        }
      })
    }
  } else {if (val1.state.name.possible_persons) {
    
    item = val3.state2.name.person
  } else {
    console.log('Sumeet') 
    item = val1.state.name.person
  }
    {
      item?.user_ids?.map((bla) => {
        if (bla.content.includes('facebook')) {
          fbVal = bla.content.split('@')[0]
          fbHref = `https://www.facebook.com/${fbVal}`
        }
      })
    }
    {
      item?.user_ids?.map((bla) => {
        if (bla.content.includes('twitter')) {
          tVal = bla.content.split('@')[0]
          tHref = `https://www.linkedin.com/${tVal}`
        }
      })
    }

    {
      item?.user_ids?.map((bla) => {
        if (bla.content.includes('pinterest')) {
          pVal = bla.content.split('@')[0]
          pHref = `https://www.linkedin.com/${pVal}`
        }
      })
    }
    {
      item?.user_ids?.map((bla) => {
        if (bla.content.includes('instagram')) {
          iVal = bla.content.split('@')[0]
          iHref = `https://www.linkedin.com/${iVal}`
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
              navigate('/example')
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
              navigate('/example')
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

  return (
    <>
      {item && (
        <div className='home container'>
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
                  {item?.names?.[0].display} ({item?.phones?.[0].number})
                  <div>
                    <a href={tHref} target='_blank'>
                      <img className='socialss' src={img4} />
                    </a>
                    <a href={fbHref} target='_blank'>
                      <img className='socialss' src={img5} />
                    </a>
                    <a href={tHref} target='_blank'>
                      <img className='socialss' src={img2} />
                    </a>
                    <a href={tHref} target='_blank'>
                      <img className='socialss' src={img3} />
                    </a>
                  </div>
                </div>
              </span>
              <span className='search-module__self'>
              {item?.gender?.content}, 
                  {item?.languages && <span> speaks &nbsp;
                    {item?.languages[0]?.language === 'es'
                      ? 'Spanish'
                      : item?.languages[0]?.language === 'en' ? 'English' : item?.languages[0]?.language }</span>}
                </span>
                <br />
              <span className='search-module__self'>
                {item?.dob && item?.dob?.display} {item?.dob && ',  '}
                {item?.dob && item?.dob.date_range?.start}
              </span>
              <div>
                <span className='search-module__location'>
                  From {item?.addresses?.[0].display}
                </span>
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

              <div className='search-module__all'>
                <label>Phones</label>
                <span className='search-module__all--desc'>
                  766 102 0101
                  <p className='search-module__all--desc--note'></p>
                </span>
              </div>
              {tVal && fbVal && pVal && iVal && (
                <div className='search-module__all'>
                  <label>Social</label>
                </div>
              )}
              <div className='search-module__all sub-socail-sec'>
                {tVal && fbVal && pVal && iVal && (
                  <label>Possibly Related Social</label>
                )}
                {fbVal && (
                  <span className='search-module__all--desc'>
                    <BsFacebook color='#4267B2' />
                    {fbVal ? fbVal : 'facebook id does not exist'}
                    <a className='search-module__all--desc--note' href={fbHref}>
                      FaceBook <FaShareSquare />
                    </a>
                  </span>
                )}
                {tVal && (
                  <span className='search-module__all--desc'>
                    <AiOutlineTwitter color='#1DA1F2' fontSize='14px' />{' '}
                    {tVal ? tVal : 'Twitter id does not exist'}
                    <a className='search-module__all--desc--note' href={tHref}>
                      Twitter <FaShareSquare />
                    </a>
                  </span>
                )}
                {pVal && (
                  <span className='search-module__all--desc'>
                    <BsPinterest color='#E60023' />
                    {pVal ? pVal : 'Pinterest id does not exist'}
                    <p className='search-module__all--desc--note' href={pHref}>
                      Pintrest <FaShareSquare />
                    </p>
                  </span>
                )}
                {iVal && (
                  <span className='search-module__all--desc'>
                    <FaInstagram color='#d92f49' />
                    {iVal ? iVal : 'instagram id does not exist'}
                    <p className='search-module__all--desc--note' href={iHref}>
                      Instagram <FaShareSquare />
                    </p>
                  </span>
                )}
              </div>

              <div className='search-module__all'>
                <label>Place</label>
                {item?.addresses.map((val) => (
                  <span className='search-module__all--desc'>
                    {val.display}
                    <p className='search-module__all--desc--note'></p>
                  </span>
                ))}
              </div>
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

              <div className='search-module__all'>
                <label>Aditional Names</label>
                {item?.names?.map((val) => (
                  <>
                    <span className='search-module__all--desc'>
                      {val.display}
                      <p className='search-module__all--desc--note'></p>
                    </span>
                  </>
                ))}
              </div>
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
              {tVal && (
                <div className='search-module__all'>
                  <label>Twitter</label>
                  <span className='search-module__all--desc'>
                    {tVal ? tVal : 'twitter id does not exist'}
                    <p className='search-module__all--desc--note'></p>
                  </span>
                </div>
              )}
              {/* <div className='search-module__all'>
                  <label>About</label>

                  {item?.educations?.map((vals) => (
                    <>
                      <span className='search-module__all--desc'>
                        {vals?.display}
                        <p className='search-module__all--desc--note'></p>
                      </span>
                    </>
                  ))}
                </div> */}
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
      )}
    </>
  )
}

export default Print

{
}
