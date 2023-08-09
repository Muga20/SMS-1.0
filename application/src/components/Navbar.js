import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const [open, setOpen] = useState(false);
    
  return (
    <section className="shadow-sm font-poppins fixed  bg-gray-100   z-50 w-full">
      <div className="max-w-6xl px-4 mx-auto">
        <nav className="flex items-center justify-between py-4">
          <Link to='/' className="text-xl font-semibold leading-none dark:text-gray-400">Logo</Link>

        

            <ul class="hidden lg:w-auto lg:space-x-12 lg:items-center lg:flex ">
                <li><Link to='/' class="text-md text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-300">Home</Link></li>
                <li><Link to='/about' class="text-md text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-300">About us</Link></li>
                <li><Link to='/features' class="text-md text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-300">Features</Link></li>
            </ul>

            
            <div class="hidden lg:w-auto lg:space-x-12 lg:items-center lg:flex ">
                <Link to='/Auth' class="text-md text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-300">login</Link>
            </div>

            <div className="flex lg:hidden">
              <button className="flex items-center px-3 py-2 text-blue-600 border border-blue-200 rounded dark:text-gray-400 hover:text-blue-800 hover:border-blue-300 lg:hidden"
                onClick={() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
              </button>
            </div>
        </nav>


        <div className={`fixed inset-0 w-full bg-gray-800 opacity-25 dark:bg-gray-400 lg:hidden ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0' }`} />
        <div className={`absolute inset-0 z-10 h-screen p-3 text-gray-700 duration-500 transform shadow-md dark:bg-gray-800 bg-white w-80 lg:hidden lg:transform-none lg:relative ${ open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'}`} >
          <button onClick={() => setOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
          </button>

          <ul class="px-5 text-left mt-7">
              <li class="pb-3"><a to='/' class="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-100">Home</a> </li>
              <li class="pb-3"><a to='' class="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400">About us</a></li>
              <li class="pb-3"><a to='' class="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400">Features</a></li>
          </ul>
        </div>
      </div>
  </section>
  )
}

export default Navbar