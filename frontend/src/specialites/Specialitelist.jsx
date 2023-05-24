
import axios from "axios";
import * as React from 'react';
import { useState, useEffect } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


const SpecilaiteList = () => {


    const [specialities, setSpecialities] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://localhost:8081/api/specialites/all")
        .then((response) => {
          setSpecialities(response.data);
        });
    }, []);
    

    const handleEdit = (id) => {
      const newName = window.prompt("Enter the new name for this specialite:");
      if (newName) {
        axios
          .put(`http://localhost:8081/api/specialites/update`, {
            id: id,
            nom: newName,
          })
          .then(() => {
            setSpecialities(
              specialities.map((specialite) => {
                if (specialite.id === id) {
                  return { ...specialite, nom: newName };
                }
                return specialite;
              })
            );
          });
      }
    };
  
  
    const handleDelete = (id) => {
      if (window.confirm("Are you sure you want to delete this specalite?")) {
        axios
          .delete(`http://localhost:8081/api/specialites/delete/${id}`)
          .then(() => {
            setSpecialities(
              specialities.filter((specialite) => specialite.id !== id)
            );
          });
      }
    };


  return (
    <div>
       <h2>Specialite List</h2>
    <a class="btn btn-success" href="/addspecialite">Ajouter Specialite</a>
<table class="table table-bordered ">
  <thead class="table-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody class="table-group-divider ">
              {specialities.map((specialite) => (
            <tr key={specialite.id}>
              <td>{specialite.id}</td>
              <td>{specialite.nom}</td>
              <td>
                <button type="button" class="btn btn-warning" onClick={() => handleEdit(specialite.id)}>Edit</button><b>     </b>
                <button type="button" class="btn btn-danger" onClick={() => handleDelete(specialite.id)}>Deleter</button>

              </td>
            </tr>
          ))}
  </tbody>
</table>
 </div> );
};

export default SpecilaiteList;