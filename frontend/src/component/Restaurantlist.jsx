
import axios from "axios";
import * as React from 'react';
import { useState, useEffect } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Modal } from "@mui/material";
import { Link, useParams } from "react-router-dom";


const RestaurantList = () => {


  


    const [Restaurants, setRestaurants] = useState([]);
  

    useEffect(() => {
      axios.get("/api/restaus/").then((response) => {
        setRestaurants(response.data);
      });
    }, []);
  
  
    const handleDelete = (id) => {
      if (window.confirm("Are you sure you want to delete this restaurant ?")) {
        axios.delete(`/api/restaus/delete`,{
          data: { id: id }
        }).then(() => {
          setRestaurants(Restaurants.filter((restaurant) => restaurant.id !== id));
        });
      }
    };


  return (
    <div>

       <h2>Restaurant List</h2>
    <a class="btn btn-success" href="/addrestaurant">Ajouter restaurant</a>
<table class="table table-bordered ">
  <thead class="table-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nom</th>
      <th scope="col">Adresse</th>
      <th scope="col">langitude</th>
      <th scope="col">latitude</th>
      <th scope="col">serie</th>
      <th scope="col">zone</th>
      <th scope="col">User</th>
      <th scope="col">Action</th>

      
    </tr>
  </thead>
  <tbody class="table-group-divider ">
              {Restaurants.map((Restaurant) => (
            <tr key={Restaurant.id}>
              <td>{Restaurant.id}</td>
              <td>{Restaurant.nom}</td>
              <td>{Restaurant.adress}</td>
              <td>{Restaurant.lang}</td>
              <td>{Restaurant.lat}</td>
              <td>{Restaurant.serie && Restaurant.serie.nom }</td>
              <td>{Restaurant.zone && Restaurant.zone.nom}</td>
              <td>{Restaurant.user && Restaurant.user.email}</td>
              <td>

              <Link className="btn btn-warning ml-2" to={`/editresto/${Restaurant.id}`}>
                Edit
                </Link><b>   </b>
                <button type="button" class="btn btn-danger" onClick={() => handleDelete(Restaurant.id)}>Deleter</button>

                

              </td>
            </tr>
          ))}
  </tbody>
</table>
 </div> );
};
export default RestaurantList;

