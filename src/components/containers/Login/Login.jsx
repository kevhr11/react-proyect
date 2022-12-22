
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import './Login.css';

export default function Login() {

  const navegate = useNavigate();
  const [profile, setProfile ] = useState([]);
  const [login, setLogin] = useState([]);
  

  

  const [email, setEmail] = useState([]);
  const [password, setPassword ] = useState([]);

  const getLogin = async (e)=> {
    e.preventDefault()
    
    console.log('Hola')
      axios.post('http://127.0.0.1:8000/api/login', {
        "email": email,
        "password": password,
       
        
       
    }).then( response => {
      if(response.status === 200){
        localStorage.setItem('token', response.data.token);

        console.log(response.data)
      } else{

        console.log(response)
      } 
      console.log(response)
      setLogin(response.data)
    
    })
  }
    
  const postLogin = async (e) =>{
      e.preventDefault();
      
      axios.post('http://127.0.0.1:8000/api/userProfile')
    }

  return (
  
    <div className="items-center justify-center mt-22 pt-36">
      <div className="flex justify-center ">
        <img
          className="item-center"
          style={{width: '350px' }}
          src="https://github.com/kevhr11/project-laravel/raw/main/resources/img/logo.png"
          alt="Your Company"
        />
      </div>
      <div>
      <h1 className='text-4xl text-center mt-6'>Welcome back</h1>
      </div>
      <div>
          <div className="flex min-h-full items-center justify-center py-4 px-4 sm:px-2 lg:px-8 ">
              <div className="w-full max-w-md space-y-8">
                <form className="mt-2 space-y-5 " >
                      <input type="hidden" name="remember" defaultValue="true" />
                      <div className="-space-y-px rounded-md shadow-sm">
                          <div>
                              <h2 className="mb-4 flex text-center text-2x  ">
                                Sign in to your account
                              </h2>
                                <label htmlFor="" className="sr-only">
                                          Ingresa su email
                                </label>
                                <input
                                 onChange={(e)=>setEmail(e.target.value)}
                                    id="name"
                                    name="nombre"
                                    type="email"
                                    autoComplete="name"
                                    required=""
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Ingresa tu nombre"
                                />
                      </div>
                          <div>
                            <label htmlFor="password" className="sr-only text-lg font-medium">
                                Password
                            </label>
                              <input
                              onChange={(e)=>setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required=""
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Password"
                            />
                      </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="remember-me"
                            className="ml-2 block text-sm text-gray-900"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div>
                        <button
                        onClick={getLogin}
                          type="submit"
                          className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            {/* Heroicon name: mini/lock-closed */}
                            <svg
                              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          Sign in
                        </button>
                        <button
                         
                          type="submit"
                          href=""
                          className="group mt-4 relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            {/* Heroicon name: mini/lock-closed */}
                            <svg
                              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          Sign up
                        </button>
                      </div>
                  </form>
                </div>
            </div>
        </div>      
      </div>
    )
}
