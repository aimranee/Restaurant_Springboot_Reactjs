import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const ZoneList = ({ villeId }) => {
    const [zones, setZones] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedZone, setSelectedZone] = useState(null);
    const [villes, setVilles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/api/zones/`);
            setZones(result.data);
        };
        fetchData();
    }, [villeId]);

    useEffect(() => {
        const fetchCities = async () => {
            const result = await axios(`/api/villes/`);
            setVilles(result.data);
        };
        fetchCities();
    }, []);

    const handleDelete = (zoneId) => {
        if (window.confirm("Are you sure you want to delete this zone?")) {
            axios.delete(`/api/zones/delete/id/${zoneId}`).then(() => {
                setZones(zones.filter((zone) => zone.id !== zoneId));
            });
        }
    };

    const handleOpenModal = (zone) => {
        setSelectedZone(zone);
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedZone(null);
        setModalIsOpen(false);
    };

    const handleSave = () => {
        handleCloseModal();
    };

    return (
        <div>
            <h2>Zones</h2>
            <Link to={`/addzone`} className="btn btn-primary">
                Add Zone
            </Link>
            <table className="table">
                <thead>
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
                                <button className="btn btn-danger" onClick={() => handleDelete(zone.id)}>
                                    Delete
                                </button>
                                <button className="btn btn-primary" onClick={() => handleOpenModal(zone)}>
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
                        <input type="text" />
                    </li>
                    <li>
                        <label>Ville:</label>
                        <select value={selectedZone && selectedZone.ville && selectedZone.ville.id}>
                            {villes.map((ville) => (
                                <option key={ville.id} value={ville.id}>
                                    {ville.nom}
                                </option>
                            ))}
                        </select>
                    </li>
                </ul>
                <button className="btn btn-primary" onClick={handleCloseModal}>
                    Annuler
                </button>
                <button className="btn btn-success" onClick={handleSave}>
                    Sauvegarder
                </button>
            </Modal>

        </div>
    );
};

export default ZoneList
