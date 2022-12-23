import React from 'react'

export default function Admin() {
  return (
    <div>
   <>
  <header>
    {/* navbar and menu */}
    <nav className="shadow">
      <div className="flex justify-between items-center py-6 px-10 container mx-auto">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer">
          <img
        src="https://github.com/kevhr11/project-laravel/raw/main/resources/img/logo.png"
        className="h-6 mr-3 sm:h-9"
        alt="Flowbite Logo"
      />
          </h1>
        </div>
        <div>
          <div className="hover:cursor-pointer sm:hidden">
            <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600" />
            <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600" />
            <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600" />
          </div>
          <div className="flex items-center">
            <ul className="sm:flex space-x-4 hidden items-center">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-600 text-md "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:3000/login"
                  className="text-gray-700 hover:text-indigo-600 text-md "
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
              <h1 className="text-text-gray-400  py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-blue-400 to-indigo-600 hover:shadow-lg">
                CHECKOUT
              </h1>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main>
    {/* section hero */}
    <section>
      <div className="bg-gray-100 sm:grid grid-cols-5 grid-rows-2 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4">
        <div className="h-96 col-span-4 bg-gradient-to-tr from-indigo-800 to-indigo-500 rounded-md flex items-center">
          <div className="ml-20 w-80">
            <h2 className="text-white text-4xl">Abisai, Bienvendio a Indigo config</h2>
            <p className="text-indigo-100 mt-4  font-thin tracking-wider leading-7">
              Usa este servicio para optimizar o modificar campos de tu sistema.
            </p>
            <a
              href="#"
              className="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100"
            >
              get start
            </a>
          </div>
        </div>
        <div className="h-96 col-span-1 ">

          <div className="bg-white  rounded-md">
            <h1 className="text-center text-xl my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-600">
              <b>Servicios</b>
            </h1>
            <div className="bg-white rounded-md list-none  text-center ">
              <li className="py-3 border-b-2">
                <a href="http://localhost:3000/cruddepartament" className="list-none  hover:text-indigo-600">
                  Departamentos
                </a>
              </li>
              <li className="py-3 border-b-2">
                <a href="http://127.0.0.1:3000/crudmunicipalities" className="list-none  hover:text-indigo-600">
                  Municipios
                </a>
              </li>
              <li className="py-3 border-b-2">
                <a href="http://127.0.0.1:3000/crudselectprofile" className="list-none  hover:text-indigo-600">
                  Select Profile
                </a>
              </li>
              <li className="py-3 border-b-2">
                <a href="http://127.0.0.1:3000/crudtouristplacetype" className="list-none  hover:text-indigo-600">
                  Tourist Place Type
                </a>
              </li>
              <li className="py-3 border-b-2">
                <a href="http://127.0.0.1:3000/crudservices" className="list-none  hover:text-indigo-600">
                  Services
                </a>
              </li>
              <li className="py-3 border-b-2">
                <a
                  href="http://127.0.0.1:3000/crudbussinestype"
                  className="list-none hover:text-indigo-600"
                >
                  Bussines Type
                </a>
              </li>

              <li className="py-3 border-b-2">
                <a
                  href="http://127.0.0.1:3000/crudcategory"
                  className="list-none hover:text-indigo-600"
                >
                  Category
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</>
</div>
  )
}
