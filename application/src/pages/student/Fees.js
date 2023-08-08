import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';
import DashboardTopNav from '../../components/DashboardTopNav';
import axios from 'axios'

function Fees() {
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

              <p className='text-center pt-5 text-xl font-bold text-black'>Payment Structure</p>
              <div className='p-5 m-3 bg-gray-100'>
                  <table className="border w-full mx-auto text-center text-sm font-light border-gray-500">
                        <thead className="border-b font-medium border-gray-500">
                          <tr>
                            <th scope="col" className="px-6 py-4 border-gray-500">Term One</th>
                            <th scope="col" className="px-6 py-4 border-gray-500">Term Two</th>
                            <th scope="col" className="px-6 py-4 border-gray-500">Term Three</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-500">
                            <td className="whitespace-nowrap border-r px-6 py-2 font-medium border-gray-500">Ksh 12000</td>
                            <td className="whitespace-nowrap border-r px-6 py-2 font-medium border-gray-500">Ksh 57000</td>
                            <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">Ksh 1000</td>
                          </tr>
                        </tbody>
                  </table>
              </div>

                    <p className='text-center pt-5 text-xl font-bold text-black'>Payment Balance</p>
                  <div className='p-5 m-3 bg-gray-100'>
                      <table className="border w-8/12 mx-auto text-center text-sm font-light border-gray-500">
                      <thead className="border-b font-medium  border-gray-500">
                          <tr>
                            <th scope="col" className="px-6 py-4 border-gray-500">Term</th>
                            <th scope="col" className="px-6 py-4 border-gray-500">Amount</th>
                            <th scope="col" className="px-6 py-4 border-gray-500">Paid Amount</th>
                            <th scope="col" className="px-6 py-4 border-gray-500">Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-500">
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">Term One</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">Ksh 12000</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">Ksh 120</td>
                            <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">Ksh 200</td>
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

export default Fees