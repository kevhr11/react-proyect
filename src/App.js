
import BussinesProfile from './components/containers/bussinesProfile/BussinesProfile';
import BussinesProfileHome from './components/containers/BussinesProfileHome/BussinesProfileHome';
import TouristProfile from './components/containers/touristProfile/TouristProfile';
import Login from './components/containers/Login/Login';
import Users from './components/containers/Users/Users';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './components/containers/Admin/Admin';
import './Main.css';
import CrudDepartament from './components/containers/CrudDepartament/CrudDepartament';
import InsertDepartament from './components/containers/CrudDepartament/InsertDepartament';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Users />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/bussinesprofilehome" element={<BussinesProfileHome />}> </Route>
        <Route path="/bussinesprofile" element={<BussinesProfile />}> </Route>
        <Route path="/touristprofile" element={<TouristProfile />}> </Route>
        <Route path="/cruddepartament" element={<CrudDepartament />}> </Route>
        <Route path="/insertdepartament" element={<InsertDepartament />}> </Route>
        <Route path="/admin" element={<Admin />}> </Route>
      </Routes>
    </BrowserRouter>
    );

}

export default App;
