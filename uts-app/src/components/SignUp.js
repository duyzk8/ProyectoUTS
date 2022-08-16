import React from "react";
import axios from "axios";
import Logo from '../assets/logouts.png';
import swal from "sweetalert";

var formVar = localStorage.getItem("registerForm"); //Take value of LocalStorage
const url = "http://utsresourcesapi.somee.com/api/users";
export default function SignUp() {
  let form;
  if (formVar == null) {
    //If value of LocalStorage are null you need SingUp/Register
    form = (
      <center>
        <div><img src={Logo} alt='logouts'></img></div>
        <div className="divEdit">
          <table className="tableEdit" border="1">
            <tr>
              <td className="tdEdit" colSpan="2">
                {" "}
                Inicio de sesión{" "}
              </td>
            </tr>
            <tr>
              <td className="tdEdit"> Matricula:</td>
              <td className="tdEdit">
                {" "}
                <input id="user_matricula" />{" "}
              </td>
            </tr>
            <tr>
              <td className="tdEdit"> Contraseña:</td>
              <td className="tdEdit">
                {" "}
                <input id="user_password" type="password" />{" "}
              </td>
            </tr>
            <tr>
              <td className="tdEdit" colSpan="2">
                <button
                  style={{ width: "100%" }}
                  class="btn btn-primary"
                  outline
                  onClick={validarFormLogin}
                >
                  Aceptar
                </button>
              </td>
            </tr>
            <tr>
              <td className="tdEdit" colSpan="2">
                {" "}
                ¿No está registrado? click en el botón para hacerlo
              </td>
            </tr>
            <tr>
              <td className="tdEdit" colSpan="2">
                <button
                  style={{ width: "100%" }}
                  class="btn btn-primary"
                  outline
                  onClick={registro}
                >
                  Registro
                </button>
              </td>
            </tr>
          </table>
        </div>
      </center>
    );
  } //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  else
    form = (
      <center>
        <div><img src={Logo} alt='logouts'></img></div>
        <div className="divEdit">
          <table className="tableEdit" border="1">
            <tr>
              <td className="tdEdit" colSpan="2">
                {" "}
                Registro Usuario{" "}
              </td>
            </tr>
            <tr>
              <td className="tdEdit"> Matricula:</td>
              <td className="tdEdit">
                {" "}
                <input id="user_matricula" />{" "}
              </td>
            </tr>
            <tr>
              <td className="tdEdit"> Corre eléctronico:</td>
              <td className="tdEdit">
                {" "}
                <input id="user_email" />{" "}
              </td>
            </tr>
            <tr>
              <td className="tdEdit"> Contraseña:</td>
              <td className="tdEdit">
                {" "}
                <input id="user_password" type="password" />{" "}
              </td>
            </tr>
            <tr>
              <td className="tdEdit">
                <button
                  style={{ width: "100%" }}
                  class="btn2"
                  outline
                  onClick={refrescar}
                >
                  Ir a iniciar sesión
                </button>
              </td>
              <td className="tdEdit">
                <button
                  style={{ width: "100%" }}
                  class="btn2"
                  outline
                  onClick={validarFormRegistro}
                >
                  Aceptar
                </button>
              </td>
            </tr>
          </table>
        </div>
      </center>
    );
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  async function validarFormRegistro() {
    let user_matricula_form = document.getElementById("user_matricula").value;
    let user_email_form = document.getElementById("user_email").value;
    let user_password_form = document.getElementById("user_password").value;
    let formRegister = {
      user_matricula: user_matricula_form,
      user_email: user_email_form,
      user_password: user_password_form,
    };
    console.log(formRegister);
    await axios
      .post(url, formRegister)
      .then((response) => {
        console.log(response);
        alertCorrect();
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          alertError();
        } else if (error.request) {
          console.log(error.request);
          alertError();
        } else {
          alertError();
          console.log("Error", error.message);
        }
        console.log(error.config);
      });

    localStorage.removeItem("registerForm");
    //refresh()
    setTimeout(() => window.location.reload(), 5000);
  }
  function alertCorrect() {
    swal("Usuario registrado!", "Ya puede iniciar sesión", "success");
  }
  function alertError() {
    swal("ERROR", "Ha ocurrido un error", "error"); //Alert
  }
  function refrescar() {
    localStorage.removeItem("registerForm");
    window.location.reload();
  }
  function registro() {
    localStorage.setItem("registerForm", "on");
    window.location.reload();
  }
  function validarFormLogin() {
    let matricula = document.getElementById("user_matricula").value;
    let password = document.getElementById("user_password").value;
    console.log(matricula, password);
    axios
      .get(url + "/" + matricula)
      .then((response) => {
        console.log(response);
        let matriculabd = response.data.user_matricula;
        let passwordbd = response.data.user_password;
        console.log(matriculabd, passwordbd);

        {
          if (password === passwordbd) {
            localStorage.setItem("sesion", matricula);
            document.location.href = "/";
          } else
            swal(
              "Contraseña incorrecta",
              "La contraseña es incorrecta. Vuelve a intentarlo",
              "error"
            ); //Alert of password
        }
      })
      .catch((err) => {
        console.log(err);
        swal(
          "Matricula incorrecta",
          "La Matricula es incorrecta. Vuelve a intentarlo",
          "error"
        );
      });
  }
  return (
    <div className="App">
      <header className="App-header">{form}</header>
    </div>
  );
}
