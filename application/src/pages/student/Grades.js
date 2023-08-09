import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';
import DashboardTopNav from '../../components/DashboardTopNav';

function Grades() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

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

              <p className='pt-5 px-3 text-lg font-bold text-black'>Payment Structure</p>
                      <div className='p-5 m-3 bg-gray-100 rounded-md'>
                          <table className="w-full mx-auto text-sm font-light">
                            <thead>
                                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-white uppercase border-b border-gray-600">
                                  <th class="px-2.5 lg:px-4 py-3 border">Term One</th>
                                  <th class="px-2.5 lg:px-4 py-3 border">Term Two</th>
                                  <th class="px-2.5 lg:px-4 py-3 border">Term Three</th>
                                  <th class="px-2.5 lg:px-4 py-3 border">Total Amount</th>
                                </tr>
                              </thead>
                              <tbody class="bg-white">
                                <tr class="text-gray-700">
                                  <td class="px-2.5 lg:px-4 py-3 text-ms font-semibold border">Ksh 5000</td>
                                  <td class="px-2.5 lg:px-4 py-3 text-ms font-semibold border">Ksh 9000</td>
                                  <td class="px-2.5 lg:px-4 py-3 text-ms font-semibold border">Ksh 1000</td>
                                  <td class="px-2.5 lg:px-4 py-3 text-ms font-semibold border">Ksh 1000000</td>
                                </tr>
                              </tbody>
                          </table>
                      </div>

                    <p className='text-center pt-5 text-xl font-bold text-black'>Payment Balance</p>
                    <div className='flex item-center justify-around py-5 lg:py-0'>
                           <div class="flex items-center gap-x-2">
                              <h2 class="text-lg font-bold text-black">Class:</h2>
                              <p class="text-md text-black">5s</p>
                           </div>
                           <div class="flex items-center gap-x-2">
                              <h2 class="text-lg font-bold text-black">Year:</h2>
                              <p class="text-md text-black">2023</p>
                          </div>
                    </div>
                  <div className='lg:p-5 lg:m-3  bg-white'>
                     <table class="min-w-full divide-y divide-gray-200 border dark:divide-gray-700">
                         <thead class="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                   <th scope="col" class="px-4 py-3.5 text-center text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400">Term</th>
                                    <th scope="col" class="px-4 py-3.5 text-center text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400">Amount</th>  
                                    <th scope="col" class="px-4 py-3.5 text-center text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400">Paid Amount</th>  
                                    <th scope="col" class="px-4 py-3.5 text-center text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400">Balance</th>  
                                    <th scope="col" class="px-4 py-3.5 text-center text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400">Status</th>  
                                 </tr>
                          </thead>
                          <tbody class="bg-white divide-y">
                              <tr>  
                                  <td class="px-1 lg:px-4 py-4 border-r text-center text-sm text-black  whitespace-nowrap">Term One</td>  
                                   <td class="px-1 lg:px-4 py-4 text-center text-sm text-black  whitespace-nowrap">Ksh 9000</td>          
                                   <td class="px-1 lg:px-4 py-4 text-center text-sm text-black  whitespace-nowrap">Ksh 200</td>          
                                   <td class="px-1 lg:px-4 py-4 text-center text-sm text-black  whitespace-nowrap">Ksh 300</td>          
                                   <td class="px-1 lg:px-4 py-4 text-center text-sm text-black  whitespace-nowrap">  <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                      <span class="material-symbols-outlined w-5 h-5">done</span>
                                      <h2 class="text-sm font-normal">Paid</h2>
                                    </div></td>          
                              </tr>
                              <tr>  
                                  <td class="px-1 lg:px-4 py-4 border-r text-center text-sm text-black  whitespace-nowrap">Term Two</td>  
                                   <td class="px-1 lg:px-4 py-4 text-center text-sm text-black  whitespace-nowrap">Ksh 9000</td>          
                                   <td class="px-1 lg:px-4 py-4 text-center text-sm text-black  whitespace-nowrap">Ksh 200</td>          
                                   <td class="px-1 lg:px-4 py-4 text-center text-sm text-black  whitespace-nowrap">Ksh 300</td>          
                                   <td class="px-1 lg:px-4 py-4 text-center text-sm text-black  whitespace-nowrap"> 
                                    <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">      
                                      <span class="material-symbols-outlined w-5 h-5">close</span>
                                      <h2 class="text-sm font-normal">Unpaid</h2>
                                    </div></td>          
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

export default Grades