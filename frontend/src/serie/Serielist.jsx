import axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const SerieList = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/api/series/all").then((response) => {
      setSeries(response.data);
    });
  }, []);

  const handleEdit = (id) => {
    const newName = window.prompt("Enter the new name for this serie:");
    if (newName) {
      axios
        .put(`http://localhost:8081/api/series/update`, {
          id: id,
          nom: newName,
        })
        .then(() => {
          setSeries(
            series.map((serie) => {
              if (serie.id === id) {
                return { ...serie, nom: newName };
              }
              return serie;
            })
          );
        });
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this serie ?")) {
      axios.delete(`http://localhost:8081/api/series/delete/${id}`).then(() => {
        setSeries(series.filter((serie) => serie.id !== id));
      });
    }
  };

  return (
    <div class="mt-4">
      <div class="container">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">serie List</h2>
            <a class="btn btn-primary mb-3" href="/addserie">
              Ajouter serie
            </a>
            <div class="table-responsive">
              <table class="table table-bordered table-hover">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody class="">
                  {series.map((serie) => (
                    <tr key={serie.id}>
                      <td>{serie.id}</td>
                      <td>{serie.nom}</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-sm btn-warning"
                          onClick={() => handleEdit(serie.id)}
                        >
                          Edit
                        </button>
                        <b> </b>
                        <button
                          type="button"
                          class="btn btn-sm btn-danger"
                          onClick={() => handleDelete(serie.id)}
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
  );
};
export default SerieList;
