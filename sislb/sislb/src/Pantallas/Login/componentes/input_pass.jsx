import * as React from "react";
import TextField from "@mui/material/TextField";

function Input_pass() {
  return (
    <TextField
      name="password"
      type="password"
      placeholder="password"
      label="Contraseña"
      variant="outlined"
      id="Inpt_pass"
    />
  );
}

export default Input_pass;
