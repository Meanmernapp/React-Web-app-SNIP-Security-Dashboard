import React from 'react'
import img2 from '../../images/Password/SNIP-GENERAL.png'
import Image from 'react-bootstrap/Image'
import img1 from '../../images/ic-setting.png'
import img3 from '../../images/ic-user-list.png'




const NavigationPanel = () => {
  return (
    <>
      <div>
      <Image
              src={img2}
              className='bg_image'
              alt='color_logo_citras'
            />
            <h3 className='navpanel_h2'> SELECCIONE ALGÚN MÓDULO PARA NAVEGAR HACÍA LA SECCIÓN</h3>
            <div className='settings_div'>
            <Image src={img1} className="setting-img"></Image>
            <h3 className='setting_h3'>CONFIGURACIÓN <br/> DEL <br/> SISTEMA</h3>
            </div>
            <div className='settings_div_2'>
            <Image src={img3}  className="user-img"></Image>
            <h3 className='user_h3'>PERFIL DE USUARIO</h3>
            </div>
          
      </div>
    </>
  )
}

export default NavigationPanel