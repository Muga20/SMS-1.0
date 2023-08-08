import React from 'react'
import { GiBookshelf } from 'react-icons/gi';
import {RiSecurePaymentFill } from 'react-icons/ri';
import {PiStudentBold } from 'react-icons/pi';
import {MdAdminPanelSettings, MdGrading, MdOutlineSpatialTracking } from 'react-icons/md';

function Features() {
  return (
    <section class="py-12 bg-white sm:py-16 lg:py-20">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">Features</h2>
                <p class="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">We make things easy and better for you</p>
            </div>

            <div class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 gap-5  gap-y-12 md:grid-cols-3 xl:mt-24">
                <div class="p-8 border shadow-sm">
                    <svg class="mx-auto" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <MdOutlineSpatialTracking size={40}/>
                    </svg>
                    <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">Efficient Attendance Tracking</h3>
                    <p class="mt-5 text-base text-gray-600 font-pj">Easily record and monitor attendance, with automated reporting and alerts.</p>
                </div>

                <div class="p-8  border  shadow-sm">
                    <svg class="mx-auto" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <MdGrading size={40}/>
                    </svg>
                    <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">Automated Grading</h3>
                    <p class="mt-5 text-base text-gray-600 font-pj">Simplify grading tasks and track student progress with real-time insights.</p>
                </div>

                <div class="p-8  border  shadow-sm">
                    <svg class="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <MdAdminPanelSettings size={40}/>
                    </svg>
                    <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">Administrative Tasks</h3>
                    <p class="mt-5 text-base text-gray-600 font-pj">Streamline administrative tasks to save time and improve efficiency.</p>
                </div>

                <div class="p-8  border  shadow-sm ">
                    <svg class="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <PiStudentBold size={40}/>
                    </svg>
                    <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">Parent and Student Portals</h3>
                    <p class="mt-5 text-base text-gray-600 font-pj">Access to student's academic performance and attendance.</p>
                </div>

                <div class="p-8   border  shadow-sm">
                   <svg class="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <RiSecurePaymentFill size={40}/>
                   </svg> 
                    <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">Fee and Payment Management</h3>
                    <p class="mt-5 text-base text-gray-600 font-pj">Tracking of payment history, Automatic reminders for pending payments.</p>
                </div>

                <div class="p-8   border  shadow-sm">
                   <svg class="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <GiBookshelf size={40}/>
                        </svg>
                    <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">Library Management</h3>
                    <p class="mt-5 text-base text-gray-600 font-pj">Cataloging and management of library resources.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features