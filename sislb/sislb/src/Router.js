import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Ayuda_sesion } from "./Pantallas/Login/ayuda_sesion";
import { Recuperacion } from "./Pantallas/Login/recuperacion";
const Router = () => {
  const Ayuda = () => <h1>Ayuda</h1>;
  const Recuperar = () => <h1>Recuperar</h1>;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ayuda" element={<Ayuda_sesion />}></Route>
          <Route path="/recuperar" element={<Recuperacion />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;