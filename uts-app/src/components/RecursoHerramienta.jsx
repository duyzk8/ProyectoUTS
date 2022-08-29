import axios from "axios";
import React from "react";
import "./Registrorecursos.css";

const RecursoHerramienta = () => {
  return (
    <>
      <div className="center">
        <h2 style={{textAlign: "center"}}>Ingresar herramientas</h2>
        <br />
        <br />
        <table class="center">
          <tbody>
            <tr>
              <td>ID:</td>
              <td>
                <input />
              </td>
              <td>Modelo:</td>
              <td>
                <input />
              </td>
              <td>Numero de Serie:</td>
              <td>
                <input />
              </td>
            </tr>
            <br />
            <tr>
              <td>Descripción:</td>
              <td>
                <input />
              </td>
              <td>Marca:</td>
              <td>
                <input />
              </td>
              <td>Modelo:</td>
              <td>
                <input />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div class="table">
        <ul class="botones">
          <li>
            <button className="btn">Ingresar</button>
          </li>
          <li>
            <button className="btn">Editar</button>
          </li>
          <li>
            <button className="btn">Borrar</button>
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
              <th>Marca</th>
              <th>Modelo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_id</td>
              <td>_sn</td>
              <td>_description</td>
              <td>_model</td>
              <td>_brand</td>
              <td>_model</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default RecursoHerramienta;
