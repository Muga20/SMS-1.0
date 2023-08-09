import React from 'react';
import {Link} from 'react-router-dom';
import '../style.css'

const LandingPage = () => {


  return (
    <div>
      <main>
        <article>
       

        <div class="bg-gray-50">
          <section class="py-10 sm:py-16 lg:py-24">
              <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                      <div>
                          <h1 class="text-xl font-bold text-black sm:text-6xl lg:text-7xl">
                              Simplify School Management
                              <div class="relative inline-flex">
                                  <span class="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                                  <h1 class="relative text-lg font-bold text-black sm:text-lg lg:text-4xl">ScholarEase System.</h1>
                              </div>
                          </h1>
                          <p class="mt-8 text-base text-black sm:text-xl">While Ensuring a Seamless Learning Experience for Students.</p>
                      </div>

                      <div>
                          <img class="w-full" src="https://img.freepik.com/premium-vector/students-preparing-college-entrance-examination-library-with-books-plants_432516-4202.jpg" alt="" />
                      </div>
                  </div>
              </div>
          </section>
        </div>



      <section className="bg-white py-8">
        <div className="container mx-auto">

          <h2 className="text-3xl font-bold mb-4">
            Empowering <span className="text-blue-500">Education</span> For Everyone.
          </h2>

          <p className="text-gray-700 mb-6">
            Consectetur adipiscing elit sed do eiusmod tempor.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <img
                  className="w-full h-48 object-cover"
                  src="https://www.creative.onl/payrollindex/wp-content/uploads/2022/04/employee-attendance-tracking.jpg"
                  alt="Attendance Tracking"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Efficient Attendance Tracking
                  </h3>
                  <p className="text-gray-700">Easily record and monitor attendance, with automated reporting and alerts.</p>
                </div>
              </div>
            </li>

            <li>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <img
                  className="w-full h-48 object-cover"
                  src="https://pmstudycircle.com/wp-content/uploads/2022/09/Project-Progress-Report.jpg"
                  alt="Grading and Progress Monitoring"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Automated Grading
                  </h3>
                  <p className="text-gray-700">Simplify grading tasks and track student progress with real-time insights.</p>
                </div>
              </div>
            </li>

            <li>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <img
                  className="w-full h-48 object-cover"
                  src="https://www.travelperk.com/wp-content/uploads/Guides_The-ultimate-guide-to-administrative-tasks.png"
                  alt="Automate Administrative Tasks"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Administrative Tasks
                  </h3>
                  <p className="text-gray-700">Streamline administrative tasks to save time and improve efficiency.</p>
                </div>
              </div>
            </li>
          </ul>
           
        </div>
          <div className='flex items-center justify-center pt-10'>
            <Link to='/features' type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-500 border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0 hover:bg-gray-400">
                  view more
            </Link>
           </div>
      </section>
        
        <div class="py-20 bg-white">
            <div class="max-w-6xl px-4 mx-auto md:px-0 font-poppins">
                <div class="flex flex-wrap items-center px-4">
                    <div class="w-full px-4 mb-16 md:w-1/2 md:mb-0">
                        <h2 class="mb-6 text-3xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-black md:text-5xl lg:text-6xl">Distant Learning or Skill Development</h2>
                        <p class="mb-6 font-medium tracking-wide text-gray-600 dark:text-gray-400 md:text-lg">
                            Success is most important part of life and it is determination of having achieved and accomplished  aim with lots of failure enthusiam.
                        </p>
                    </div>
                    <div class="w-full px-4 md:w-1/2">
                        <div class="relative mx-auto md:mr-0 max-w-max">
                            <div
                                class="absolute z-50 text-blue-500 transform -translate-y-1/2 cursor-pointer top-1/2 left-1/2 hover:text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="w-14 h-14 bi bi-play-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                </svg>
                            </div>
                            <div class="relative overflow-hidden rounded-7xl">
                                <img src="https://www.dreamhost.com/blog/wp-content/uploads/2020/11/The-Perfect-About-Us-Page-Feature-730x486.jpg" alt=""class="relative z-10 object-cover w-full h-full rounded-md"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="bg-gray-100 py-16 stats" aria-label="stats">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Discover Our Achievements</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <li>
              <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-4">29.3k</h3>
                <p className="text-gray-600">Students Enrolled</p>
              </div>
            </li>

            <li>
              <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-4">32.4K</h3>
                <p className="text-gray-600">ClassNamees Completed</p>
              </div>
            </li>

            <li>
              <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-4">100%</h3>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
            </li>

            <li>
              <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-4">354+</h3>
                <p className="text-gray-600">Top Instructors</p>
              </div>
            </li>
          </ul>
        </div>
        </section>
        </article>
      </main>      
</div>
  );
};

export default LandingPage;
