
import BussinesProfile from './components/containers/bussinesProfile/BussinesProfile';
import BussinesProfileHome from './components/containers/BussinesProfileHome/BussinesProfileHome';
import TouristProfile from './components/containers/touristProfile/TouristProfile';
import Login from './components/containers/Login/Login';
import Users from './components/containers/Users/Users';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './components/containers/Admin/Admin';
import './Main.css';
<<<<<<< HEAD
import Destinations from './components/containers/destinations/Destinations';
import Navbar from './components/containers/navbar/Navbar';

=======
import CrudDepartament from './components/containers/CrudDepartament/CrudDepartament';
import InsertDepartament from './components/containers/CrudDepartament/InsertDepartament';
>>>>>>> 38041c35096dc272948d907d460ce4522663a0d4

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Users />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/bussinesprofilehome" element={<BussinesProfileHome />}> </Route>
        <Route path="/bussinesprofile" element={<BussinesProfile />}> </Route>
        <Route path="/touristprofile" element={<TouristProfile />}> </Route>
<<<<<<< HEAD
        <Route path="/destinations" element={<Destinations />}> </Route>
        <Route path="/navbar" element={<Navbar />}> </Route>
        <Route path="/destinations" element={<Destinations />}> </Route>
        <Route path="/destinations" element={<Destinations />}> </Route>
        
=======
        <Route path="/cruddepartament" element={<CrudDepartament />}> </Route>
        <Route path="/insertdepartament" element={<InsertDepartament />}> </Route>
        <Route path="/admin" element={<Admin />}> </Route>
>>>>>>> 38041c35096dc272948d907d460ce4522663a0d4
      </Routes>
    </BrowserRouter>
    );

}

export default App;
