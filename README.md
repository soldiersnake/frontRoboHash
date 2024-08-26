# Prueba Técnica - ReactJS UserGrid Application

## Descripción

Este proyecto es una aplicación desarrollada en ReactJS que consume datos de usuarios desde la API de [random-data-api](https://random-data-api.com/api/v2/users) y los muestra en una cuadrícula de tres columnas. Implementa scroll infinito para cargar más usuarios dinámicamente a medida que el usuario se desplaza hacia abajo. Además, cada usuario puede ser visto en detalle al hacer clic en el botón "Ver Más". La aplicación también cuenta con navegación usando `react-router-dom`.

## Funcionalidades

1. **Visualización de usuarios en cuadrícula:** Los usuarios se muestran en una cuadrícula de tres columnas con información básica como nombre, correo electrónico y teléfono.
2. **Scroll infinito:** Los usuarios adicionales se cargan automáticamente a medida que el usuario se desplaza hacia abajo en la página.
3. **Detalle de usuario:** Al hacer clic en un usuario, se navega a una página de detalles donde se muestra información más completa del usuario seleccionado.
4. **Simulación de API:** Los datos de los usuarios son obtenidos de [random-data-api](https://random-data-api.com/api/v2/users).
5. **Pruebas:** Se implementaron pruebas unitarias utilizando `React Testing Library` y `Jest` para validar el correcto funcionamiento de las funcionalidades clave.

## Tecnologías Utilizadas

- **React 18.3.1**
- **React Router DOM 6.26.1**
- **Axios 1.7.5**
- **React Infinite Scroll Component 6.1.0**
- **Jest y React Testing Library** para las pruebas unitarias.

## Instalación

Para instalar y ejecutar la aplicación localmente, sigue estos pasos:

1. **Clonar el repositorio:**

   ```
   https://github.com/soldiersnake/frontRoboHash.git
   ```

2. **Navegar al directorio del proyecto:**
    ```
   cd frontRoboHash
   ```

3. **Instalar las dependencias:**
    ```
   npm install
   ```

4. **Ejecutar la aplicación en modo de desarrollo:**
    ```
   npm start
   ```
Esto abrirá la aplicación en http://localhost:3000/

5. **Compilar para producción:**
    ```
   npm build
   ```

## Ejecución de Pruebas

Para ejecutar las pruebas unitarias con Jest y React Testing Library, utiliza el siguiente comando:
   ```
   npm test
   ```

## Estructura del Proyecto

    ├── public
    │   ├── index.html
    │   └── robots.txt
    ├── src
    │   ├── assets
    │   ├── components
    │   │   ├── Footer.js
    │   │   ├── Header.js
    │   │   ├── Home.js
    │   │   ├── Requerimientos.js
    │   │   ├── Routers.js
    │   │   ├── Sidebar.js
    │   │   ├── Slider.js
    │   │   ├── UserDetails.js
    │   │   ├── UserGrid.js
    │   ├── App.js
    │   ├── index.js
    │   ├── App.test.js
    │   └── setupTests.js
    ├── .env
    ├── package.json
    ├── README.md
    └── yarn.lock

## Componentes Clave
- UserGrid.js: Maneja la visualización de usuarios y la implementación del scroll infinito.
- UserDetails.js: Muestra los detalles del usuario seleccionado.
- Routers.js: Configura las rutas de la aplicación para la navegación.
- App.js: Punto de entrada principal que organiza los componentes.

## API
La aplicación utiliza la API de random-data-api para obtener los datos de los usuarios. La API se consulta usando axios.
```
   const response = await axios.get(
        `https://random-data-api.com/api/v2/users?size=100&page=${page}`
    );

```

## Despliegue en Producción

La aplicacion esta desplegada en Netlify, su URL es:
[Netlify RoboHash app](https://marianomacias-robohash.netlify.app/).

## Contribuciones
Si deseas contribuir a este proyecto, puedes hacer lo siguiente:

1. Haz un fork del repositorio.
2. Crea una rama con tu feature/fix (git checkout -b mi-nueva-feature).
3. Haz commit de tus cambios (git commit -m 'Agregar nueva feature').
4. Haz push a la rama (git push origin mi-nueva-feature).
5. Abre un Pull Request.

## Autor
### Mariano Damian Macias Gandulfo ###

Este proyecto fue creado como parte de una prueba técnica.