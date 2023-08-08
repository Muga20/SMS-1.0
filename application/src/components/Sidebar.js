import React from 'react'
import { AiOutlineMenu, AiOutlineTable } from 'react-icons/ai';
import { BiSolidUserAccount} from 'react-icons/bi';
import { LiaBookSolid} from 'react-icons/lia';
import { SlCalender} from 'react-icons/sl';
import { MdOutlineDashboardCustomize , MdPayments} from 'react-icons/md';
import { Link } from 'react-router-dom';


function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <div className={`flex flex-1 bg-gray-200 w-64 flex-none ${sidebarOpen ? 'block fixed md:static z-20' : 'hidden md:block'}`}
       style={{ height: '100vh', overflowY: 'auto' }}>
             <div class="flex flex-col flex-grow pt-5 overflow-y-auto bg-gray-200">
               <div class="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-900 transition-all duration-200 rounded-lg hover:bg-gray-100">
               <Link to='/student/profile'>
                  <div className='flex'>
                  <img class="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/2/avatar-male.png" alt="" />
                      Jacob Jones
                  </div>
                  </Link>
                     <div className="md:hidden">
                     <button className=" bg-blue-500 text-white" onClick={toggleSidebar}>{sidebarOpen ? <AiOutlineMenu size={30} /> : <AiOutlineMenu size={23} />}</button>
                     </div>
                </div>

                <div class="px-4 mt-6">
                    <hr class="border-black" />
                </div>

                <div class="flex flex-col flex-1 px-3 mt-6">
                    <div class="space-y-4">
                        <nav class="flex-1 space-y-1">
                            <Link to='/student/timetable' class="flex items-center gap-1 px-2 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-black rounded-lg hover:bg-gray-100 group">
                            <MdOutlineDashboardCustomize  size={23} /> Dashboard
                            </Link>
                            <Link to='/student/profile' class="flex items-center gap-1 px-2 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-black rounded-lg hover:bg-gray-100 group">
                                <BiSolidUserAccount size={23}/>Profile
                            </Link>
                            <Link to='/student/attendance' class="flex items-center gap-1 px-2 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-black rounded-lg hover:bg-gray-100 group">
                              <BiSolidUserAccount size={23}/>Attendance
                            </Link>
                            <Link to='/student/timetable' class="flex items-center gap-1 px-2 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-black rounded-lg hover:bg-gray-100 group">
                               <AiOutlineTable size={23}/> Timetable
                            </Link>
                            <Link to='/student/courseMaterials' class="flex items-center gap-1 px-2 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-black rounded-lg hover:bg-gray-100 group">
                                <SlCalender size={23}/> Shool Calender 
                            </Link>
                            <Link to='/student/fees' class="flex items-center gap-1 px-2 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-black rounded-lg hover:bg-gray-100 group">
                                 <MdPayments size={23}/>Fees
                            </Link>
                            <Link to='/student/Subjects' class="flex items-center gap-1 px-2 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-black rounded-lg hover:bg-gray-100 group">
                                 <LiaBookSolid size={23}/>Subjects
                            </Link>
                        </nav>

                           <hr class="border-black" />

                   

                        <nav class="flex-1 space-y-2 pb-12">
                            <Link to='' class="flex items-center gap-1 px-2 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-black rounded-lg hover:bg-gray-100 group">
                                <svg class="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Settings
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
    </div>      
 )
}

export default Sidebar