import React from 'react'


function ChooseSchool() {
  return (
    <div class="min-h-screen bg-teal-700 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
           <p class="mb-5 text-center text-xl text-gray-600 font-medium">Select your School</p>
  
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-teal-400 dark:text-white dark:focus:ring-t-500">
            <option>school Name</option>
            <option className='select-option'>Canada</option>
            <option>France</option>
            <option>Germany</option>
            </select>
           <div class="flex justify-center mt-6">
            <button 
              type="submit" 
             class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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

export default ChooseSchool