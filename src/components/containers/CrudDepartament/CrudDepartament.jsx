import './CrudDepartamente.css';
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';


export default function CrudDepartament() {
  const [departament, setDepartaments ] = useState([]);
  const getData = async () => {
    axios.get('http://127.0.0.1:8000/api/departaments').then(data => {
      setDepartaments(data.data);
    })
   } 

   
   useEffect(() => {
    getData()
   
}, []);
console.log(departament)
  return (
    <div>
    <Navbar/>
    
      <>
  {/* component */}

  <div className="mt-24">
    <div className="">
      <div className="py-2 inline-block min-w-full sm:px-2 lg:px-12">
        <div className="overflow-hidden min-w-full">
          <table className="min-w-full">
            <thead className="bg-gray-200 border-b  ">
              <tr>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-3 py- text-left"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Opciones
                </th>
              </tr>
            </thead>
              {departament.map(item=>{
                    return (
            <tbody key={item.id} value={item.id} className="min-w-full">
              <tr className="bg-white min-w-full border-b transition duration-300 ease-in-out hover:bg-gray-100">
                
                <td className="text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {item.id}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {item.name}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 <th><div class="flex space-x-2 justify-center">
                    <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Editar</button>
                    <button type="button" class="inline-block px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Eliminar</button>
                      </div>
                </th>
                </td>
              </tr>
            </tbody>          
                    )
                   })}
          </table>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}
