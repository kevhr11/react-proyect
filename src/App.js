
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
import CrudMunicipalities from './components/containers/CrudMunicipalities/CrudMunicipalities';
import InsertMunicipalities from './components/containers/CrudMunicipalities/InsertMunicipalities';
import Key from './components/containers/KeyView/Key';
import KeyGenery from './components/containers/KeyView/KeyGenery';
import CrudCategory from './components/containers/CrudCategory/CrudCategory';
import InsertCategory from './components/containers/CrudCategory/InsertCategory';
import CrudBussinesType from './components/containers/CrudBussinesType/CrudBussinesType';
import InsertBussinesType from './components/containers/CrudBussinesType/InsertBussinesType';
import CrudSelectProfile from './components/containers/CrudSelectProfile/CrudSelectProfile';
import InsertSelectProfile from './components/containers/CrudSelectProfile/InsertSelectProfile';
import CrudTouristPlaceType from './components/containers/CrudTouristPlaceType/CrudTouristPlaceType';
import InsertTouristPlaceType from './components/containers/CrudTouristPlaceType/InsertTouristPlaceType';
import CrudServices from './components/containers/CrudServices/CrudServices';
import InsertServices from './components/containers/CrudServices/InsertServices';


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
        <Route path="/crudmunicipalities" element={<CrudMunicipalities />}> </Route>
        <Route path="/insertmunicipalities" element={<InsertMunicipalities />}> </Route>
        <Route path="/crudcategory" element={<CrudCategory />}> </Route>
        <Route path="/insertcategory" element={<InsertCategory/>}> </Route>
        <Route path="/crudbussinestype" element={<CrudBussinesType/>}> </Route>
        <Route path="/insertbussinestype" element={<InsertBussinesType/>}> </Route>
        <Route path="/crudselectprofile" element={<CrudSelectProfile/>}> </Route>
        <Route path="/insertselectprofile" element={<InsertSelectProfile/>}> </Route>
        <Route path="/crudtouristplacetype" element={<CrudTouristPlaceType/>}> </Route>
        <Route path="/inserttouristplacetype" element={<InsertTouristPlaceType/>}> </Route>
        <Route path="/crudservices" element={<CrudServices/>}> </Route>
        <Route path="/insertservices" element={<InsertServices/>}> </Route>
        <Route path="/admin" element={<Admin />}> </Route>
        <Route path="/loger" element={<Key />}> </Route>
        <Route path="/logerup" element={<KeyGenery />}> </Route>
      </Routes>
    </BrowserRouter>
    );

}

export default App;
