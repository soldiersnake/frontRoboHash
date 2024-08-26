import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserGrid = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchUsers = async (retryCount = 0) => {
    try {
      const response = await axios.get(
        `https://random-data-api.com/api/v2/users?size=9&page=${page}`
      );
      setUsers((prevUsers) => [...prevUsers, ...response.data]);

      // Simula cuando ya no hay más datos para cargar
      if (response.data.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      if (error.response && error.response.status === 429 && retryCount < 5) {
        // Si obtenemos un 429, espera y reintenta
        const waitTime = (retryCount + 1) * 2000; // Tiempo de espera creciente
        console.warn(`Error 429, retrying after ${waitTime / 1000} seconds...`);
        setTimeout(() => fetchUsers(retryCount + 1), waitTime);
      } else {
        console.error("Error fetching users:", error);
        setHasMore(false); // Detenemos la carga infinita si hay un error constante
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <InfiniteScroll
      dataLength={users.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more users to load</p>}
    >
      <div className="user-grid">
        {users.map((user, index) => (
          <>
            <div key={index} className="user-card">
              <img src={`https://robohash.org/${user.username}`} alt={user.first_name} />
              <h3>{user.first_name} {user.last_name}</h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone_number}</p>
              <Link to={`/user/${user.id}`}>
                <button className="btn">Ver Mas</button>
              </Link>
            </div>
          </>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default UserGrid;
