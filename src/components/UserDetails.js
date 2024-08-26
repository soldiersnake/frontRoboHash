import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const UserDetails = () => {
  const { id } = useParams(); // Obtén el id de los parámetros de la URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async (retryCount = 0) => {
    try {
      // Realiza una solicitud a la API con el ID específico del usuario
      const response = await axios.get(
        `https://random-data-api.com/api/v2/users/${id}`
      );
      setUser(response.data); // Guarda los datos del usuario en el estado
      setLoading(false); // Marca la carga como completa
    } catch (error) {
      if (error.response && error.response.status === 429 && retryCount < 5) {
        // Si obtenemos un 429, espera y reintenta
        const waitTime = (retryCount + 1) * 2000;
        console.warn(`Error 429, retrying after ${waitTime / 1000} seconds...`);
        setTimeout(() => fetchUser(retryCount + 1), waitTime);
      } else {
        console.error("Error fetching user:", error);
        setError("Error fetching user"); // Marca un error si falla repetidamente
        setLoading(false); // Detenemos la carga
      }
    }
  };

  useEffect(() => {
    fetchUser(); // Llama a la función para obtener los detalles del usuario
  }, [id]); // Se ejecuta cada vez que cambia el id

  const deleteUser = () => {
    setUser(null);
  };

  //mensajes condicionales, por espera o error
  if (loading) return <p style={{height: '600px'}}>Loading user details...</p>;
  if (error) return <p style={{height: '600px'}}>{error}</p>;

  return (
    <>
      <div className="center">
        <section id="content" style={{ width: "100%" }}>
          <article className="article-item article-detail">
            <div className="user-grid-details">
              {user && (
                <div className="user-card-details">
                  <img
                    className="profile-img-details"
                    src={`https://robohash.org/${user.username}`} //la imagen siempre es aleatorea
                    alt={user.first_name}
                  />
                  <h3>
                    {user.first_name} {user.last_name}
                  </h3>
                  <p className="user-email">Email: {user.email}</p>
                  <p className="user-phone">Phone: {user.phone_number}</p>
                  <p className="user-address">
                    Address: {user.address.street_address}, {user.address.city},{" "}
                    {user.address.state}
                  </p>
                  <p className="user-job">Job: {user.employment.title}</p>
                  <p className="user-birthday">
                    DOB: {new Date(user.date_of_birth).toLocaleDateString()}
                  </p>
                  <Link to={`/`}>
                    <button onClick={deleteUser} className="btn">
                      Volver
                    </button>
                  </Link>
                </div>
              )}
              {/* Es una aclaracion ya que la api siempre arroja users random */}
              <p className="user-alert">
                <span>Advertencia: </span>
                El usuario no corresponde al seleccionado, ya que siempre es
                información aleatoria que llega desde la API.
              </p>
            </div>
          </article>
          <div className="clearfix"></div>
        </section>
      </div>
    </>
  );
};
