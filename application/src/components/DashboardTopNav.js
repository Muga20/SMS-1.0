import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';

function DashboardTopNav({ sidebarOpen, toggleSidebar  }) {
  return (
    <div className="md:hidden max-w-7xl mx-auto bg-gray-50 py-3  w-full">
    <div className="flex items-center">
      <div className="md:hidden">
        <button className="text-black" onClick={toggleSidebar}>
          {sidebarOpen ? <AiOutlineMenu size={35} /> : <AiOutlineMenu size={35} />}
        </button>
      </div>
    </div>
  </div>
  )
}

export default DashboardTopNav