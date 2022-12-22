import './BussinesProfileHome.css';
import React from 'react';
import axios from 'axios';

import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();

const BussinesProfileHome = () => {

  const navegate = useNavigate();
  const navegateDasboard = useNavigate();
  
  const [user, setUser] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));

  const getToken = async () => {
    setToken(
      localStorage.getItem('token')
    )
  }
  const getUser = async () => {
    console.log("Data User1", token);
    await axios
      .get("http://127.0.0.1:8000/api/userProfile", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data.userData);
      })
  }

  const admin = () => {
    navegate('/admin')
  }
  useEffect(() => {
    getToken()
    getUser()
    
  }, []);

  return (
    <div>
      <>
        <div className="bg-white rounded-lg shadow-xl pb-8">
          <div className="w-full h-[175px]">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
              className="w-40 border-4 border-white rounded-full"
            />
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">{user.name}</p>
            </div>
            <p className="text-gray-700">{user.lastName}</p>
            <p className="text-sm text-gray-500">Score</p>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              <button
                onClick={admin} className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clipRule="evenodd"
                  />
                </svg>
                <span href="http://127.0.0.1:8000/api/logout">Dasboard</span>
              </button>
            </div>
          </div>
        </div>

        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="w-full flex flex-col 2xl:w-1/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold">
                Personal Info
              </h4>
              <ul className="mt-2 text-gray-700">
                <li className="flex border-y py-2">
                  <span className="font-bold w-24">Full name:</span>
                  <span className="text-gray-700">{user.Name}{user.lastName}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Bussines Type:</span>
                  <span className="text-gray-700">{user.idSelectProfile}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Mobile:</span>
                  <span className="text-gray-700">{user.phoneNumber}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Email:</span>
                  <span className="text-gray-700">{user.email}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">DUI:</span>
                  <span className="text-gray-700">{user.DUI}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Location:</span>
                  <span className="text-gray-700">San Salvador, El Salvador</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-full 2xl:w-2/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold">Description</h4>
              <p className="mt-2 text-gray-700">
              Somos una agencia de viajes regional que te ofrece convenios exclusivos para tu beneficio. Agencia de Viajes con certificacion mundial IATA, somos garantía de servicio y confianza. Asesoría profesional. Destinos Internacionales. Tu Agencia Confiable. Atención 24/7.
              </p>
            </div>

            <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
              <h4 className="text-xl text-gray-900 font-bold">Catalog</h4>
              <br></br>
              <div className="p-4 items-center justify-center w-[450px] rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                <img
                  className="mx-auto w-full block w-4/12 h-40 rounded-lg"
                  alt="art cover"
                  loading="lazy"
                  src="https://picsum.photos/seed/2/2000/1000"
                />
                <div className="sm:w-8/12 pl-0 p-5">
                  <div className="space-y-2">
                    <div className="space-y-4">
                      <h4 className="text-md font-semibold text-cyan-900 text-justify">
                        Name Items
                      </h4>
                    </div>
                    <div className="flex items-center space-x-4 justify-between">
                      <div className="flex gap-3 space-y-1">
                        <span className="text-sm">Description</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <canvas
                  id="verticalBarChart"
                  style={{
                    display: "block",
                    boxSizing: "border-box",
                    height: 414,
                    width: 828,
                  }}
                  width={1656}
                  height={828}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex items-center justify-between">
            <h4 className="text-xl text-gray-900 font-bold">Reviews</h4>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 mt-8">
            <a
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection2.jpg"
                className="w-16 rounded-full"
              />
              <p className="text-center font-bold text-sm mt-1">Name</p>
              <p className="text-xs text-gray-500 text-center">Comment</p>
            </a>
            <a
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection6.jpg"
                className="w-16 rounded-full"
              />
              <p className="text-center font-bold text-sm mt-1">Name</p>
              <p className="text-xs text-gray-500 text-center">Comment</p>
            </a>
            <a
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection7.jpg"
                className="w-16 rounded-full"
              />
              <p className="text-center font-bold text-sm mt-1">Name</p>
              <p className="text-xs text-gray-500 text-center">Comment</p>
            </a>
            <a
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection8.jpg"
                className="w-16 rounded-full"
              />
              <p className="text-center font-bold text-sm mt-1">Name</p>
              <p className="text-xs text-gray-500 text-center">Comment</p>
            </a>
            <a
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection9.jpg"
                className="w-16 rounded-full"
              />
              <p className="text-center font-bold text-sm mt-1">Name</p>
              <p className="text-xs text-gray-500 text-center">Comment</p>
            </a>
            <a
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection10.jpg"
                className="w-16 rounded-full"
              />
              <p className="text-center font-bold text-sm mt-1">Name</p>
              <p className="text-xs text-gray-500 text-center">Comment</p>
            </a>
            <a
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection11.jpg"
                className="w-16 rounded-full"
              />
              <p className="text-center font-bold text-sm mt-1">Name</p>
              <p className="text-xs text-gray-500 text-center">Comment</p>
            </a>
            <a
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection12.jpg"
                className="w-16 rounded-full"
              />
              <p className="text-center font-bold text-sm mt-1">Name</p>
              <p className="text-xs text-gray-500 text-center">Comment</p>
            </a>
            <a
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection13.jpg"
                className="w-16 rounded-full"
              />
              <p className="text-center font-bold text-sm mt-1">Name</p>
              <p className="text-xs text-gray-500 text-center">Comment</p>
            </a>
            <a
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection14.jpg"
                className="w-16 rounded-full"
              />
              <p className="text-center font-bold text-sm mt-1">Name</p>
              <p className="text-xs text-gray-500 text-center">Comment</p>
            </a>
            <a
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection15.jpg"
                className="w-16 rounded-full"
              />
              <p className="text-center font-bold text-sm mt-1">Comment</p>
              <p className="text-xs text-gray-500 text-center">Name</p>
            </a>
            <a
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection16.jpg"
                className="w-16 rounded-full"
              />
              <p className="text-center font-bold text-sm mt-1">Name</p>
              <p className="text-xs text-gray-500 text-center">Comment</p>
            </a>
          </div>
        </div>
      </>
    </div>
  );
}

export default BussinesProfileHome;