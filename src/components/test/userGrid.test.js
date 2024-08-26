// Importamos funciones y utilidades necesarias desde @testing-library/react
import { render, screen, waitFor } from '@testing-library/react';
// Importamos el componente que vamos a probar
import UserGrid from '../UserGrid';
// Importamos el Router y rutas desde react-router-dom para simular la navegación en el test
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importamos axios porque lo vamos a mockear (simular su comportamiento)
import axios from 'axios';

// Mockeamos (simulamos) todas las funciones de axios, esto permite controlar lo que devuelve axios en nuestras pruebas
jest.mock('axios');

// Definimos un bloque de prueba. La función 'test' define un test individual.
// Este test verifica que 'UserGrid' se renderiza correctamente y realiza una llamada para obtener usuarios
test('renders UserGrid y fetches users', async () => {
  // Definimos datos simulados (mock) que serán devueltos por axios en lugar de realizar una solicitud real a la API
  const users = [
    { id: 1, first_name: 'John', last_name: 'Doe', email: 'john@example.com', phone_number: '123456789', username: 'john' }
  ];

  // Simulamos una resolución exitosa de la solicitud axios.get con los datos de usuarios anteriores
  axios.get.mockResolvedValueOnce({ data: users });

  // Usamos la función 'render' de @testing-library/react para renderizar el componente UserGrid
  // El componente se envuelve en un Router porque UserGrid depende de la navegación (usa useNavigate)
  render(
    <Router>
      <Routes>
        <Route path="/" element={<UserGrid />} /> {/* Definimos la ruta principal para UserGrid */}
        <Route path="/user/:id" element={<div>UserDetails Mock</div>} /> {/* Simulamos una ruta para UserDetails */}
      </Routes>
    </Router>
  );

  // Verificamos que al principio aparece el texto "Loading", que indica que el componente está cargando datos
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // Esperamos hasta que los usuarios simulados sean cargados en el componente UserGrid
  // 'waitFor' se utiliza para esperar a que ocurran cambios asíncronos en la UI, como una llamada de API completada
  await waitFor(() => expect(screen.getByText(/John Doe/i)).toBeInTheDocument());

  // Verificamos que el correo electrónico del usuario cargado también esté presente en el documento
  expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
});
