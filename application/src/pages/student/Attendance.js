import React, { useState } from 'react';
import Main from '../../components/Main';
import Sidebar from '../../components/Sidebar';

function Attendance() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">
        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          {/* Use overflow-y-auto to allow scrolling */}
          <Main toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        </div>
      </div>
    </div>
  );
}

export default Attendance;
