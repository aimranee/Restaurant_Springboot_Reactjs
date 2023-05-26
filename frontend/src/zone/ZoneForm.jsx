import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ZoneForm = ({ onZoneAdded }) => {
  const [nom, setNom] = useState("");
  const [villeId, setVilleId] = useState("");
  const [villes, setVilles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8081/api/villes/all").then((response) => {
      setVilles(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8081/api/zones/save/${villeId}`, {
        nom: nom,
      })
      .then(() => {
        navigate("/zones");
      });
  };

  return (
    <div className="container mt-4">
      <h2>Create Zone</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">
            Nom:
          </label>
          <input
            type="text"
            className="form-control"
            id="nom"
            value={nom}
            onChange={(event) => setNom(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="villeId" className="form-label">
            Ville:
          </label>
          <select
            className="form-control"
            id="villeId"
            value={villeId}
            onChange={(event) => setVilleId(event.target.value)}
          >
            <option value="">Select a ville </option>
            {villes &&
              villes.map((ville) => (
                <option key={ville.id} value={ville.id}>
                  {ville.nom}
                </option>
              ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Zone
        </button>
      </form>
    </div>
  );
};

export default ZoneForm;
