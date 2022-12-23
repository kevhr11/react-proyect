import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import NavbarSelectProfile from './NavbarSelectProfile';


export default function SelectProfile() {

  const navegate = useNavigate();

  const [SelectProfile, setSelectProfiles] = useState([]);

  const [name, setName] = useState([]);

  const postSelectProfile = async (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/selectprofiles/', {
      "name": name,

    }).then(dataSelectProfile => {
      console.log(dataSelectProfile)
      setSelectProfiles(dataSelectProfile.data);

      if (dataSelectProfile.status === 200) {
        navegate('/crudselectprofile')
      }

      if (dataSelectProfile.status === 201) {
        navegate('/crudselectprofile')
      }

      if (dataSelectProfile.status === 202) {
        navegate('/crudselectprofile')
      }

    })

    console.log(
      name
    )
  }

  useEffect(() => {
    postSelectProfile()

  }, []);


  return (

    <>
      <div>
        <NavbarSelectProfile />
      </div>
      <div className="mt-24 hidden sm:block" aria-hidden="true">

      </div>
      <div className="mt-24 sm:mt-0">
        <div className="md:grid md:grid-cols-4 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">

            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method={postSelectProfile}>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Formulario de registro de Select Profile
              </h3>
              <p className="mt-1 mb-4  text-sm text-gray-600">
                Use los campos para ingresar un nuevo registro.
              </p>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name Profile
                      </label>
                      <input
                        style={{ height: 27 }}
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>



                    <div className="col-span-6 sm:col-span-3">
                      <fieldset>
                        <legend className="contents text-base font-medium text-gray-900">
                          Estado
                        </legend>
                        <p className="text-sm text-gray-500">
                          Selecciona el estado.
                        </p>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-center">
                            <input

                              id="push-everything"
                              name="push-notifications"
                              type="radio"
                              value={'Masculino'}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="push-everything"
                              className="ml-3 block text-sm font-medium text-gray-700"
                            >
                              Activo
                            </label>
                          </div>
                          <div className="flex items-center ">
                            <input

                              id="push-email"
                              name="push-notifications"
                              type="radio"
                              value={'Femenino'}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="push-email"
                              className="ml-3 block text-sm font-medium text-gray-700"
                            >
                              Inactivo
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    </div>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      onClick={postSelectProfile}
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

    </>
  )
}
