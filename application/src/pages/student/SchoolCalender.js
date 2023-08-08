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
                  <p className='text-center pt-5 text-lg font-bold text-black'>Term One Calender</p>
                  <div className='p-5 m-3 bg-gray-100'>
                      <table className="border w-8/12 mx-auto text-center text-sm font-light border-gray-500">
                      <thead className="border-b font-medium  border-gray-500">
                          <tr>
                            <th className="border-r px-6 py-4 border-gray-500"></th>
                            <th className="border-r px-6 py-4 border-gray-500">Opening</th>
                            <th className="border-r px-6 py-4 border-gray-500">Closing</th>
                            <th className="px-6 py-4 border-gray-500">Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-500">
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">Term 1</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-01</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-01</td>
                            <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">9 weeks</td>
                          </tr>
                          <tr className="border-b border-gray-500">
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">Holiday</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-02</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-02</td>
                            <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">6 weeks</td>
                          </tr>
                          <tr className="border-b border-gray-500">
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">Half Term Break</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-03</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-03</td>
                            <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">5 weeks</td>
                          </tr>
                          <tr className="border-b border-gray-500">
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">Holiday</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-04</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-04</td>
                            <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">3 weeks</td>
                          </tr>
                        </tbody>
                      </table>
                  </div>

                  <p className='text-center pt-5 text-lg font-bold text-black'>Term Two Calender</p>
                  <div className='p-5 m-3 bg-gray-100'>
                      <table className="border w-8/12 mx-auto text-center text-sm font-light border-gray-500">
                      <thead className="border-b font-medium  border-gray-500">
                          <tr>
                            <th className="border-r px-6 py-4 border-gray-500"></th>
                            <th className="border-r px-6 py-4 border-gray-500">Opening</th>
                            <th className="border-r px-6 py-4 border-gray-500">Closing</th>
                            <th className="px-6 py-4 border-gray-500">Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-500">
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">Term 1</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-01</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-01</td>
                            <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">9 weeks</td>
                          </tr>
                          <tr className="border-b border-gray-500">
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">Holiday</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-02</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-02</td>
                            <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">6 weeks</td>
                          </tr>
                          <tr className="border-b border-gray-500">
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">Half Term Break</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-03</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-03</td>
                            <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">5 weeks</td>
                          </tr>
                          <tr className="border-b border-gray-500">
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">Holiday</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-04</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-04</td>
                            <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">3 weeks</td>
                          </tr>
                        </tbody>
                      </table>
                  </div>

                  <p className='text-center pt-5 text-lg font-bold text-black'>Term Three Calender</p>
                  <div className='p-5 m-3 bg-gray-100'>
                      <table className="border w-8/12 mx-auto text-center text-sm font-light border-gray-500">
                      <thead className="border-b font-medium  border-gray-500">
                          <tr>
                            <th className="border-r px-6 py-4 border-gray-500"></th>
                            <th className="border-r px-6 py-4 border-gray-500">Opening</th>
                            <th className="border-r px-6 py-4 border-gray-500">Closing</th>
                            <th className="px-6 py-4 border-gray-500">Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-500">
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">Term 1</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-01</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-01</td>
                            <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">9 weeks</td>
                          </tr>
                          <tr className="border-b border-gray-500">
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">Holiday</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-02</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-02</td>
                            <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">6 weeks</td>
                          </tr>
                          <tr className="border-b border-gray-500">
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">Half Term Break</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-03</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-03</td>
                            <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">5 weeks</td>
                          </tr>
                          <tr className="border-b border-gray-500">
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">Holiday</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-04</td>
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">2023-08-04</td>
                            <td className="whitespace-nowrap  px-6 py-2 font-medium border-gray-500">3 weeks</td>
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

export default SchoolCalender