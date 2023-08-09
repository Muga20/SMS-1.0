import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';
import axios from 'axios'
import DashboardTopNav from '../../components/DashboardTopNav';

function SchoolCalender() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [list, setList] = useState([]);

  const lists = async () => {
    const item = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setList(item.data)
  }
  
  useEffect(() => {
    lists();
  }, [list]);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">
      <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      

      <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <main className="flex flex-col bg-white h-[100vh]">
               <DashboardTopNav toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
               
              <div className="overflow-y-auto">
                  <div className='p-8 bg-white'>
                  <p tabindex="0" class="focus:outline-none text-2xl font-semibold leading-6 text-gray-800">School Calender</p>
                      <div className='p-3 mt-8'>
                          <table class="w-full text-sm text-left text-gray-500">
                              <thead class="text-xs text-gray-900 uppercase dark:text-gray-400 bg-gray-100">
                                  <tr>
                                      <th scope="col" class="px-6 py-3"></th>
                                      <th scope="col" class="px-6 py-3">Opening</th>
                                      <th scope="col" class="px-6 py-3">Closing</th>
                                      <th scope="col" class="px-6 py-3">Duration</th>
                                  </tr>
                              </thead>
                              <tbody className='bg-gray-50'>
                                <tr>
                                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">Term 1</th>
                                      <td class="px-6 py-4 text-black">2023-08-02</td>
                                      <td class="px-6 py-4 text-black">2023-08-02</td>
                                      <td class="px-6 py-4 text-black"> 5 Weeks</td>
                                  </tr>
                                  <tr class="">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">Holiday</th>
                                      <td class="px-6 py-4 text-black">2023-08-02</td>
                                      <td class="px-6 py-4 text-black">2023-08-02</td>
                                      <td class="px-6 py-4 text-black"> 5 Weeks</td>
                                  </tr>
                                  <tr class="">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">Half Term Break</th>
                                      <td class="px-6 py-4 text-black">2023-08-02</td>
                                      <td class="px-6 py-4 text-black">2023-08-02</td>
                                      <td class="px-6 py-4 text-black"> 5 Weeks</td>
                                  </tr>
                                  <tr class="">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">Holiday</th>
                                      <td class="px-6 py-4 text-black">2023-08-02</td>
                                      <td class="px-6 py-4 text-black">2023-08-02</td>
                                      <td class="px-6 py-4 text-black"> 5 Weeks</td>
                                  </tr>
                                  <tr class="">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">Half Term Break</th>
                                      <td class="px-6 py-4 text-black">2023-08-02</td>
                                      <td class="px-6 py-4 text-black">2023-08-02</td>
                                      <td class="px-6 py-4 text-black"> 5 Weeks</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
            </main>
      </div>
      </div>
  </div>
  )
}

export default SchoolCalender