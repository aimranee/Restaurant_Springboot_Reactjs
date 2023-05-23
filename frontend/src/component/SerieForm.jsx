import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const SerieForm = () => {
  const [nom, setNom] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/api/series/save", { nom }).then(() => {
      navigate("/series");
    });
  };

  return (
    <div>
      <h2>Create Serie</h2>
      <form onSubmit={handleSubmit}> 
          <label htmlFor="nom">Nom:</label>
          <TextField id="nom" variant="standard" type="text" value={nom} onChange={(event) => setNom(event.target.value)} />
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};

export default SerieForm;