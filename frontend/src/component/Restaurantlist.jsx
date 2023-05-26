import axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link, useParams } from "react-router-dom";

const RestaurantList = () => {
  const [Restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/api/restaurants/all").then((response) => {
      setRestaurants(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this restaurant ?")) {
      axios
        .delete(`http://localhost:8081/api/restaurants/delete/${id}`)
        .then(() => {
          setRestaurants(
            Restaurants.filter((restaurant) => restaurant.id !== id)
          );
        });
    }
  };

  return (
    <div class="mt-4">
      <div class="container">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">Restaurant List</h2>
            <a class="btn btn-primary mb-3" href="/addrestaurant">
              Ajouter restaurant
            </a>
            <div class="table-responsive">
              <div class="container">
                <table class="table table-bordered table-hover">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Nom</th>
                      <th scope="col">Adresse</th>
                      <th scope="col">langitude</th>
                      <th scope="col">latitude</th>
                      <th scope="col">Rang</th>
                      <th scope="col">serie</th>
                      <th scope="col">zone</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody class="table-group-divider ">
                    {Restaurants.map((Restaurant) => (
                      <tr key={Restaurant.id}>
                        <td>{Restaurant.id}</td>
                        <td>{Restaurant.nom}</td>
                        <td>{Restaurant.adresse}</td>
                        <td>{Restaurant.longtitude}</td>
                        <td>{Restaurant.lattitude}</td>
                        <td>{Restaurant.rang}</td>
                        <td>{Restaurant.serie && Restaurant.serie.nom}</td>
                        <td>{Restaurant.zone && Restaurant.zone.nom}</td>
                        <td>
                          <Link
                            className="btn btn-warning l-2m"
                            to={`/editresto/${Restaurant.id}`}
                          >
                            Edit
                          </Link>
                          <b> </b>
                          <button
                            type="button"
                            class="btn btn-danger"
                            onClick={() => handleDelete(Restaurant.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantList;
