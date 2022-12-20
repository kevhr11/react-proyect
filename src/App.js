import { useState } from 'react';
import BussinesProfile from './components/containers/bussinesProfile/BussinesProfile';
import Login from './components/containers/Login/Login';
import Users from './components/containers/Users/Users';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './Main.css';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Users />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
      </Routes>
    </BrowserRouter>
     
     );

}

export default App;
