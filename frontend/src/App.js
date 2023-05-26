import "./App.css";
import { Header, Footer } from "./component/Layout";
import Specilaitelist from "./specialites/Specialitelist";
import Index from "./component";
import SpecialiteForm from "./specialites/SpecialiteForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Villeform from "./ville/VilleFrom";
import Villelist from "./ville/Villelist";
import ZoneList from "./zone/Zonelist";
import ZoneForm from "./zone/ZoneForm";
import SerieList from "./serie/Serielist";
import SerieForm from "./serie/SerieForm";
import RestaurantList from "./component/Restaurantlist";
import RestaurantForm from "./component/RestaurantForm";
import ReastauUpdate from "./component/Reastaupdate";
import Map from "./component/mapdetails"

function App() {
  //<ResponsiveAppBar/>
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/restaurant" element={<RestaurantList />} />
          <Route path="/addrestaurant" element={<RestaurantForm />} />
          <Route path="/specialites" element={<Specilaitelist />} />
          <Route path="/addspecialite" element={<SpecialiteForm />} />
          <Route path="/villes" element={<Villelist />} />
          <Route path="/addville" element={<Villeform />} />
          <Route path="/series" element={<SerieList />} />
          <Route path="/addserie" element={<SerieForm />} />
          <Route path="/zones" element={<ZoneList />} />
          <Route path="/addzone" element={<ZoneForm />} />
          <Route path="/editzone" element={<ZoneForm />} />
          <Route path="/editresto/:id" element={<ReastauUpdate />} />
          <Route path="/map/:id" element={<Map />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
