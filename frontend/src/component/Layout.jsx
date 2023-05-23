import React from "react";
import * as mdb from 'mdb-ui-kit';
import { Input } from 'mdb-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
      <nav class="navbar navbar-expand-lg text-white">
        <div class="container-fluid">
        <NavLink class="navbar-brand" href="#">
      <img src="https://as2.ftcdn.net/v2/jpg/05/71/85/71/1000_F_571857119_fhgGAJ5Lr8RZcFWI42IXMx2CNGOlPdxS.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/></NavLink>
          <a class="navbar-brand text-white" href="#">Localisation Restaurant</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <NavLink className="nav-link active text-white" aria-current="page" href="#">Home</NavLink>
              <NavLink className="nav-link text-white" to="/restaurant">Restaurant</NavLink>
              <NavLink className="nav-link text-white" to="/villes">Villes</NavLink>
              <NavLink className="nav-link text-white" to="/zones">Zones</NavLink>
              <NavLink className="nav-link text-white" to="/series">Series</NavLink>
              <NavLink className="nav-link text-white" to="/specialites">Specialite</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

const Footer = () => {
  return (
    <div>
      <footer class="text-center text-lg-start bg-dark text-light fixed-bottom" style={{ 'bottom': 0,'position': 'relative'
 }}>
       <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Localistation Restaurant
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div class="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <NavLink className="nav-link text-white" to="/Restaurant ">Restaurant</NavLink>
                </p>
                <p>
                <NavLink className="nav-link text-white" to="/zones">Zone</NavLink>
                </p>
                <p>
                <NavLink className="nav-link text-white" to="/villes">Villes</NavLink>
                </p>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i class="fas fa-home me-3"></i> Marrakech, Innara 10012, MA</p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  crissnajm1998@gmail.com
                </p>
                <p><i class="fas fa-phone me-3"></i> + 212 671 012 945</p>
              </div>
            </div>
          </div>
        </section>
        <div class="text-center p-4" style={{"background-color": 'rgba(0, 0, 0, 0.05)'}}>
          © 2021 Copyright :
          <a class="text-reset fw-bold" href="#"> LocalistationRestaurant</a>
        </div>
      </footer>
        
    </div>
  );
};

export { Header, Footer };