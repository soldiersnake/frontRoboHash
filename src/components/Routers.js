import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./Home";
import { UserDetails } from "./UserDetails";
import { Slider } from "./Slider";
import { Requerimientos } from "./Requerimientos";

export const Routers = () => {
  const location = useLocation();
  return (
    <>
      {
        location.pathname === '/' || location.pathname === '/requerimiento' ?
        <Slider /> : null
      }
      <Routes>
        <Route path="/" element={<Home title={'Prueba Tecnica'}/>} />
        <Route path="/requerimiento" element={<Requerimientos />} />
        <Route path="/user/:id" element={<UserDetails />}/>
        {/* Genera que siempre vayamos al home '/' si la ruta no es encontrada */}
        <Route path="*" element={<Navigate to="/" title={'Error'}/>} />
      </Routes>
    </>
  );
};
