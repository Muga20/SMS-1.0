import React from 'react'
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <section class="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 md:col-span-3 lg:grid-cols-5 gap-y-16 gap-x-12">
          <div class="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <Link to='/' class="inline-block pb-2 text-lg font-bold text-black">About Company</Link>
            <div class="w-20 mb-4 border-b-2 border-gray-300 "></div>
              <p class="text-base font-normal leading-6 text-gray-400 lg:w-64">
              ScholarEase System it Simplify School Management, While Ensuring a Seamless Learning Experience for Students
              </p>
          </div>

          <div>
            <h2 class="pb-2 text-lg font-bold text-black ">Quick Links</h2>
            <div class="w-24 mb-4 border-b-2 border-gray-300 "></div>
              <ul>
                <li class="mb-4"><Link to='' class="inline-block text-base font-normal text-gray-400">Home</Link></li>
                <li class="mb-4"><Link to='' class="inline-block text-base font-normal text-gray-400 ">About Us</Link></li>
                  <li class="mb-4"><Link to='' class="inline-block text-base font-normal text-gray-400 dark:text-gray-400">Features</Link></li>
                  <li class="mb-4"><Link to='' class="inline-block text-base font-normal text-gray-400 dark:text-gray-400">Login</Link></li>
              </ul>
          </div>

        </div>

        <p class="text-sm text-center pt-10 text-gray-600">{"Copyright © "} {new Date().getFullYear()}{" "}, All Rights Reserved by mlb</p>
    </div>
  </section>
  )
}

export default Footer