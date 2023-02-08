import React, {useState} from 'react'
import img1 from '../../images/Password/SNIP-SMALL.png'
import img3 from '../../images/ic-user.svg'
import img2 from '../../images/SNIP-MEDIUM.png'
import { Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import ModalGen from './ModalGen'

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [successmsg, setSuccessMessage] = useState('')
  const handleEmailChange  = (e) => {
    setSuccessMessage('')
    setEmailError('')
    setEmail(e.target.value);
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault()
    // checking if email is empty
    if(email !== '')
    {
      // check some other condition
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(emailRegex.test(email))
      {
        setEmailError('')
      }
      else{
        setEmailError('Invalid Email')
      }
    }else{
      setEmailError('Email Required')
    }
  }
  return (
    <div >

      <Row className='m-0 p-0'>
      <Col xs={6} className='main_div container-fluid'  >
          <Image src={img2}  className='left_image' />
        </Col>
        <Col xs={6} className=' main_div main_div_c2 container-fluid'  >
          <div className='main'>
            <Image
              src={img1}
              className='right_image_snip'
              alt='color_logo_citras'

            />
            {successmsg && <div className='success_msg'>{successmsg}</div>}
            <br />
            <form onSubmit={handleFormSubmit}>
            <div  className='text_input'>
              <input className='user_name' type='text' name='username' id='' onChange={handleEmailChange}  value={email}/>
              <Image src={img3} className='icon_img'></Image>
               
            </div>
            {emailError && <ModalGen value={emailError} /> }
            <br />
            <button type='submit' className='submit_button'>INICIAR SESIÓN</button>
            </form>
            <div className='right_text'>¿OLVIDASTE TU CONTRASEÑA?</div>
            </div>            
        </Col>
      </Row>
      <p className='bottom_right'> © 2022. All rights reserved MySearch. </p>
    </div>

    // <div className='main'>
    //     <Image src={img2} fluid  className="left-image"/>

    //     </div>
  )
}

export default Login
