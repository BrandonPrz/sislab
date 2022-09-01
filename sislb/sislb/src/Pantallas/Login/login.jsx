import * as React from "react";
import Input_correo from "./componentes/input_correo";
import Input_pass from "./componentes/input_pass";
import { Button, Link as Enlace } from "@mui/material";
import Logo from "./images/logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Login() {
  return (
    <div className="App">
      <img src={Logo} alt="BigCo Inc. logo" />
      <br />
      <h2>Inicia Sesión</h2>
      <br />
      <Input_correo />
      <br />
      <br />
      <Input_pass />
      <br />
      <Router>
        <div>
          <Link to="/recuperar">
            <Enlace color="#00C795">¿Olvidaste tu contraseña?</Enlace>
          </Link>
        </div>
      </Router>

      <br />
      <br />
      <Button variant="contained" color="success" size="large" id="Btn_login">
        Iniciar Sesión
      </Button>
      <br />

      <Router>
        <div>
          <Link to={"/ayuda"}>
            <Enlace color="#00C795">¿Problemas para iniciar sesión?</Enlace>
          </Link>
        </div>
      </Router>
    </div>
  );
}

export default Login;
