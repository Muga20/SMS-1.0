import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';
import { AiOutlineMenu } from 'react-icons/ai';
import axios from 'axios'
import DashboardTopNav from '../../components/DashboardTopNav';


function Subjects() {
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

               <div className='p-8 bg-white'>
               <p tabindex="0" class="focus:outline-none text-2xl font-semibold leading-6 text-gray-800">Subjects</p>
                  <table class="min-w-full divide-y p-3 mt-8 divide-gray-200 border dark:divide-gray-700">
                         <thead class="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                   <th scope="col" class="px-4 py-3.5 text-center text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400">Subject</th>
                                    <th scope="col" class="px-4 py-3.5 text-center text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400">Teacher</th>  
                                 </tr>
                          </thead>
                          <tbody class="bg-white divide-y">
                                <tr>  
                                  <td class="px-4 py-4 border-r text-center text-sm text-black  whitespace-nowrap"> Math</td>  
                                   <td class="px-4 py-4 text-center text-sm text-black  whitespace-nowrap"> Mr. Smith </td>          
                               </tr>
                               <tr>  
                                  <td class="px-4 py-4 border-r text-center text-sm text-black  whitespace-nowrap"> Science </td>  
                                   <td class="px-4 py-4 text-center text-sm text-black  whitespace-nowrap"> Ms. Johnson</td>          
                               </tr>
                               <tr>  
                                  <td class="px-4 py-4 border-r text-center text-sm text-black  whitespace-nowrap"> English</td>  
                                   <td class="px-4 py-4 text-center text-sm text-black  whitespace-nowrap">Mr. Williams</td>          
                               </tr>
                               <tr>  
                                  <td class="px-4 py-4 border-r text-center text-sm text-black  whitespace-nowrap">Music </td>  
                                   <td class="px-4 py-4 text-center text-sm text-black  whitespace-nowrap"> Mrs. Lee </td>          
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