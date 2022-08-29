import axios from "axios";
import React from "react";
import "./Registrorecursos.css";

const url = "http://utsresourcesapi.somee.com/api/resources";
class RecursoEqComputo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: [],
      id: "",
      description: "",
      model: "",
      brand: "",
      sn: "",
      ubication: "",
    };
    this.handleId = this.handleId.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleModel = this.handleModel.bind(this);
    this.handleBrand = this.handleBrand.bind(this);
    this.handleSn = this.handleSn.bind(this);
    this.handleUbication = this.handleUbication.bind(this);

    this.GuardarDatos = this.GuardarDatos.bind(this);
    this.BorrarDatos = this.BorrarDatos.bind(this);
    this.EditarDatos = this.EditarDatos.bind(this);
  }
  //#region handlers

  handleId(event) {
    this.setState({ id: event.target.value });
  }
  handleDescription(event) {
    this.setState({ description: event.target.value });
  }
  handleModel(event) {
    this.setState({ model: event.target.value });
  }
  handleBrand(event) {
    this.setState({ brand: event.target.value });
  }
  handleSn(event) {
    this.setState({ sn: event.target.value });
  }
  handleUbication(event) {
    this.setState({ ubication: event.target.value });
  }

  cargarDatos() {
    axios.get(url).then((Response) => {
      this.setState({ resources: Response.data });
    });
  }

  BorrarDatos() {
    axios.delete(url + "/" + this.state.id).then((Response) => {
      this.cargarDatos();
    });
  }

  EditarDatos() {
    axios
      .put(url + "/" + this.state.rec_id, {
        rec_description: this.state.description,
        rec_model: this.state.model,
        rec_brand: this.state.brand,
        rec_sn: this.state.sn,
        rec_ubication: this.state.ubication,
      })
      .then((Response) => {
        this.cargarDatos();
      });
  }

  GuardarDatos() {
    let resources = {
      rec_id: this.state.id,
      rec_description: this.state.description,
      rec_model: this.state.model,
      rec_brand: this.state.brand,
      rec_sn: this.state.sn,
      rec_ubication: this.state.ubication,
    };
    console.log(resources);
    axios.post(url, resources).then((Response) => {
      this.cargarDatos();
    });
  }

  componentDidMount() {
    this.cargarDatos();
  }
  //#endregion

  render() {
    return (
      <>
        
        <div className="center">
        <h2 style={{textAlign: "center"}}>Ingresar equipo de computo</h2>
          <br />
          <br />
          <table class="center">
            <tbody>
              <tr>
                <td>ID:</td>
                <td>
                  <input value={this.state.id} onChange={this.handleId} />
                </td>
                <td>Modelo:</td>
                <td>
                  <input value={this.state.model} onChange={this.handleModel} />
                </td>
                <td>Numero de Serie:</td>
                <td>
                  <input value={this.state.sn} onChange={this.handleSn} />
                </td>
              </tr>
              <br />
              <tr>
                <td>Descripción:</td>
                <td>
                  <input
                    value={this.state.description}
                    onChange={this.handleDescription}
                  />
                </td>
                <td>Marca:</td>
                <td>
                  <input value={this.state.brand} onChange={this.handleBrand} />
                </td>
                <td>Ubicación actual:</td>{" "}
                <td>
                  <input
                    value={this.state.ubication}
                    onChange={this.handleUbication}
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td>Numero mampara:</td>
                <td>
                  <input
                    value={this.state.description}
                    onChange={this.handleDescription}
                  />
                </td>
                <td>Estado:</td>
                <td>
                  <input value={this.state.brand} onChange={this.handleBrand} />
                </td>
                <td>Ubicación anterior:</td>{" "}
                <td>
                  <input
                    value={this.state.ubication}
                    onChange={this.handleUbication}
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td>Componentes:  </td>
                <tr>
                <td><input type="checkbox" id="" name="monitor" value="monitor" />Monitor</td> 
                </tr>
                <tr>
                <td><input type="checkbox" id="" name="keyboard" value="keyboard" />Teclado</td> 
                </tr>
                <tr>
                <td><input type="checkbox" id="" name="mouse" value="mouse" />Mouse</td> 
                </tr>                
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div class="table">
          <ul class="botones">
            <li>
              <button className="btn" onClick={this.GuardarDatos}>
                Ingresar
              </button>{" "}
            </li>
            <li>
              <button className="btn" onClick={this.EditarDatos}>
                Editar
              </button>{" "}
            </li>
            <li>
              <button className="btn" onClick={this.BorrarDatos}>
                Borrar
              </button>{" "}
            </li>
          </ul>
        </div>

        <br />
        <div className="tabla">
          <table border="1" className="tabla">
            <thead>
              <tr className="">
                <th>ID</th>
                <th>Descripcion</th>
                <th>Modelo</th>
                <th>Marca</th>
                <th>S/N</th>
                <th>Ubicación actual</th>
              </tr>
            </thead>
            <tbody>
              {this.state.resources.map((resources) => {
                return (
                  <tr>
                    <td>{resources.rec_id}</td>
                    <td>{resources.rec_description}</td>
                    <td>{resources.rec_model}</td>
                    <td>{resources.rec_brand}</td>
                    <td>{resources.rec_sn}</td>
                    <td>{resources.rec_ubication}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default RecursoEqComputo;
