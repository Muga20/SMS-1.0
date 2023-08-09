import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';
import { AiOutlineMenu } from 'react-icons/ai';
import axios from 'axios'
import DashboardTopNav from '../../components/DashboardTopNav';


function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    }


  return (
    <div className="flex flex-col h-screen overflow-hidden ">
  <div className="flex flex-1 relative">
    <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
    

    <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <main className="flex flex-col bg-gray-50 h-[100vh]">
             <DashboardTopNav toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
             
            <div className="overflow-y-auto">
              <div className='p-3'>
               <p tabindex="0" class="focus:outline-none text-2xl font-semibold leading-6 text-gray-800">User Dashboard</p>
               
                  <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6 p-3 mt-5 mx-auto">
                    <div class="p-5 bg-white rounded-md shadow-sm">
                        <p className='text-2xl text-black font-bold text-center'>Grade</p>
                        <div class="flex items-center justify-center rounded-md pt-2"> 
                            <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                                <span class="block text-2xl font-bold">A+</span>
                            </div>
                        </div>
                    </div>

                    <div class="p-5 bg-white rounded-md shadow-sm">
                        <p className='text-2xl text-black font-bold text-center'>Attendance</p>
                        <div class="flex items-center justify-center rounded-md pt-2"> 
                            <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                                <span class="block text-2xl font-bold">70 %</span>
                            </div>
                        </div>
                    </div>
                  </section>
                  
              </div>
            </div>
          </main>
    </div>
  </div>
</div>
  )
}

export default Dashboard 