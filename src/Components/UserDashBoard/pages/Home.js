import React from 'react'
import { Image } from 'react-bootstrap'
import img1 from '../../../images/NavBar/Grupo 164357.svg'
import img2 from '../../../images/NavBar/ic-add.svg'
import img3 from '../../../images/NavBar/ic-trash-outline.svg'
import img4 from '../../../images/NavBar/ic-search.svg'
import img5 from '../../../images/NavBar/ic-right-arrow.svg'
import { Card, Button } from 'react-bootstrap'

const Home = () => {
  return (
    <div className='home'>
      <div className='home_main_div'>
        <div className='home_user'>
          <p className='home_user_text'>
            USUARIOS <span>TOTAL 89</span>{' '}
          </p>
        </div>
        <div className='home_top_buttons'>
          <Image src={img1} className='home_svgs' />
          <button className='home_button_add'>
            AGREGAR USUARIO <i class='fa-solid fa-plus homeAddButton'></i>{' '}
          </button>
          <button className='home_button_delete'>
            ELIMINAR USUARIO(S){' '}
            <i class='fa-solid fa-trash-can homeAddButton'></i>{' '}
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
      <div className='row'>
        <div className='col-md-4'>
          <div className='card_main_div'>
            <div className='home_card'>
              <Card style={{ width: '272px', height: '348px' }}>
                <Image
                  variant='top'
                  className='home_card_img'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dAlfxEHeXNtUb2cbBqAIAvNJKqLsLsTGdw&usqp=CAU'
                />
                <Card.Body>
                  <div className='home_card_title_main'>
                    <h3 className='home_card_title'>ACTUALIZAR DATOS</h3>
                    <i class='fa-solid fa-angle-right home_card_title_icon'></i>
                  </div>
                  <div className='home_card_details'>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>Nombre</span>{' '}
                      <p className='home_card_p_value'>Luis Enrique</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>
                        Apellido
                      </span>{' '}
                      <p className='home_card_p_value'>Apellido</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>Correo</span>{' '}
                      <p className='home_card_p_value'>lcornejo@ibl.mx</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>
                        Teléfono
                      </span>{' '}
                      <p className='home_card_p_value'>4423222111</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>
                        Tipo de Usuario
                      </span>{' '}
                      <p className='home_card_p_value'>Root</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>
                        Fecha de Expiración
                      </span>{' '}
                      <p className='home_card_p_value'>20/02/2022</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>Equipo</span>{' '}
                      <p className='home_card_p_value'>-</p>{' '}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className='home_card'>
              <Card style={{ width: '272px', height: '348px' }}>
                <Image
                  variant='top'
                  className='home_card_img'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dAlfxEHeXNtUb2cbBqAIAvNJKqLsLsTGdw&usqp=CAU'
                />
                <Card.Body>
                  <div className='home_card_title_main'>
                    <h3 className='home_card_title'>ACTUALIZAR DATOS</h3>
                    <i class='fa-solid fa-angle-right home_card_title_icon'></i>
                  </div>
                  <div className='home_card_details'>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>Nombre</span>{' '}
                      <p className='home_card_p_value'>Luis Enrique</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>
                        Apellido
                      </span>{' '}
                      <p className='home_card_p_value'>Apellido</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>Correo</span>{' '}
                      <p className='home_card_p_value'>lcornejo@ibl.mx</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>
                        Teléfono
                      </span>{' '}
                      <p className='home_card_p_value'>4423222111</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>
                        Tipo de Usuario
                      </span>{' '}
                      <p className='home_card_p_value'>Root</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>
                        Fecha de Expiración
                      </span>{' '}
                      <p className='home_card_p_value'>20/02/2022</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>Equipo</span>{' '}
                      <p className='home_card_p_value'>-</p>{' '}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className='home_card'>
              <Card style={{ width: '272px', height: '348px' }}>
                <Image
                  variant='top'
                  className='home_card_img'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dAlfxEHeXNtUb2cbBqAIAvNJKqLsLsTGdw&usqp=CAU'
                />
                <Card.Body>
                  <div className='home_card_title_main'>
                    <h3 className='home_card_title'>ACTUALIZAR DATOS</h3>
                    <i class='fa-solid fa-angle-right home_card_title_icon'></i>
                  </div>
                  <div className='home_card_details'>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>Nombre</span>{' '}
                      <p className='home_card_p_value'>Luis Enrique</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>
                        Apellido
                      </span>{' '}
                      <p className='home_card_p_value'>Apellido</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>Correo</span>{' '}
                      <p className='home_card_p_value'>lcornejo@ibl.mx</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>
                        Teléfono
                      </span>{' '}
                      <p className='home_card_p_value'>4423222111</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>
                        Tipo de Usuario
                      </span>{' '}
                      <p className='home_card_p_value'>Root</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>
                        Fecha de Expiración
                      </span>{' '}
                      <p className='home_card_p_value'>20/02/2022</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>Equipo</span>{' '}
                      <p className='home_card_p_value'>-</p>{' '}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className='home_card'>
              <Card style={{ width: '272px', height: '348px' }}>
                <Image
                  variant='top'
                  className='home_card_img'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dAlfxEHeXNtUb2cbBqAIAvNJKqLsLsTGdw&usqp=CAU'
                />
                <Card.Body>
                  <div className='home_card_title_main'>
                    <h3 className='home_card_title'>ACTUALIZAR DATOS</h3>
                    <i class='fa-solid fa-angle-right home_card_title_icon'></i>
                  </div>
                  <div className='home_card_details'>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>Nombre</span>{' '}
                      <p className='home_card_p_value'>Luis Enrique</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>
                        Apellido
                      </span>{' '}
                      <p className='home_card_p_value'>Apellido</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>Correo</span>{' '}
                      <p className='home_card_p_value'>lcornejo@ibl.mx</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>
                        Teléfono
                      </span>{' '}
                      <p className='home_card_p_value'>4423222111</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>
                        Tipo de Usuario
                      </span>{' '}
                      <p className='home_card_p_value'>Root</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>
                        Fecha de Expiración
                      </span>{' '}
                      <p className='home_card_p_value'>20/02/2022</p>{' '}
                    </div>
                    <div className='home_card_values'>
                      {' '}
                      <span className='home_card_span_value'>Equipo</span>{' '}
                      <p className='home_card_p_value'>-</p>{' '}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className='home_card'>
            <Card style={{ width: '272px', height: '348px' }}>
              <Image
                variant='top'
                className='home_card_img'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dAlfxEHeXNtUb2cbBqAIAvNJKqLsLsTGdw&usqp=CAU'
              />
              <Card.Body>
                <div className='home_card_title_main'>
                  <h3 className='home_card_title'>ACTUALIZAR DATOS</h3>
                  <i class='fa-solid fa-angle-right home_card_title_icon'></i>
                </div>
                <div className='home_card_details'>
                  <div className='home_card_values'>
                    {' '}
                    <span className='home_card_span_value'>Nombre</span>{' '}
                    <p className='home_card_p_value'>Luis Enrique</p>{' '}
                  </div>
                  <div className='home_card_values'>
                    {' '}
                    <span className='home_card_span_value'>Apellido</span>{' '}
                    <p className='home_card_p_value'>Apellido</p>{' '}
                  </div>
                  <div className='home_card_values'>
                    {' '}
                    <span className='home_card_span_value'>Correo</span>{' '}
                    <p className='home_card_p_value'>lcornejo@ibl.mx</p>{' '}
                  </div>
                  <div className='home_card_values'>
                    {' '}
                    <span className='home_card_span_value'>Teléfono</span>{' '}
                    <p className='home_card_p_value'>4423222111</p>{' '}
                  </div>
                  <div className='home_card_values'>
                    {' '}
                    <span className='home_card_span_value'>
                      Tipo de Usuario
                    </span>{' '}
                    <p className='home_card_p_value'>Root</p>{' '}
                  </div>
                  <div className='home_card_values'>
                    {' '}
                    <span className='home_card_span_value'>
                      Fecha de Expiración
                    </span>{' '}
                    <p className='home_card_p_value'>20/02/2022</p>{' '}
                  </div>
                  <div className='home_card_values'>
                    {' '}
                    <span className='home_card_span_value'>Equipo</span>{' '}
                    <p className='home_card_p_value'>-</p>{' '}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
