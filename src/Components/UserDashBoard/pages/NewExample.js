import React, { useState, useContext } from 'react'
import { Button, Collapse, Accordion } from 'react-bootstrap'
import { AppContext } from '../../../App'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img1 from '../../../images/Password/SNIP-SMALL.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const NewExample = () => {
  const { state, dispatch } = useContext(AppContext)
  const [open, setOpen] = useState(false)
  // +52 8119655503
  // +52 7661000101
  var mainData = state.name.possible_persons

  const phone = state.name.query.phones
  var names = state.name.query.names
  var userNames = state.name.query.usernames
  let navigate = useNavigate()
  const [location, setLocation] = useState()

  return (
    <>
      
      <div className='home container'>
          {phone &&
            mainData.map((item, index) => (
        <Accordion defaultActiveKey='0' className='example_main'>
              <Accordion.Item eventKey={index} key={index}>
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
                                state={{ val: val.display, state: state }}
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
      </div>
    </>
  )
}

export default NewExample
