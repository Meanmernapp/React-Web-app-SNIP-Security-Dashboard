import React, { useState } from 'react'
import img1 from '../../images/color_logo_citras.png'
import img3 from '../../images/ic-user.svg'
import img2 from '../../images/SNIP-MEDIUM.png'
import { Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import ModalGen from './ModalGen'

const RecoverPage = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [successmsg, setSuccessMessage] = useState('')
  const handleEmailChange = (e) => {
    setSuccessMessage('')
    setEmailError('')
    setEmail(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // checking if email is empty
    if (email !== '') {
      // check some other condition
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if (emailRegex.test(email)) {
        setEmailError('')
      } else {
        setEmailError('Invalid Email')
      }
    } else {
      setEmailError('Email Required')
    }
  }
  return (
    <>
      <Row className='m-0 p-0 container-fluid' >
        <Col xs={6} className=' main_div container-fluid'  >
            <Image src={img2} className='left_image' />
        </Col>
        <Col xs={6} className='main_div main_div_c2 container-fluid'   >
        <div className='main_col'>
            <p className='rightimg_text'>
              
               <b> Contraseña olvidada. </b>  Ingrese su correo para enviar
              un correo de recuperación.
            </p>
            {successmsg && <div className='success_msg'>{successmsg}</div>}
            <br />
            <form onSubmit={handleFormSubmit}>
              <div className='text_input'>
                <input
                  className='user_name'
                  type='text'
                  name='username'
                  id=''
                  onChange={handleEmailChange}
                  value={email}
                />
                <Image src={img3} className='icon_img'></Image>
              </div>
              {emailError && <ModalGen value={emailError} />}
              <br />
              <button type='submit' className='submit_button'>
                ENVIAR CORREO
              </button>
            </form>
          </div>
          <p className='bottom_right'>   © 2022. All rights reserved <b> MySearch. </b> </p>
        </Col>
      </Row>
    </>
  )
}

export default RecoverPage
