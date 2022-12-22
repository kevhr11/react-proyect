import Axios from 'axios'
import React, {useState, useEffect } from 'react'

import Users from '../Users/Users'
import Login from '../Login/Login'

import { setToken, deleteToken } from 'react'

export default function Key() {

    const [usuario, setUsuario] = useState(null);
    const [cargandoUsuario, setCargandoUsuario] = useState(true);
    
    async function login(email, password) {
        const {data } = await Axios.post('127.0.0.1:8000/api/login', {
            email, password
        });
        setUsuario(data.usuario);
        setToken(data.token);
    }
    
    async function signup(email, password) {
        const {data } = await Axios.post('127.0.0.1:8000/api/register', {
            usuario
        });
        setUsuario(data.usuario);
        setToken(data.token);
    }

    async function signup(usuario){
        const { data } = await Axios.post('127.0.0.1:8000/api/login', usuario);
        setUsuario(data.usuario);
        deleteToken(data.usuario);
    }
    function logout(){
        setUsuario(null);
        setToken();
    }
    
    return (
        <div className='ContendorTemporal'>
            <Users login={login}/>
            <div>{JSON.stringify(usuario)}</div>
        </div>
    );
}
