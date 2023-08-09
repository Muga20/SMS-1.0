import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';
import { AiOutlineMenu } from 'react-icons/ai';
import DashboardTopNav from '../../components/DashboardTopNav';
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

function Attendance() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [list, setList] = useState([]);

 
  const state = {
    labels: [ 'Monday', 'Tuesday', 'Wednesday','Thursday',  'Friday','Saturday', 'Sunday',],
    datasets: [
      {
        label: 'Class Strength',
        backgroundColor: ['Indigo','Purple','Yellow','Teal','Red', 'Navy','Brown',],
        fill: false,
        lineTension: 0.5,
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [10, 14, 17, 16, 19, 16, 17],
      },
    ],
  }

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

                    <div className='p-5'>
                      <p className='text-center pb-3 text-lg font-bold text-black'>Weekly Attendance</p>
                        <table class="w-8/12 mx-auto">
                          <thead>
                            <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                              <th class="px-4 py-3">Date</th>
                              <th class="px-4 py-3">Status</th>
                            </tr>
                          </thead>
                          <tbody class="bg-white">
                            <tr class="text-gray-700">
                              <td class="px-4 py-3 text-ms font-semibold border">6/4/2000</td>
                              <td class="px-4 py-3 text-xs text-center border">
                                <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">Present</span>
                              </td>
                            </tr>
                            <tr class="text-gray-700">
                              <td class="px-4 py-3 text-md font-semibold border">6/10/2020</td>
                              <td class="px-4 py-3 text-center text-xs border">
                                <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">Absent</span>
                              </td>
                            </tr>
                            <tr class="text-gray-700">
                              <td class="px-4 py-3 text-md font-semibold border">6/10/2020</td>
                              <td class="px-4 py-3 text-center text-xs border">
                                <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">Absent</span>
                              </td>
                            </tr>
                            <tr class="text-gray-700">
                              <td class="px-4 py-3 border text-md font-semibold">6/10/2020</td>
                              <td class="px-4 py-3 border text-center text-xs">
                                <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">Present</span>
                              </td>
                            </tr>
                            <tr class="text-gray-700">
                              <td class="px-4 py-3 border text-md font-semibold">6/10/2020</td>
                              <td class="px-4 py-3 border text-center text-xs">
                                <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">present</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                    </div>

                      <p className='pt-5 px-3 text-lg font-bold text-black'>Attendance Termly Report</p>
                      <div className='p-5 m-3 bg-gray-100 rounded-md'>
                          <table className="w-full mx-auto text-sm font-light">
                            <thead>
                                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-white uppercase border-b border-gray-600">
                                  <th class="px-2.5 lg:px-4 py-3 border">Term</th>
                                  <th class="px-2.5 lg:px-4 py-3 border">Total Present</th>
                                  <th class="px-2.5 lg:px-4 py-3 border">Total Absent</th>
                                  <th class="px-2.5 lg:px-4 py-3 border">Attendance %</th>
                                </tr>
                              </thead>
                              <tbody class="bg-white">
                                <tr class="text-gray-700">
                                  <td class="px-2.5 lg:px-4 py-3 text-ms font-semibold border">Term One</td>
                                  <td class="px-2.5 lg:px-4 py-3 text-ms font-semibold border">1</td>
                                  <td class="px-2.5 lg:px-4 py-3 text-ms font-semibold border">20</td>
                                  <td class="px-2.5 lg:px-4 py-3 text-ms font-semibold border">70%</td>
                                </tr>
                              </tbody>
                          </table>
                      </div>

                      <div className='w-7/12 p-5'>
                        <Line data={state} options={{
                            title: {
                              display: true,
                              text: 'Class Strength',
                              fontSize: 20,
                            },
                            legend: {
                              display: true,
                              position: 'right',
                            },
                          }}
                        />
                      </div>
              </div>
          </main>
      </div>
      </div>
    </div>
  );
}

export default Attendance;
