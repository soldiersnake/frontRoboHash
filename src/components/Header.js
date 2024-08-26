import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const [logoUrl, setLogoUrl] = useState("");

  // Función para generar una URL aleatoria
  const generateRandomImage = () => {
    const randomText = Math.random().toString(36).substring(7); // Genera una cadena aleatoria
    return `https://robohash.org/${randomText}`; // Usa esa cadena como parte de la URL
  };

  // Actualiza el logo con una nueva imagen aleatoria
  const updateLogo = () => {
    const newImageUrl = generateRandomImage();
    setLogoUrl(newImageUrl);
  };

  // Ejecuta la primera actualización al montar el componente
  useEffect(() => {
    updateLogo();
  }, []);

  return (
    <>
      <header id="header">
        <div className="center">
          {/* <!-- LOGO --> */}
          <div id="logo">
            <Link to='/'>
              <img
                src={logoUrl}
                className="app-logo"
                alt="Logo"
                onClick={updateLogo} // Actualiza la imagen al hacer clic
                style={{ cursor: "pointer" }} // Cambia el cursor para indicar que es clicable
              />
            </Link>
            <span id="brand">
              <strong>Macias </strong>Mariano
            </span>
          </div>
          {/* <!-- MENU --> */}
          <nav id="menu">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/requerimiento"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Requerimientos
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* <!-- LIMPIAR FLOTADOS --> */}
          <div className="clearfix"></div>
        </div>
      </header>
    </>
  );
};
