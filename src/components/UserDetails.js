import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";

export const UserDetails = () => {
  const location = useLocation();

  const { id } = useParams(); // Obtén el id de los parámetros de la URL
  const [user, setUser] = useState(location.state?.user || null);
  const [loading, setLoading] = useState(!location.state?.user);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(
            `https://random-data-api.com/api/v2/users/${id}`
          );
          setUser(response.data);
          setLoading(false);
        } catch (error) {
          setError("Error fetching user");
          setLoading(false);
        }
      };

      fetchUser();
    }
  }, [id, user]);

  //mensajes condicionales, por espera o error
  if (loading)
    return <p style={{ height: "500px" }}>Loading user details...</p>;
  if (error) return <p style={{ height: "500px" }}>{error}</p>;

  return (
    <>
      <div className="center">
        <section id="content" style={{ width: "100%", float: "none" }}>
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
                    <button className="btn">
                      Volver
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </article>
          <div className="clearfix"></div>
        </section>
      </div>
    </>
  );
};
