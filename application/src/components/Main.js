import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { SERVER_URL } from "./constant/severUrl";
import axios from 'axios'

function Main({ sidebarOpen, toggleSidebar }) {
  const [list, setList] = useState([]);

 
  const lists = async () => {
    const item = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setList(item.data)
}

useEffect(() => {
    lists();
}, [list]);

  return (   
    <main className="flex flex-col bg-gray-200 h-[100vh]">
    <div className="md:hidden max-w-7xl mx-auto bg-black py-3 z-50 w-full">
      <div className="flex items-center">
        <div className="md:hidden">
          <button className="text-white" onClick={toggleSidebar}>
            {sidebarOpen ? <AiOutlineMenu size={35} /> : <AiOutlineMenu size={35} />}
          </button>
        </div>
      </div>
    </div>
    <div className="overflow-y-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="px-6 py-3">
                      Product name
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Color
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Category
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Price
                  </th>
              </tr>
          </thead>
          <tbody>
            {list.map((item , id) => (
              <tr key={id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     {item.id}
                  </th>
                  <td class="px-6 py-4">
                  {item.title}
                  </td>
                  <td class="px-6 py-4">
                  {item.body}
                  </td>
                  <td class="px-6 py-4">
                  {item.userId}
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  </main>
  )
}

export default Main



