import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';
import DashboardTopNav from '../../components/DashboardTopNav';


function Notification() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

return (
    <div className="flex flex-col h-screen overflow-hidden ">
    <div className="flex flex-1 relative">
      <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      

      <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <main className="flex flex-col bg-gray-50 h-[100vh]">
             <DashboardTopNav toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

              <div className="overflow-y-auto">
                <div class="p-8">
                   <p tabindex="0" class="focus:outline-none text-2xl font-semibold leading-6 text-gray-800">Notifications</p>

                     <div class="w-full p-3 mt-8 bg-white rounded ">    
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">    
                              <div class="flex flex-col ml-3">
                                <div class="font-medium leading-none">Exam Report</div>
                                <p class="text-sm text-gray-600 leading-none mt-3">Result Are Available</p>
                              </div>
                            </div>
                        </div>
                        <div class="pl-3 py-2">
                          <p tabindex="0" class="focus:outline-none text-md leading-3 pt-1 text-gray-500">2 hours ago</p>
                        </div>
                    </div>

                    <div class="w-full p-3 mt-8 bg-white rounded ">    
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">    
                              <div class="flex flex-col ml-3">
                                <div class="font-medium leading-none">Exam Report</div>
                                <p class="text-sm text-gray-600 leading-none mt-3">Result Are Available</p>
                              </div>
                            </div>
                        </div>
                        <div class="pl-3 py-2">
                          <p tabindex="0" class="focus:outline-none text-md leading-3 pt-1 text-gray-500">2 hours ago</p>
                        </div>
                    </div>

                 </div>
              </div>
            </main>
      </div>
    </div>
  </div>
  )
}

export default Notification