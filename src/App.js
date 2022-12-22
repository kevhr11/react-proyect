import { useState } from 'react';
import BussinesProfile from './components/containers/bussinesProfile/BussinesProfile';
import TouristProfile from './components/containers/touristProfile/TouristProfile';
import Login from './components/containers/Login/Login';
import Users from './components/containers/Users/Users';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './Main.css';
import Destinations from './components/containers/destinations/Destinations';
import Navbar from './components/containers/navbar/Navbar';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Users />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/bussinesprofile" element={<BussinesProfile />}> </Route>
        <Route path="/touristprofile" element={<TouristProfile />}> </Route>
        <Route path="/destinations" element={<Destinations />}> </Route>
        <Route path="/navbar" element={<Navbar />}> </Route>
        <Route path="/destinations" element={<Destinations />}> </Route>
        <Route path="/destinations" element={<Destinations />}> </Route>
        
      </Routes>
    </BrowserRouter>
     
     );

}

export default App;
