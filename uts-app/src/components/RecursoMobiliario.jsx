import axios from "axios";
import React from "react";
import "./Registrorecursos.css";

const RecursoMobiliario = () => {
  
  return (
    <>
    <h2 style={{textAlign: "center"}}>Ingresar mobiliario</h2>
      <div className="center">
        <br />
        <br />
        <table class="center">
          <tbody>
            <tr>
              <td>ID:</td>
              <td>
                <input/>
              </td>
              <td>Modelo:</td>
              <td>
                <input/>
              </td>
              <td>Numero de Serie:</td>
              <td>
                <input/>
              </td>
            </tr>
            <br />
            <tr>
              <td>Descripción:</td>
              <td>
                <input/>
              </td>
              <td>Ubicación actual:</td>
              <td>
                <input />
              </td>
              <td>Ubicación anterior:</td>
              <td>
                <input/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div class="table">
        <ul class="botones">
          <li>
            <button className="btn" >
              Ingresar
            </button>
          </li>
          <li>
            <button className="btn" >
              Editar
            </button>
          </li>
          <li>
            <button className="btn" >
              Borrar
            </button>
          </li>
        </ul>
      </div>

      <br />
      <div className="tabla">
        <table border="1" className="tabla">
          <thead>
            <tr className="">
              <th>Id</th>
              <th>S/N</th>
              <th>Descripción</th>
              <th>Modelo</th>
              <th>Ubicación actual</th>
              <th>Ubicación anterior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_id</td>
              <td>_sn</td>
              <td>_description</td>
              <td>_model</td>
              <td>_ubicationActual</td>
              <td>_ubicationOld</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default RecursoMobiliario;
