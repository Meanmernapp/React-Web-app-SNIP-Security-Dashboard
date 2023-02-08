import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import img1 from '../../../images/NavBar/Grupo 164357.svg'
import img2 from '../../../images/NavBar/ic-add.svg'
import img3 from '../../../images/NavBar/ic-trash-outline.svg'
import img4 from '../../../images/NavBar/ic-search.svg'
import img5 from '../../../images/NavBar/ic-right-arrow.svg'
import { Card, Button } from 'react-bootstrap'

const AddUser = () => {
  const [deleteValue, setDeleteValue] = useState()
  const [values, setValues] = useState([
    {
      id: '23',
      name: 'Luis',
      surName: 'Cornejo',
      email: 'lcornejo@ibl.mx',
      phone: '4478982992',
      userName: 'ROOT',
      status: 'ACTIVO',
      expireDate: '20/02/2022',
      options: '---',
    },
  ])
  let addFormFieldsForValue = () => {
    setValues([
      ...values,
      {
        id: '23',
        name: 'Luis',
        surName: 'Cornejo',
        email: 'lcornejo@ibl.mx',
        phone: '4478982992',
        userName: 'ROOT',
        status: 'ACTIVO',
        expireDate: '20/02/2022',
        options: '---',
      },
    ])
  }
  let removeFormFieldsForValues = (i) => {
    let newValues = [...values]
    newValues.splice(i, 1)
    setValues(newValues)
  }

  const handleChange = (i, e) => {
    let isChecked = e.target.checked
    if (isChecked) {
      
      
      setDeleteValue(e.target.value)
    }
  }

  return (
    <div className='home'>
      <div className='home_main_div'>
        <div className='home_user'>
          <p className='home_user_text'>
            USUARIOS <span>TOTAL 89</span>
          </p>
        </div>
        <div className='home_top_buttons'>
          <Image src={img1} className='home_svgs' />
          <button
            className='home_button_add'
            onClick={() => addFormFieldsForValue()}
          >
            AGREGAR USUARIO <i class='fa-solid fa-plus homeAddButton'></i>
          </button>
          <button className='home_button_delete' onClick={() => removeFormFieldsForValues(deleteValue)}>
            ELIMINAR USUARIO(S)
            <i class='fa-solid fa-trash-can homeAddButton'></i>
          </button>
        </div>
      </div>

      <div className='search_box_main'>
        <input
          type='text'
          name=''
          placeholder='Escribe el nombre a buscar ...'
          className='input_text'
          id=''
        />
        <button className='home_search_button'>
          <Image src={img4} />
        </button>
      </div>

      <div className='addUser_labels'>
        <label htmlFor='' className='addUser_label'>
          ID
        </label>
        <label htmlFor='' className='addUser_label'>
          NOMBRE
        </label>
        <label htmlFor='' className='addUser_label'>
          APELLIDO
        </label>
        <label htmlFor='' className='addUser_label'>
          CORREO
        </label>
        <label htmlFor='' className='addUser_label'>
          TELÉFONO
        </label>
        <label htmlFor='' className='addUser_label'>
          TIPO <br /> USUARIO
        </label>
        <label htmlFor='' className='addUser_label'>
          STATUS
        </label>
        <label htmlFor='' className='addUser_label'>
          FECHA <br /> EXPIRACIÓN
        </label>
        <label htmlFor='' className='addUser_label'>
          OPCIONES
        </label>
        
      </div>
      <div style={{ marginTop: '10px' }}>
        {values.map((element, index) => (
          <div className='addUser_label_ex_div' key={index}>
            <label className='addUser_label_map_Id' name='ID'>
              {element.id}{' '}
            </label>
            <label className='addUser_label_map' name='name'>
              {element.name}
            </label>
            <label className='addUser_label_map' name='surName'>
              {element.surName}
            </label>
            <label className='addUser_label_map' name='email'>
              {element.email}
            </label>
            <label className='addUser_label_map' name='phone'>
              {element.phone}
            </label>
            <label className='addUser_label_map' name='userName'>
              {element.userName}
            </label>
            <label className='addUser_label_map' name='status'>
              {element.status}
            </label>
            <label className='addUser_label_map' name='expireDate'>
              {element.expireDate}
            </label>
            <label className='addUser_label_map' name='options'>
              {element.options}
            </label>
            <input type="checkbox" className='addUser_label_map' value={index} onChange={(e) => handleChange(index, e)} id={element.index}></input>

            {/* <div className='searchM_mainButtons'>
                  {values.length - 1 === index ? (
                    <button
                      className='button add'
                      type='button'
                      onClick={() => addFormFieldsForValue()}
                    >
                      <i class='fa-solid fa-plus addButton'></i>
                      Agregar nombre
                    </button>
                  ) : (
                    <button
                      type='button'
                      className='button remove'
                      onClick={() => removeFormFieldsForValues(index)}
                    >
                      <i class='fa-solid fa-minus addButton'></i>
                      Eliminar nombre
                    </button>
                  )}
                </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AddUser
