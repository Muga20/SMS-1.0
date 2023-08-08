import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';
import DashboardTopNav from '../../components/DashboardTopNav';
import axios from 'axios'



function Timetable() {
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

const timetableData = [
  { time: '08:00 AM - 9:40 AM', monday: 'Math (A101)', tuesday: 'Science (B203)', wednesday: 'English (C304)', thursday: 'History (D405)', friday: 'PE (Gym)' },
  { time: '9:40 AM - 10:20 AM', monday: 'Math (A101)', tuesday: 'Science (B203)', wednesday: 'English (C304)', thursday: 'History (D405)', friday: 'PE (Gym)' },
  { time: '10:20 AM - 11:40 AM', monday: 'Math (A101)', tuesday: 'Science (B203)', wednesday: 'English (C304)', thursday: 'History (D405)', friday: 'PE (Gym)' },
  { time: '12:00 AM - 12:40 AM', monday: 'Math (A101)', tuesday: 'Science (B203)', wednesday: 'English (C304)', thursday: 'History (D405)', friday: 'PE (Gym)' },
  { time: '1:30 AM - 2:20', monday: 'Lunch', tuesday: 'Lunch', wednesday: 'Lunch', thursday: 'Lunch', friday: 'Lunch' },
  { time: '12:40 AM - 1:00', monday: 'Math (A101)', tuesday: 'Science (B203)', wednesday: 'English (C304)', thursday: 'History (D405)', friday: 'PE (Gym)' },
  { time: '1:30 AM - 2:20', monday: 'Math (A101)', tuesday: 'Science (B203)', wednesday: 'English (C304)', thursday: 'History (D405)', friday: 'PE (Gym)' },
  { time: '1:30 AM - 2:20', monday: 'Math (A101)', tuesday: 'Science (B203)', wednesday: 'English (C304)', thursday: 'History (D405)', friday: 'PE (Gym)' },
];

  return (
    <div className="flex flex-col h-screen overflow-hidden ">
    <div className="flex flex-1 relative">
      <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      

      <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <main className="flex flex-col bg-white h-[100vh]">
              <DashboardTopNav toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

              <div className="overflow-y-auto">
                <p className='text-center pt-5 text-lg font-bold text-black'>Class Timetable</p>
                <div className='p-5 m-2 bg-gray-100'>
                    <table className="table-auto w-full h-full border-collapse">
                      <thead>
                        <tr>
                          <th className="border">Time \ Day</th>
                          <th className="border">Monday</th>
                          <th className="border">Tuesday</th>
                          <th className="border">Wednesday</th>
                          <th className="border">Thursday</th>
                          <th className="border">Friday</th>
                        </tr>
                      </thead>
                      <tbody>
                        {timetableData.map((row, index) => (
                          <tr key={index}>
                            <td className="border p-2">{row.time}</td>
                            <td className="border p-2">{row.monday}</td>
                            <td className="border p-2">{row.tuesday}</td>
                            <td className="border p-2">{row.wednesday}</td>
                            <td className="border p-2">{row.thursday}</td>
                            <td className="border p-2">{row.friday}</td>
                          </tr>
                        ))}
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

export default Timetable