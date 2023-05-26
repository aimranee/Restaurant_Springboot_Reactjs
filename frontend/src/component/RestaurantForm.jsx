import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ReastauForm = () => {
  const [zones, setZones] = useState([]);
  const [villes, setVilles] = useState([]);
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [adresse, setAdresses] = useState([]);
  const [series, setSeries] = useState([]);
  const [rang, setRangs] = useState("1");
  const [nom, setNom] = useState([]);
  const [jour_open, setJourOpen] = useState(["Lundi"]);
  const [jour_close, setJourClose] = useState(["Lundi"]);
  const concatenatedString = "De " + jour_open.concat(" A " + jour_close);
  const [selectedVilleId, setSelectedVilleId] = useState("");
  const [selectedZoneId, setSelectedZoneId] = useState("");
  const [selectedSerieId, setSelectedSerieId] = useState("");
  const [timeOpen, setTimeOpen] = useState("2023-05-04T11:20:00.000Z");
  const [timeClose, setTimeClose] = useState("2023-05-04T11:20:00.000Z");
  const navigate = useNavigate();

  const handleRangChange = (event) => {
    setRangs(event.target.value);
  };
  const handleZoneChange = (event) => {
    setSelectedZoneId(event.target.value);
  };
  const handleSerieChange = (event) => {
    setSelectedSerieId(event.target.value);
  };

  const handleJourChange = (event) => {
    if (event.target.nom === jour_open) {
      setJourOpen(event.target.value);
    } else setJourClose(event.target.value);
  };

  const handleJourOpenChange = (event) => {
    setJourOpen(event.target.value);
  };

  const handleJourCloseChange = (event) => {
    setJourClose(event.target.value);
  };

  const handleTimeOpen = (event) => {
    console.log("timeeeeeee = " + event.target.value);
    setTimeOpen(event.target.value);
  };
  const handleTimeClose = (event) => {
    setTimeClose(event.target.value);
  };

  useEffect(() => {
    axios.get("http://localhost:8081/api/villes/all").then((response) => {
      setVilles(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8081/api/series/all").then((response) => {
      setSeries(response.data);
    });
  }, []);

  useEffect(() => {
    // axios.get("http://localhost:8081/api/user/all").then((response) => {
    //   setSeries(response.data);
    // });
  }, []);

  const handleVilleChange = (event) => {
    const villeId = event.target.value;
    setSelectedVilleId(villeId);
    axios
      .get(`http://localhost:8081/api/zones/ville/${villeId}`)
      .then((response) => setZones(response.data));
    //   (response) => {
    //   console.log("dataaaaa : " + response.data);
    //   setZones(response.data);
    // });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/api/restaurants/save", {
        nom: nom,
        adresse: adresse,
        rang: rang,
        open: timeOpen + ":00",
        close: timeClose + ":00",
        longtitude: longitude,
        lattitude: latitude,
        Weekend: concatenatedString,
        serie: {
          id: selectedSerieId,
        },
        zone: {
          id: selectedZoneId,
        },
      })
      .then((response) => {
        setNom("");
        setAdresses("");
        setRangs("");
        setLongitude("");
        setLatitude("");
        setTimeOpen("");
        setTimeClose("");
        setSelectedZoneId("");
        selectedSerieId("");
        setSelectedVilleId("");
        navigate("/restaurant");
      });
  };

  return (
    <div className="container mt-4">
      <h2>Creation d'une Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="nom">Nom du restaurant:</label>
              <input
                type="text"
                placeholder="Nom du restaurant"
                className="form-control"
                id="nom"
                value={nom}
                onChange={(event) => setNom(event.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="adresse">Adresse du restaurant:</label>

              <input
                type="text"
                placeholder="Adresse"
                className="form-control"
                id="adresse"
                value={adresse}
                onChange={(event) => setAdresses(event.target.value)}
              />
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="villeId">Sélectionnez une Heure Ouvrir :</label>
              <input
                type="time"
                className="form-control"
                placeholder="Latitude"
                id="heur_close"
                value={timeOpen}
                onChange={handleTimeOpen}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="villeId">Sélectionnez une heure Fermer :</label>
              <input
                type="time"
                className="form-control"
                id="heur_close"
                value={timeClose}
                onChange={handleTimeClose}
              />
            </div>
          </div>
          <div className="col-md-6">
            <br />
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Longitude"
                id="longitude"
                value={longitude}
                onChange={(event) => setLongitude(event.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <br />

            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Latitude"
                id="latitude"
                value={latitude}
                onChange={(event) => setLatitude(event.target.value)}
              />
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="Rang">Sélectionnez un rang :</label>
              <select
                className="form-control"
                id="rangId"
                value={rang}
                onChange={handleRangChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <br />
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="villeId">Sélectionnez un ville:</label>
              <select
                className="form-control"
                id="villeId"
                value={selectedVilleId}
                onChange={handleVilleChange}
              >
                <option value="">All villes</option>
                {villes.map((ville) => (
                  <option key={ville.id} value={ville.nom}>
                    {ville.nom}
                  </option>
                ))}
              </select>
            </div>
            <br />
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="zoneId">Sélectionnez un zone:</label>
              <select
                className="form-control"
                id="zoneId"
                value={selectedZoneId}
                onChange={handleZoneChange}
              >
                <option value="">All zones</option>
                {zones.map((zone) => (
                  <option key={zone.id} value={zone.id}>
                    {zone.nom}
                  </option>
                ))}
              </select>
            </div>
            <br />
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="serieId">Sélectionnez un serie:</label>
              <select
                className="form-control"
                id="serieId"
                value={selectedSerieId}
                onChange={handleSerieChange}
              >
                <option value="">All series</option>
                {series.map((serie) => (
                  <option key={serie.id} value={serie.id}>
                    {serie.nom}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="jrouverture">Jours d'ouverture:</label>
              <br />
              Du:{" "}
              <select
                nom="jour_open"
                id="jour_open"
                value={jour_open}
                className="form-control"
                onChange={handleJourOpenChange}
              >
                <option value="Lundi">Lundi</option>
                <option value="Mardi">Mardi</option>
                <option value="Mercredi">Mercredi</option>
                <option value="Jeudi">Jeudi</option>
                <option value="Vendredi">Vendredi</option>
                <option value="Samedi">Samedi</option>
                <option value="Dimanche">Dimanche</option>
              </select>{" "}
              A :{" "}
              <select
                nom="jour_close"
                id="jour_close"
                value={jour_close}
                className="form-control"
                onChange={handleJourCloseChange}
              >
                <option value="Lundi">Lundi</option>
                <option value="Mardi">Mardi</option>
                <option value="Mercredi">Mercredi</option>
                <option value="Jeudi">Jeudi</option>
                <option value="Vendredi">Vendredi</option>
                <option value="Samedi">Samedi</option>
                <option value="Dimanche">Dimanche</option>
              </select>
            </div>
          </div>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default ReastauForm;
