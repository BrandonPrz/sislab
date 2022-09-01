import React from "react";
import { Button, Link } from "@mui/material";
import Boton_atras from "./componentes/boton_atras";

export const Ayuda_sesion = () => {
  return (
    <div>
      <h3>¿Estás registrado?</h3>

      <h4>
        Te recordamos que esta aplicación es sólo para el uso del personal de la
        Universidad de Sonora.
      </h4>
      <h4>
        El personal del Departamento de Ciencias Químico Biológicas debe de
        otorgarte tus credenciales para poder acceder.
      </h4>
      <h3>¿No puedes iniciar sesión?</h3>
      <h4>Si necesitas recuperar tu contraseña</h4>
      <Link color="#00C795" href="/">
        haz click aquí
      </Link>
      <h4>
        Si presentas problemas para iniciar sesión puedes mandar un correo a la
        siguiente dirección: soporte@sislab.com.mx
      </h4>
      <Boton_atras />
    </div>
  );
};
