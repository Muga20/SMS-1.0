import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="min-h-screen bg-teal-700 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mt-4">
            <label for="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input 
              type="text" 
              placeholder="Username" 
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
          <div className="mt-4">
            <label for="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input 
              type="password" 
              placeholder="Password" 
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            />                   
          </div>
          <p className="mt-2 text-center text-sm text-gray-600 my-2">
            <Link to="/ForgotPassword" className="font-medium text-blue-600 hover:text-blue-500">Forgot Password</Link>
          </p>
          <div className="flex justify-center mt-6">
            <button 
              type="submit" 
              className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
             >
             Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login