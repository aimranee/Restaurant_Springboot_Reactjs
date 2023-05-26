import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const ZoneList = ({ villeId }) => {
  const [zones, setZones] = useState([]);
  const [zId, setZId] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedZone, setSelectedZone] = useState(null);
  const [villes, setVilles] = useState([]);
  const [nom, setNom] = useState("");
  const [villed, setVilled] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:8081/api/zones/all`);
      setZones(result.data);
    };
    fetchData();
  }, [villeId]);

  useEffect(() => {
    const fetchCities = async () => {
      const result = await axios(`http://localhost:8081/api/villes/all`);
      setVilles(result.data);
    };
    fetchCities();
  }, []);

  const handleDelete = (zoneId) => {
    if (window.confirm("Are you sure you want to delete this zone?")) {
      axios
        .delete(`http://localhost:8081/api/zones/delete/${zoneId}`)
        .then(() => {
          setZones(zones.filter((zone) => zone.id !== zoneId));
        });
    }
  };

  const handleOpenModal = (zone) => {
    setSelectedZone(zone);
    setNom(zone.nom);
    setVilled(zone.ville.id);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedZone(null);
    setModalIsOpen(false);
  };

  const handleSave = () => {
    axios.put(`http://localhost:8081/api/zones/update/${villed}`, {
      id: zId,
      nom: nom,
    });
    handleCloseModal();
  };

  return (
    <div class="mt-4">
      <div class="container">
        <div class="card">
          <div class="card-header">
            <h2>Zones List</h2>
            <a class="btn btn-primary mb-3" href="/addzone">
              Ajouter Zone
            </a>
            <div class="table-responsive">
              <div class="container">
                <table class="table table-bordered table-hover">
                  <thead class="thead-dark">
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Ville</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {zones.map((zone) => (
                      <tr key={zone.id}>
                        <td>{zone.id}</td>
                        <td>{zone.nom}</td>
                        <td>{zone.ville.nom}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(zone.id)}
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              setZId(zone.id);
                              handleOpenModal(zone);
                            }}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
                  <h3>Modification de la zone</h3>
                  <ul>
                    <li>
                      <label>Nom de la zone:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nom"
                        value={nom}
                        onChange={(event) => setNom(event.target.value)}
                      />
                    </li>
                    <li>
                      <label>Ville: </label>
                      <select
                        className="form-control"
                        id="villeId"
                        value={
                          selectedZone &&
                          selectedZone.ville &&
                          selectedZone.ville.id
                        }
                        onChange={(event) => {
                          setVilled(event.target.value);
                          setSelectedZone(villed);
                        }}
                      >
                        {villes &&
                          villes.map((ville) => (
                            <option key={ville.id} value={ville.id}>
                              {ville.nom}
                            </option>
                          ))}
                      </select>
                    </li>
                  </ul>
                  <button
                    className="btn btn-sm btn-warning"
                    onClick={handleCloseModal}
                  >
                    Annuler
                  </button>
                  <button className="btn btn-sm btn-dange" onClick={handleSave}>
                    Sauvegarder
                  </button>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoneList;
