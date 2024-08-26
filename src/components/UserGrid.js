import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserGrid = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  const fetchUsers = async (retryCount = 0) => {
    try {
      const response = await axios.get(
        `https://random-data-api.com/api/v2/users?size=100&page=${page}`
      );
      setUsers((prevUsers) => [...prevUsers, ...response.data]); //se almacenan los nuevos usuarios conservando los anteriores

      // Simula cuando ya no hay más datos para cargar
      if (response.data.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      if (error.response && error.response.status === 429 && retryCount < 5) {
        // Si obtenemos un 429, espera y reintenta
        const waitTime = (retryCount + 1) * 2000; // Tiempo de espera creciente
        console.warn(`Error 429, retrying after ${waitTime / 1000} seconds...`);
        setTimeout(() => fetchUsers(retryCount + 1), waitTime); //TImer para preguntar nuevamente si hay error
      } else {
        console.error("Error fetching users:", error);
        setHasMore(false); // Detenemos la carga infinita si hay un error constante
      }
    }
  };

  //llamamos a la funcion de consulta a la api, cada vez que pasamos la pagina
  useEffect(() => {
    fetchUsers();
  }, [page]);

  // pasamos de pagina al finalizar el scroll por lo tanto se realizara otra solicitud a la API
  const fetchMoreData = () => {
    setPage(page + 1);
  };

  // Se envian los datos por estado de navegacion
  const handleViewDetails = (user) => {
    // Navega a la ruta del detalle del usuario
    navigate(`/user/${user.id}`, { state: { user } });
  };

  return (
    <InfiniteScroll //libreria de scroll infinito
      dataLength={users.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more users to load</p>}
    >
      {/* Listado de los usuarios que traemos de la API */}
      <div className="user-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img
              src={`https://robohash.org/${user.username}`}
              alt={user.first_name}
            />
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone_number}</p>
            <button className="btn" onClick={() => handleViewDetails(user)}>
              Ver Mas
            </button>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default UserGrid;
