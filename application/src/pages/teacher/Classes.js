import React, { useEffect, useState } from 'react'
import axios from 'axios'




function Classes() {
    const [list, setList] = useState([]);

 
    const lists = async () => {
      const item = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setList(item.data)
  }
  
  
  useEffect(() => {
      lists();
  }, [list]);
  
  return (
    
<div class="relative overflow-x-auto">
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

  )
}

export default Classes