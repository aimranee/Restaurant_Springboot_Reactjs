import axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const VillesList = () => {
  const [villes, setVilles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/api/villes/all").then((response) => {
      setVilles(response.data);
    });
  }, []);

  const handleEdit = (id) => {
    const newName = window.prompt("Enter the new name for this ville:");
    if (newName) {
      axios
        .put(`http://localhost:8081/api/villes/update`, {
          id: id,
          nom: newName,
        })
        .then(() => {
          setVilles(
            villes.map((ville) => {
              if (ville.id === id) {
                return { ...ville, nom: newName };
              }
              return ville;
            })
          );
        });
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this ville ?")) {
      axios.delete(`http://localhost:8081/api/villes/delete/${id}`).then(() => {
        setVilles(villes.filter((ville) => ville.id !== id));
      });
    }
  };

  return (
    <div>
      <h2>Ville List</h2>
      <a class="btn btn-success" href="/addville">
        Ajouter Ville
      </a>
      <table class="table table-bordered ">
        <thead class="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody class="table-group-divider ">
          {villes.map((ville) => (
            <tr key={ville.id}>
              <td>{ville.id}</td>
              <td>{ville.nom}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => handleEdit(ville.id)}
                >
                  Edit
                </button>
                <b> </b>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => handleDelete(ville.id)}
                >
                  Deleter
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default VillesList;
