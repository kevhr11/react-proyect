import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Login from '../Login/Login';

export default function Navbar() {
    
    const navegate = useNavigate();
    const ruta = () => {
        navegate('/insertbussinestype')
    }
    const rutaInicio = () => {
        navegate('/admin')
    }

  return (
    
   
    <div>
   
      <nav className="bg-white px-2 sm:px-4 py-2.5 white:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 white:border-gray-600 mb-8">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <a href="http://localhost:3000/login" className="flex items-center">
      <img
        src="https://github.com/kevhr11/project-laravel/raw/main/resources/img/logo.png"
        className="h-6 mr-3 sm:h-9"
      />
    </a>
    <div className="flex md:order-2">
      <button
      
      onClick={ruta}
        type="button"
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
      
       
        New Bussines Type
      </button>
      <button
      
      onClick={rutaInicio}
        type="button"
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Home
      </button>
   
    </div>
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
     
    </div>
  </div>
</nav>

    </div>
  )
}
