import React from "react";
import * as mdb from "mdb-ui-kit";
import { Input } from "mdb-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";

function Header() {
  return (
    <header>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="Image description" />
          </a>
          <a class="navbar-brand text-black" href="#">
            RestoGeo
          </a>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto justify-content-center">
              <NavLink className="nav-link text-black" to="/villes">
                Villes
              </NavLink>
              <NavLink className="nav-link text-black" to="/zones">
                Zones
              </NavLink>
              <NavLink className="nav-link text-black" to="/specialites">
                Specialite
              </NavLink>
              <NavLink className="nav-link text-black" to="/series">
                Series
              </NavLink>
              <NavLink className="nav-link text-black" to="/restaurant">
                Restaurant
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

const Footer = () => {
  return (
    <div>
      <footer
        class="bg-light text-center py-3 mt-4"
        style={{ bottom: 0, position: "fixed" }}
      >
        <div class="container">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export { Header, Footer };
