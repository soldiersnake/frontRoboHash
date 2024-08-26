import React from "react";
import imagen from "../assets/images/3.png"

export const Requerimientos = () => {
  return (
    <>
      <div className="center">
        <section id="content" style={{ width: "100%" }}>
          <article className="article-item article-detail">
            <div className="imagen-wrap">
              <img
                src={imagen}
                alt="Imagen Robot"
              />
            </div>
            <h1 className="subheader">Instrucciones prueba tecnica</h1>

            <span className="date">Requisitos de prueba tecnica</span>
            <h3>Objetivo:</h3>
            <p>
              Crear una página web con la última versión de Reactjs que obtenga
              una lista de usuarios de la API proporcionada y los muestre en
              filas de tres columnas. Además, la página web debe cargar
              dinámicamente otro conjunto de usuarios a medida que el usuario se
              desplaza hacia abajo.
            </p>

            <h3>Requisitos:</h3>
            <ol>
              <li>Versión de React:</li>
              <p>
                - Utilizar la última versión de React para el desarrollo de la
                página web.
              </p>

              <li>Integración de la API:</li>
              <p>
                - Obtener una lista de usuarios de la API:
                `https://random-data-api.com/api/v2/users?size=100`.
              </p>

              <li>Visualización de usuarios:</li>
              <p>
                - Mostrar usuarios en filas de tres columnas.
                <br />
                - Cada usuario debe incluir al menos los siguientes detalles:
                nombre, correo electrónico y teléfono.
                <br />
                - Cada usuario debe tener una imagen única recuperada de
                `https://robohash.org/`.
                <br />
              </p>

              <li>Desplazamiento infinito:</li>
              <p>
                - Implemente el desplazamiento infinito para cargar
                dinámicamente usuarios adicionales a medida que el usuario se
                desplaza hacia abajo en la página.
              </p>

              <li>Diseño:</li>
              <p>
                - El desarrollador tiene la libertad creativa de diseñar la
                página web como mejor le parezca.
                <br />- Concéntrese en crear un diseño visualmente atractivo y
                responsivo.
              </p>

              <li>Calidad del código:</li>
              <p>
                - Escriba código limpio, fácil de mantener y bien documentado.
                <br />- Siga las mejores prácticas y pautas en el desarrollo de
                React.
              </p>

              <li>Pruebas:</li>
              <p>- Implemente pruebas básicas para funcionalidades clave.</p>
            </ol>

            <h3>Envío:</h3>
            <ol>
              <li>ReadMe:</li>
              <p>
                - Incluya un archivo ReadMe con instrucciones sobre cómo
                ejecutar la aplicación localmente.
              </p>
              <li>Demostración en vivo (opcional):</li>
              <p>
                - Proporcione un enlace a una demostración en vivo si es
                posible.
              </p>
            </ol>

            <h3>Evaluación:</h3>
            <p>
              La evaluación se basará en la integridad de la implementación, el
              cumplimiento de los requisitos, la calidad del código y la
              experiencia general del usuario de la página web.
            </p>
          </article>
            <div className="clearfix"></div>
        </section>
      </div>
    </>
  );
};
