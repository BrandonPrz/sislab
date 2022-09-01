import React from "react";
import { Button, Link } from "@mui/material";
import Boton_atras from "./componentes/boton_atras";
import Input_correo from "./componentes/input_correo";

export const Recuperacion = () => {
  return (
    <div>
      <h3>Recuperar contraseña</h3>
      <h4>Ingresa el correo con el que estás registrado en el sistema</h4>
      <Input_correo />
      <Boton_atras />
      <Button variant="contained" color="success" size="large" id="Btn_sig">
        Siguiente
      </Button>
    </div>
  );
};
