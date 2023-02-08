import React, { useContext } from "react";
import { IoIosCopy } from "react-icons/io";
const UserDetail = () => {
  return (
    <>
      <h1 className='Actual_h1'>Hello</h1>
      <div className="user-detail">
        <div className="user-detail__all">
          <img src="" alt="user image" className="user-image" />
          <table>
            <tr>
              <th>Nombre</th>
              <td>Luis Enrique Cornejo Arreola</td>
            </tr>
            <tr>
              <th>Rol</th>
              <td>Administrador</td>
            </tr>
            <tr>
              <th>Correo</th>
              <td>lcornejo@ibl.mx</td>
            </tr>
            <tr>
              <th>Teléfono</th>
              <td>4423222111</td>
            </tr>
            <tr>
              <th>Fecha de Expiración</th>
              <td>20/02/2022</td>
            </tr>
            <tr>
              <th>Departamento</th>
              <td>Asesinatos</td>
            </tr>
          </table>
        </div>
        <div className="btn-sec">
          <button className="button-primary">GENERAR NUEVA CONTRASEÑA</button>
          <div className="text-filed-icon">
            <input
              className="copy-text-area"
              placeholder="KSJAN3843-.ASD"
            ></input>
            <span><IoIosCopy /></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
