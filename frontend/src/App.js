import './App.css';
import { Header, Footer } from './component/Layout';
import Specilaitelist from './component/Specialitelist'; 
import Index from './component'; 
import SpecialiteForm from './component/SpecialiteForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Villeform from './component/VilleFrom';
import Villelist from './component/Villelist';
import ZoneList from './component/Zonelist';
import ZoneForm from './component/ZoneForm';
import SerieList from './component/Serielist';
import SerieForm from './component/SpecialiteForm';
import RestaurantList from './component/Restaurantlist';
import ZoneByVille from './component/RestaurantForm';
import ReastauUpdate from './component/Reastaupdate';


function App() {
  //<ResponsiveAppBar/>  
  return (
    
    <div className="App">
     <Router>
      <Header/>
     
        <Routes>
        
            <Route path="/" element={<Index/>} />
            <Route path="/restaurant" element={<RestaurantList/>} />
            <Route path="/addrestaurant" element={<ZoneByVille/>} />
            <Route path="/specialites" element={<Specilaitelist/>} />
            <Route path="/addspecialite" element={<SpecialiteForm/>} />
            <Route path="/villes" element={<Villelist/>}/>
            <Route path="/addville" element={<Villeform/>}/>
            <Route path="/series" element={<SerieList/>}/>
            <Route path="/addserie" element={<SerieForm/>}/>
            <Route path="/zones" element={<ZoneList/>}/>
            <Route path="/addzone" element={<ZoneForm/>}/>
            <Route path="/editresto/:id" element={<ReastauUpdate/>}/>
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
