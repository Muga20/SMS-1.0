import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';
import { AiOutlineMenu } from 'react-icons/ai';
import axios from 'axios'
import DashboardTopNav from '../../components/DashboardTopNav';


function Subjects() {
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
             
             <p className='text-center pt-5 text-lg font-bold text-black'>Subjects</p>
            <div className="overflow-y-auto">
            <div className='p-5 m-3 bg-gray-100'>
                  <table className="border w-8/12 mx-auto text-center text-sm font-light border-gray-500">
                  <thead className="border-b font-medium  border-gray-500">
                      <tr>
                        <th scope="col" className="border-r px-6 py-4 font-medium border-gray-500"> Subject </th>
                        <th scope="col" className="px-6 py-4 font-medium border-gray-500">Teacher</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-500">
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500"> Math  </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium border-gray-500"> Ms. Johnson</td>
                      </tr>
                      <tr className="border-b border-gray-500">
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">Science </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium border-gray-500">Mr. Smith </td>
                      </tr>
                      <tr className="border-b border-gray-500">
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">English </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium border-gray-500">Mr. Williams</td>
                      </tr>
                      <tr className="border-b border-gray-500">
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">History </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium border-gray-500">Mr. Brown</td>
                      </tr>
                      <tr className="border-b border-gray-500">
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">Music</td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium border-gray-500">Mr. Brown</td>
                      </tr>
                      <tr className="border-b border-gray-500">
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">PE</td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium border-gray-500">Mrs. Lee </td>
                      </tr>
                    </tbody>
                  </table>
              </div>
            </div>
          </main>
    </div>
  </div>
</div>
)
}

export default Subjects