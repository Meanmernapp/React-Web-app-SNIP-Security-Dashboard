import React from 'react'
import img1 from '../../images/Password/SNIP-SMALL.png'
import img3 from '../../images/ic-password.png'
import { Row, Col } from 'react-bootstrap'
import img2 from '../../images/SNIP-MEDIUM.png'

import Image from 'react-bootstrap/Image'
const Login2 = () => {
  return (
    <div>
      <Row className='m-0 p-0'>
        <Col xs={6} className='main_div container-fluid'>
          <Image src={img2} className='left_image' />
        </Col>
        <Col xs={6} className='main_div main_div_c2 container-fluid'>
          <div className='main'>
            <Image src={img1} className='right_image_snip' alt='color_logo_citras' />
            <p className='welcome_text'>
              !Bienvenido <span> lcornejo@ibl.mx! </span>
            </p>
            <div className='text_input'>
              <input
                className='user_password'
                type='password'
                name='username'
                id=''
              />
              <Image src={img3} className='icon_img'></Image>
            </div>
            <p className='token_text'> Token de seguridad ( 6 dígitos) </p>
            <div className='user_input'>
              <input
                type='text'
                className='otp_text'
                placeholder='-'
                maxLength='1'
              />
              <input
                type='text'
                className='otp_text'
                placeholder='-'
                maxLength='1'
              />
              <input
                type='text'
                className='otp_text'
                placeholder='-'
                maxLength='1'
              />
              <input
                type='text'
                className='otp_text'
                placeholder='-'
                maxLength='1'
              />
              <input
                type='text'
                className='otp_text'
                placeholder='-'
                maxLength='1'
              />
              <input
                type='text'
                className='otp_text'
                placeholder='-'
                maxLength='1'
              />
            </div>

            <button className='whatever'>INICIAR SESIÓN</button>
            <div className='right_textt'>¿OLVIDASTE TU CONTRASEÑA?</div>
          </div>
          <p className='bottom_right'>
            {' '}
            © 2022. All rights reserved MySearch.{' '}
          </p>

          {/* <p className='KKR'> © 2022. All rights reserved MySearch. </p> */}
        </Col>
      </Row>
    </div>

    // <div className='main'>
    //     <Image src={img2} fluid  className="left-image"/>

    //     </div>
  )
}

export default Login2
