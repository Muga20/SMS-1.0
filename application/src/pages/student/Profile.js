import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';
import axios from 'axios'
import DashboardTopNav from '../../components/DashboardTopNav';


function Profile() {
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
              
              <div className="overflow-y-auto px-10 py-5">
                <div class="rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div class="-mx-3 md:flex mb-2">
                    <div class=" gap-4 px-3 flex items-center justify-between mx-auto mb-6 md:mb-0">
                        <div className='appearance-none block w-72 bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3'>
                          <img className='' src='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg'/>
                        </div>
                    </div>
                  </div>
                  <div class="-mx-3 md:flex mb-2">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">student Name</label>
                      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded outline-none py-3 px-4 mb-3" type="text" />
                    </div>
                    <div class="md:w-1/2 px-3">
                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="Admission">Admission</label>
                      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter outline-none rounded py-3 px-4" type="text"/>
                    </div>
                  
                  </div>
                  <div class="-mx-3 md:flex mb-2">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="Class">Class</label>
                      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red outline-none rounded py-3 px-4 mb-3" type="text" />
                    </div>
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="Upi">Upi</label>
                      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter outline-none rounded py-3 px-4" type="text"/>
                    </div>
                
                    <div class="md:w-1/2 px-3">
                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="Result">KCPE Result</label>
                      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter outline-none rounded py-3 px-4" type="text"/>
                    </div>
                  </div>
                  <div class="-mx-3 md:flex mb-2">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="Number">Index Number</label>
                      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter outline-none rounded py-3 px-4" type="text"/>
                    </div>
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="Gender">Gender</label>
                      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter outline-none rounded py-3 px-4" type="text"/>
                    </div>
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="Birth">Date Of Birth</label>
                      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter outline-none rounded py-3 px-4"/>
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

export default Profile