import '../Css/Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


function Iniciars() {
  //const activar = "";
  const navigate = useNavigate();
  // Registrar Usuario
  const [correo, setCorreo] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  // Resgitrar un usuario
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch('https://mtbapi-production.up.railway.app/administrador/registrar', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: usuario,
          correo: correo,
          contrasenia: contrasenia,
          rol_id: 2
        }),
      });
      if (res.status === 200) {
        setUsuario("");
        setCorreo("");
        setContrasenia("");

        console.log("Registro correcto")
        Swal.fire({
          icon: 'success',
          title: 'El usuario se registro correctamente',
          showConfirmButton: false,
          timer: 1500
      })

      } else {
        console.log("Ocurrio un error")
        Swal.fire({
          icon: 'error',
          title: 'No se pudo registrar al usuario',
          showConfirmButton: false,
          timer: 1500
      })
      }
    } catch (err) {
      console.log(err);
    }
  };
  // Validación de password
  const Verificar = () => {
    var contrasenia1 = document.getElementById("pass-s").value;
    var contrasenia2 = document.getElementById("pass-sr").value;
    if (contrasenia1 === contrasenia2) {
      //alert("contraseñas iguales");
      document.getElementById('verifica').innerHTML = "Las contraseñas son iguales";
      document.getElementById('verifica').style.color = "#3DC814";

    }
    else {
      //alert("Las contraseñas no son iguales")
      document.getElementById('verifica').innerHTML = "Las contraseñas no son iguales";
      document.getElementById('verifica').style.color = "red";

    }
  }
  // Loguearse con un usuario
  let log = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch('https://mtbapi-production.up.railway.app/administrador/login', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correo: correo,
          contrasenia: contrasenia
        }),
      });
      if (res.status === 200) {
        setCorreo("");
        setContrasenia("");
        console.log("Login correcto");
        //navigate('/DashboardUsers');
        window.location = 'https://github.com/EduardoVarela0144/mtb_cliente/settings/pages';

      }
      else if (res.status === 201) {
        setCorreo("");
        setContrasenia("");
        console.log("Login sin privilegios");
        //navigate('/Inicio');

      } else {
        console.log("Ocurrio un error al hacer login")
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>

      <div className="login-wrap">
        <div className="login-html">
          <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked={true} /><label htmlFor="tab-1" className="tab">Iniciar Sesión</label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Registrarse</label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">Correo electrónico</label>
                <input id="user" type="text" className="input" onChange={(e) => setCorreo(e.target.value)} />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Contraseña</label>
                <input id="pass" type="password" className="input" data-type="password" onChange={(e) => setContrasenia(e.target.value)} />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Iniciar sesión" onClick={log} />
              </div>

            </div>
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="correo" className="label">Dirección de correo electrónico</label>
                <input id="correo" type="text" className="input" onChange={(e) => setCorreo(e.target.value)} />
              </div>
              <div className="group">
                <label htmlFor="user-s" className="label">Nombre de usuario</label>
                <input id="user-s" type="text" className="input" onChange={(e) => setUsuario(e.target.value)} />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Contraseña</label>
                <input id="pass-s" type="password" className="input" data-type="password" onChange={(e) => setContrasenia(e.target.value)} />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Repite tu contraseña</label>
                <input id="pass-sr" type="password" className="input" data-type="password" onKeyUp={Verificar} />
              </div>
              <label id="verifica" className="label"></label>
              <hr></hr>
              <div className="group">
                <input onClick={handleSubmit} type="submit" className="button" value="Registrarse" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export { Iniciars }