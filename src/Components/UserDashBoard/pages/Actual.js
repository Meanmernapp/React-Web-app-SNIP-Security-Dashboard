import React from 'react'

const Actual = () => {
  return (
    <>
      <h1 className='Actual_h1'><i class="fa-solid fa-arrow-left-long"></i>AGREGAR USUARIO</h1>
     
    <div className='user-info' >
      <div className='user-info__top'>
        <div className='user-info--img-container'>
          <img src='' alt='user image' />
          <div class='avatar-edit'>
            <input type='file' id='imageUpload' accept='.png, .jpg, .jpeg' />
            <label for='imageUpload'></label>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='user-info__detail'>
        <div className='input-group'>
          <label className='input-group__label'>NOMBRE COMPLETO</label>
          <input
            className='input-group__text user-info__name'
            placeholder='Luis Enrique Cornejo Arreola'
          ></input>
        </div>
        <div className='user-info__contact'>
          <div className='input-group single-group'>
            <label className='input-group__label'>CORREO</label>
            <input
              className='input-group__text user-info__field'
              placeholder='lcornejo@ibl.mx'
              type='email'
            ></input>
          </div>
          <div className='input-group single-group'>
            <label className='input-group__label'>SELECCIONAR ROL</label>
            <input
              className='input-group__text user-info__field'
              placeholder='Root'
            ></input>
          </div>
        </div>
        <div className='user-info__contact'>
          <div className='input-group single-group'>
            <label className='input-group__label'>TELÉFONO</label>
            <input
              className='input-group__text user-info__field'
              placeholder='+52 442 - 245 -3434'
            ></input>
          </div>
          <div className='input-group single-group'>
            <label className='input-group__label'>FECHA DE EXPIRACIÓN</label>
            <input
              type='date'
              className='input-group__text user-info__field user-date-picker'
              placeholder='28-05-2023'
            ></input>
          </div>
        </div>
        <div className='agreement-div'>
          <label className='agreement-div-lab'>sdsdasd</label>
          <label class='checkBox-container ms-4'>
            One
            <input type='checkbox' />
            <span class='checkmark'></span>
          </label>
          <label class='checkBox-container ms-4'>
            One
            <input type='checkbox' />
            <span class='checkmark'></span>
          </label>
        </div>
      </div>
      </div>
      </>
      )
}

export default Actual
