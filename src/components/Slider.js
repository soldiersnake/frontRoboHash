import React from 'react';
import { useLocation } from 'react-router-dom';

export const Slider = () => {
  const location = useLocation();
    
  return (
    <>
        {/* Segun el path de ruta que estemos cambiara el titulo del Slider */}
        <div id="slider" className={location.pathname === '/' ? "slider" : "slider-small"}>
            <h1 className={'typewriter-container'} style={{ fontFamily: "'Edu AU VIC WA NT Hand', cursive" }}>
              {location.pathname === '/'              ? 'Prueba Tecnica'
                : location.pathname === '/requerimiento'    ? 'Requerimientos'
                : 'Detalle'
              }
            </h1>
        </div>
    </>
  )
}
