import React, { useContext, useState } from 'react'
import {
  Image,
  Accordion,
  Nav,
  Card,
  AccordionContext,
  useAccordionButton,
} from 'react-bootstrap'
import { AppContext } from '../../../App'
import { Link } from 'react-router-dom'
import img1 from '../../../images/Password/SNIP-SMALL.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Kainat = () => {
  const { val1 } = useContext(AppContext)
    const [open, setOpen] = useState()
    const [openn, setOpenn] = useState(false)
    const [oopen, setOopen] = useState(true)

  console.log(open)

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

  {
    mainData.map((item) => {
      console.log(typeof item?.['@match'])
    })
  }
  return (
    <div>
      {phone && (
        <div className='home_kainat'>
          <div>
            <p className='ex_first_p'>Resultados relacionados</p>
            {mainData.map((item, index) => (
              <div className='home_left_div'>
                {item?.['@match'] > 0 ? (
                  <Accordion defaultActiveKey='0'>
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header>
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
                                      onClick={() => setOpen(index)}
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
                                            onClick={() => setOpen(index)}
                                    ></i>
                                  </div>
                                </>
                              ))
                            : ''}
                          <div
                            style={{
                              display: open === index ? 'none' : 'block',
                            }}
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
                    </Accordion.Item>
                  </Accordion>
                ) : (
                  <div className='home_right_div'>
                    <div>
                      <p className='ex_second_p'>
                        Resultados posiblemente relacionados
                      </p>
                      {item?.['@match'] === 0 ? (
                        <Accordion defaultActiveKey='0'>
                          <Accordion.Item eventKey={index}>
                            <Accordion.Header>
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
                                            onClick={() => setOpenn(!openn)}
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
                                            onClick={() => setOpenn(!openn)}
                                          ></i>
                                        </div>
                                      </>
                                    ))
                                  : ''}
                                <div
                                  style={{
                                    display: open ? 'none' : 'block',
                                  }}
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
                          </Accordion.Item>
                        </Accordion>
                      ) : null}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Kainat


    
