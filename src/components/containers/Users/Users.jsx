

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import './Users.css';
import { useNavigate } from 'react-router-dom';


export default function Users() {
  
   const navegate = useNavigate();

   const [departament, setDepartaments ] = useState([]);

   const [profile, setProfile] = useState([]);
   const [users, setUsers] = useState([]);
   
   const getData = async () => {
    axios.get('http://127.0.0.1:8000/api/departaments').then(data => {
      setDepartaments(data.data);
    })
   } 
    
   const getProfile = async () => {
    axios.get('http://127.0.0.1:8000/api/selectprofiles').then(dataProfile => {
      setProfile(dataProfile.data);
    
    })
   } 
   const [name, setName] = useState("");
   const [lastName, setLastName] = useState("");
   const [DUI, setDUI] = useState("");
   const [PhoneNumber, setPhoneNumber] = useState(1);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [imgProfile, setImgProfile] = useState("");
   const [gender, setGender] = useState("");
   const [dateOfBirth, setDateOfBirth] = useState("");
   const [idToken, setIdToken] = useState(1);
   const [idSelectProfile, setIdSelectProfile] = useState("");
 
   const postUsers = async (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/register',{
    "name": name,
    "lastName": lastName,
    "DUI":DUI ,
    "phoneNumber":PhoneNumber,
    "email": email,
    "password": password,
    "imgProfile": imgProfile ,
    "gender": gender,
    "dateOfBirth":dateOfBirth,
    "idToken": idToken,
    "idSelectProfile": idSelectProfile

    }).then(dataUsers => {
      console.log(dataUsers)
      setUsers(dataUsers.data);
      if (dataUsers.status === 200){
        navegate('/bussinesprofilehome')
      }
       
      if (dataUsers.status === 201){
        navegate('/login')
      }
      
      if (dataUsers.status === 202){
        navegate('/login')
      }
      
    }) 

    console.log(
      name,
      lastName,
      DUI,
      PhoneNumber,
      email,
      password,
      imgProfile,
      gender,
      dateOfBirth,
      idToken,
      idSelectProfile)
   } 
 
      useEffect(() => {
        getData()
        getProfile()
        postUsers()
    }, []);

    
  return (

    <>
<div>
  </div>
    <div className="hidden sm:block" aria-hidden="true">
       <div className="py-5">
          <div className="border-t border-gray-200" />
      </div>
  </div>
  <div className="mt-10 sm:mt-0">
    <div className="md:grid md:grid-cols-4 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
        
        </div>
      </div>
      <div className="mt-5 md:col-span-2 md:mt-0">
        <form action="#" method={postUsers}>
        <h3 className="text-lg font-medium leading-6 text-gray-900">
            Personal Information
          </h3>
          <p className="mt-1 mb-4  text-sm text-gray-600">
            Use a permanent address where you can receive mail.
          </p>
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    style={{height:27}}
                    type="text"
                    onChange={(e)=>setName(e.target.value)}
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>              
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    onChange={(e)=>setLastName(e.target.value)}
                    style={{height:27}}
                    type="text"
                    id="last-name"
                    autoComplete="family-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    DUI
                  </label>
                  <input
                    onChange={(e)=>setDUI(e.target.value)}
                    style={{height:27}}
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                    style={{height:27}}
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6  sm:col-span-3">
                <label
                    htmlFor="email-address"
                    className="block mt-1 text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    onChange={(e)=>setEmail(e.target.value)}
                    style={{height:27}}
                    type="text"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                
               
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e)=>setPassword(e.target.value)}
                    style={{height:27}}
                    type="password"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                
                <div className="col-span-6 sm:col-span-4">
                <div>
                <label className="block text-sm font-medium mt-1 text-gray-700">
                  Image profile
                </label>
                <input
                    onChange={(e)=>setImgProfile(e.target.value)}
                    style={{height:27}}
                    type="text"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
             
              </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                <fieldset>
                <legend className="contents text-base font-medium text-gray-900">
                  Genders
                </legend>
                <p className="text-sm text-gray-500">
                  Ingresa tu genero.
                </p>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      onChange={(e)=>setGender(e.target.value)}
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
                      Male
                    </label>
                  </div>
                  <div className="flex items-center ">
                    <input
                      onChange={(e)=>setGender(e.target.value)}
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
                     Feme
                    </label>
                  </div>
                  </div>
                  </fieldset>
                </div>
                <div className="col-span-3 mt-4 pr-12">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium text-gray-700 -4"
                  >
                  Date of birthday
                  </label>
                  <input
                    onChange={(e)=>setDateOfBirth(e.target.value)}
                    style={{height:27}}
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    autoComplete="dateOfBirth"
                    className="mt-1  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                    htmlFor="country"
                    className="block mt-6 text-sm font-medium text-gray-700"
                  >
                    Select Profile
                  </label>
                  <select
                    onChange={(e)=>setIdSelectProfile(e.target.value)}
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                  <option selected >Seleccione una opción</option>
                    {profile.map(item=>{
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    )
                   })}
                    
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                </div>
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3">   
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
              onClick={postUsers}
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
