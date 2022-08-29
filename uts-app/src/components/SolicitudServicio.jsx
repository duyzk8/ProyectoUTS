import React from 'react';
import { useState } from 'react';


const SolicitudServicio = () => {
    const [recurso, setRecurso] =useState("seleccionRecurso")
    const [servicio, setServicio] =useState("seleccionServicio")

    

    const handleOnChange = (e) => {
        setRecurso(e.target.value)
        setServicio(e.target.value)
    }
    
    return (
        <>
      <div className="center">
        <h2 style={{textAlign: "center"}}>Solicitud de Servicio</h2>
        <br />
        <br />
        <table class="center">
          <tbody>
            <tr>
              <td>Numero de Reporte:</td>
              <td>
                <input />
              </td>
              <td>Fecha:</td>
              <td>
                <input />
              </td>
              <td>Descripcion:</td>
              <td>
                <input />
              </td>
            </tr>
            <br />
            <tr>
              <td>Tipo de Servicio:</td>
              <td>
              <div style={{ textAlign: "center" }}>
        <select class="custom-select-servicio" onChange={handleOnChange}>
          <option value="seleccionServicio">Selecciona el tipo de servicio</option>
          <option value="preventivo">Preventivo</option>
          <option value="correctivo">Correctivo</option>
          <option value="electrico">Electrico</option>
          <option value="soportetecnico">Soporte Tecnico</option>
        </select>
      </div>

              </td>
              <td>Tipo de Recurso:</td>
              <td>
              <div style={{ textAlign: "center" }}>
        <select class="custom-select-servicio" onChange={handleOnChange}>
          <option value="seleccionRecurso">Selecciona el Recurso</option>
          <option value="herramienta">Herramienta</option>
          <option value="mobiliario">Mobiliario</option>
          <option value="eqcomputo">EQ. de Computo</option>
        </select>
      </div>

              </td>
              
              <td>
                
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div class="table">
        <ul class="botones">
          <li>
            <button className="btn">Generar Solicitud</button>
          </li>
          
        </ul>
      </div>

      <br />
      <div className="tabla">
        <table border="1" className="tabla">
          <thead>
            <tr className="">
              <th>Num de Reporte</th>
              <th>Fecha</th>
              <th>Descripción</th>
              <th>Tipo de Servicio</th>
              <th>Tipo de Recurso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_numreporte</td>
              <td>_fecha</td>
              <td>_descripcion</td>
              <td>_tipodeservicio</td>
              <td>_tipoderecurso</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </>

    )
}
export default SolicitudServicio