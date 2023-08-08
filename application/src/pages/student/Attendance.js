import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';
import { AiOutlineMenu } from 'react-icons/ai';
import DashboardTopNav from '../../components/DashboardTopNav';
import axios from 'axios'

function Attendance() {
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
               <div className="bg-gray-100 py-3">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-1/2">
                      <label className="block font-medium">Filter by Date:</label>
                      <input type="date" className="block w-full border rounded-md px-2 py-1" />
                    </div>
                    <div className="w-1/2">
                      <label className="block font-medium">Filter by Status:</label>
                      <select className="block w-full border rounded-md px-2 py-1">
                        <option value="">All</option>
                        <option value="P">Present</option>
                        <option value="A">Absent</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <p className='text-center pt-5 text-lg font-bold text-black'></p>
              <div className='p-5 m-3 bg-gray-100'>
                  <table className="border w-full mx-auto text-center text-sm font-light border-gray-500">
                        <thead className="border-b font-medium border-gray-500">
                          <tr>
                            <th scope="col" className="border-r px-6 py-4 border-gray-500">Total Present</th>
                            <th scope="col" className="border-r px-6 py-4 border-gray-500">Total Absent</th>
                            <th scope="col" className="px-6 py-4 border-gray-500">Attendance %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-500">
                            <td className="whitespace-nowrap border-r px-6 py-2 font-medium border-gray-500">12</td>
                            <td className="whitespace-nowrap border-r px-6 py-2 font-medium border-gray-500">5</td>
                            <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">70%</td>
                          </tr>
                        </tbody>
                  </table>
              </div>

              <p className='text-center pt-5 text-lg font-bold text-black'>Weekly Attendance</p>
              <div className='p-5 m-3 bg-gray-100'>
                  <table className="border w-8/12 mx-auto text-center text-sm font-light border-gray-500">
                  <thead className="border-b font-medium  border-gray-500">
                      <tr>
                        <th scope="col" className="border-r px-6 py-4 border-gray-500">Date</th>
                        <th scope="col" className="px-6 py-4 border-gray-500">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-500">
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-01</td>
                        <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">P</td>
                      </tr>
                      <tr className="border-b border-gray-500">
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-02</td>
                        <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">P</td>
                      </tr>
                      <tr className="border-b border-gray-500">
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-03</td>
                        <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">P</td>
                      </tr>
                      <tr className="border-b border-gray-500">
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-04</td>
                        <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">P</td>
                      </tr>
                      <tr className="border-b border-gray-500">
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-05</td>
                        <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">P</td>
                      </tr>
                    </tbody>
                  </table>
              </div>
              </div>
          </main>
      </div>
      </div>
    </div>
  );
}

export default Attendance;
