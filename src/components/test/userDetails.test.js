// Importamos funciones y utilidades necesarias desde @testing-library/react
// Estas funciones se utilizan para renderizar componentes, interactuar con ellos y esperar cambios en la UI.
import { render, screen, waitFor } from '@testing-library/react';

// Importamos el Router desde react-router-dom para envolver nuestro componente en un contexto de rutas, ya que el componente a probar depende del Router.
import { BrowserRouter as Router } from 'react-router-dom';

// Importamos axios porque vamos a mockear su comportamiento para evitar llamadas reales a la API.
import axios from 'axios';

// Importamos el componente que vamos a probar, en este caso, UserGrid.
import UserGrid from '../UserGrid';

// Mockeamos (simulamos) todas las funciones de axios, permitiéndonos controlar lo que devuelve axios en nuestras pruebas en lugar de hacer solicitudes HTTP reales.
jest.mock('axios');

// Definimos un bloque de prueba con la función `test`. Este test verifica que el componente `UserGrid` se renderiza correctamente y simula la carga de usuarios desde una API.
test('renders UserGrid component and fetches users', async () => {
  // Definimos los datos simulados (mock) que serán devueltos por axios en lugar de realizar una solicitud real a la API.
  const users = [
    { id: 1, first_name: 'John', last_name: 'Doe', email: 'john@example.com', phone_number: '123456789', username: 'john' }
  ];

  // Simulamos una resolución exitosa de la solicitud axios.get con los datos de usuarios anteriores.
  axios.get.mockResolvedValueOnce({ data: users });

  // Renderizamos el componente `UserGrid` dentro de un `Router`, ya que `UserGrid` depende de la navegación proporcionada por el Router.
  // `render` es una función proporcionada por @testing-library/react que monta el componente en un DOM virtual para las pruebas.
  render(
    <Router>
      <UserGrid />
    </Router>
  );

  // Verificamos que inicialmente aparece el texto "Loading...", lo que indica que el componente está cargando datos de los usuarios.
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // Esperamos hasta que los usuarios simulados sean cargados y mostrados en la UI.
  // `waitFor` se utiliza para esperar a que ocurra algún cambio asíncrono en la UI (como una llamada de API completada).
  await waitFor(() => expect(screen.getByText(/John Doe/i)).toBeInTheDocument());

  // Verificamos que el correo electrónico del usuario cargado también esté presente en el documento.
  expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
});
