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
    <div class="mt-4">
      <div class="container">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">Ville List</h2>
            <a class="btn btn-primary mb-3" href="/addville">
              Ajouter Ville
            </a>
            <div class="table-responsive">
              <div class="container">
                <table class="table table-bordered table-hover">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody class="">
                    {villes.map((ville) => (
                      <tr key={ville.id}>
                        <td>{ville.id}</td>
                        <td>{ville.nom}</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-sm btn-warning"
                            onClick={() => handleEdit(ville.id)}
                          >
                            Edit
                          </button>
                          <b> </b>
                          <button
                            type="button"
                            class="btn btn-sm btn-danger"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VillesList;
