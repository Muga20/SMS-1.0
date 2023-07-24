import React from 'react'

function ForgotPassword() {
  return (
    <div className="min-h-screen bg-teal-700 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mt-4">
            <label for="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input  
              type="text" 
              placeholder="Email" 
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
          <div className="flex justify-center mt-6">
            <button 
              type="submit" 
             className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
             >
             Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default ForgotPassword