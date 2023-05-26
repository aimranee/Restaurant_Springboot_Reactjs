import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ReastauUpdate = () => {
  const [restaurant, setRestaurant] = useState([]);
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
  const [selectedVilleName, setSelectedVilleName] = useState("");
  const [selectedZoneId, setSelectedZoneId] = useState("");
  const [zone, setZone] = useState([]);
  const [ville, setVille] = useState([]);
  const [serie, setSerie] = useState([]);
  const [selectedZoneName, setSelectedZoneName] = useState("");
  const [selectedSerieId, setSelectedSerieId] = useState("");
  const [timeOpen, setTimeOpen] = useState("2023-05-04T11:20:00.000Z");
  const [timeClose, setTimeClose] = useState("2023-05-04T11:20:00.000Z");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadResto();
  }, []);

  const loadResto = async () => {
    const result = await axios.get(
      `http://localhost:8081/api/restaurants/find/${id}`
    );
    setNom(result.data.nom);
    setAdresses(result.data.adresse);
    setRangs(result.data.rang);
    setLongitude(result.data.longtitude);
    setLatitude(result.data.lattitude);
    setTimeOpen(result.data.open);
    setTimeClose(result.data.close);
    setZone(result.data.zone);
    setSelectedSerieId(result.data.serie.id);
    setSelectedZoneId(result.data.zone.id);
    setVille(result.data.ville);
    setSerie(result.data.serie);
    // navigate("/restaurant");
  };

  const handleRangChange = (event) => {
    setRangs(event.target.value);
  };

  const handleZoneChange = (event) => {
    setSelectedZoneId(event.target.value);
  };

  const handleSerieChange = (event) => {
    setSelectedSerieId(event.target.value);
  };

  const handleJourOpenChange = (event) => {
    setJourOpen(event.target.value);
  };

  const handleJourCloseChange = (event) => {
    setJourClose(event.target.value);
  };

  const handleTimeOpen = (event) => {
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
    // axios.get("/api/user/all").then((response) => {
    //   setSeries(response.data);
    // });
  }, []);

  const handleVilleChange = (event) => {
    const villeId = event.target.value;
    setSelectedVilleId(villeId);
    axios
      .get(`http://localhost:8081/api/zones/ville/zones/${villeId}`)
      .then((response) => {
        setZones(response.data);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:8081/api/restaurants/update", {
        id: 1,
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
              <input
                type="number"
                className="form-control"
                placeholder="Longitude"
                id="longitude"
                onChange={(event) => setLongitude(event.target.value)}
                value={longitude}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Latitude"
              id="latitude"
              value={latitude}
              onChange={(event) => {
                setLatitude(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <br />
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
          <div className="col-md-6">
            <br />
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
        </div>
        <br />

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="villeId">Select a city:</label>
              <select
                className="form-control"
                id="villeId"
                value={zone && zone.ville && zone.ville.nom}
                onChange={handleVilleChange}
              >
                <option selected="selected">
                  {zone && zone.ville && zone.ville.nom}
                </option>
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
              <label htmlFor="zoneId">Select a zone:</label>
              <select
                className="form-control"
                id="zoneId"
                value={selectedZoneName}
                onChange={handleZoneChange}
              >
                <option selected="selected"> {zone && zone.nom}</option>

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
              <label htmlFor="serieId">Select a serie:</label>
              <select
                className="form-control"
                id="serieId"
                value={selectedSerieId}
                onChange={handleSerieChange}
              >
                <option selected="selected"> {serie && serie.nom}</option>
                {series.map((serie) => (
                  <option key={serie.id} value={serie.id}>
                    {serie.nom}
                  </option>
                ))}
              </select>
            </div>
            <br />
          </div>
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
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="jrouverture">Jours d'ouverture:</label>
              <br />
              Du:{" "}
              <select
                nom="jour_open"
                id="jour_open"
                className="form-control"
                value={jour_open}
                onChange={handleJourOpenChange}
              >
                <option value="Lundi">Lundi</option>
                <option value="Mardi">Mardi</option>
                <option value="Mercredi">Mercredi</option>
                <option value="Jeudi">Jeudi</option>
                <option value="Vendredi">Vendredi</option>
                <option value="Samedi">Samedi</option>
                <option value="Dimanche">Dimanche</option>
              </select>
              A :{" "}
              <select
                nom="jour_close"
                id="jour_close"
                className="form-control"
                value={jour_close}
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

export default ReastauUpdate;
