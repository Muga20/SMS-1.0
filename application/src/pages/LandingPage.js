import React from 'react';
import {Link} from 'react-router-dom';
import '../style.css'

const LandingPage = () => {
  return (
    <div>



<header className="header" data-header>
  <div className="container">

    <a href="#" className="logo">
      <img src="./assets/images/logo.svg" width="162" height="50" alt="EduWeb logo"/>
    </a>

    <nav className="navbar" data-navbar>
      <div className="wrapper">
        <a href="#" className="logo">
          <img src="./assets/images/logo.svg" width="162" height="50" alt="EduWeb logo"/>
        </a>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#home" className="navbar-link" data-nav-link>Home</a>
        </li>

        <li className="navbar-item">
          <a href="#about" className="navbar-link" data-nav-link>About</a>
        </li>

        <li className="navbar-item">
          <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
        </li>

        <li className="navbar-item">
          <a href="#" className="navbar-link" data-nav-link>Contact</a>
        </li>
      </ul>
    </nav>

    <div className="header-actions">   
      <Link to='/Auth' className="btn has-before">
        <span className="span">Login</span>
      </Link>
    </div>
  </div>
</header>


<main>
  <article>

  <section className="section hero section-hero-bg">
  <div className="container">
    <div className="hero-content">
      <h1 className="section-title font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight">
        Simplify School Management and Improve Communication
      </h1>
      <p className="hero-text text-gray-600 text-lg md:text-xl">
        While Ensuring a Seamless Learning Experience for Students.
      </p>
    </div>
    <img src="https://img.freepik.com/premium-vector/students-preparing-college-entrance-examination-library-with-books-plants_432516-4202.jpg"/>

    <div>
      <a href="#" className="btn btn-primary">
        Request Demo
      </a>
    </div>
  </div>
</section>




<section className="bg-gray-100 py-8">
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
</section>

  <section className="section hero section-about-bg" id="about" aria-label="about">
      <div className="container mx-auto">
        <figure className="about-banner">
          <div className="img-holder">
            <img src="https://www.dreamhost.com/blog/wp-content/uploads/2020/11/The-Perfect-About-Us-Page-Feature-730x486.jpg" width="520" height="370" loading="lazy" alt="about banner" className="object-cover w-full h-48 md:w-520 md:h-370"/>
          </div>
        </figure>

        <div className="about-content mt-8 md:mt-0">
          <p className="text-blue-500 font-semibold text-sm">About Us</p>
          <h2 className="text-4xl font-bold mt-4">
            Over 10 Years in <span className="text-blue-500">Distant Learning</span> for Skill Development
          </h2>
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad
            minim veniam.
          </p>

          <ul className="mt-8">
            <li className="flex items-center">
              <ion-icon name="checkmark-done-outline" className="text-green-500 mr-2"></ion-icon>
              <span className="font-medium text-gray-800">Expert Trainers</span>
            </li>
            <li className="flex items-center mt-4">
              <ion-icon name="checkmark-done-outline" className="text-green-500 mr-2"></ion-icon>
              <span className="font-medium text-gray-800">Online Remote Learning</span>
            </li>
            <li className="flex items-center mt-4">
              <ion-icon name="checkmark-done-outline" className="text-green-500 mr-2"></ion-icon>
              <span className="font-medium text-gray-800">Lifetime Access</span>
            </li>
          </ul>

          <img src="http://127.0.0.1:5500/assets/images/about-shape-3.png" width="520" height="370" loading="lazy" alt="about banner" className="object-cover w-full h-48 md:w-520 md:h-370"/>
        </div>
      </div>
  </section>

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


<footer className="bg-gray-800 text-white py-10 section.footer.has-bg-image">
  <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    <div className="footer-brand">
      <a href="#" className="logo">
        <img src="./assets/images/logo-light.svg" width="162" height="50" />
      </a>

      <p className="mt-4">
        Streamline your school management with our powerful tools.
      </p>

      <div className="mt-4">
        <span className="span">Call:</span>
        <a href="tel:+011234567890" className="footer-link">+01 123 4567 890</a>
      </div>

      <div className="mt-2">
        <span className="span">Email:</span>
        <a href="mailto:info@eduweb.com" className="footer-link">info@eduweb.com</a>
      </div>
    </div>

    <ul className="mt-8 md:mt-0 footer-list">
      <li>
        <p className="font-bold">Online Platform</p>
      </li>
      <li>
        <a href="#" className="footer-link">About</a>
      </li>
      <li>
        <a href="#" className="footer-link">Contact Us</a>
      </li>
      <li>
        <a href="#" className="footer-link">News & Articles</a>
      </li>
      <li>
        <a href="#" className="footer-link">FAQ's</a>
      </li>
      <li>
        <a href="#" className="footer-link">Login</a>
      </li>
    </ul>

    <div className="mt-8 md:mt-0 footer-list">
      <p className="font-bold">Contacts</p>
      <p className="mt-2">
        Enter your email address to register for our newsletter subscription
      </p>
      <form action="" className="mt-4 newsletter-form">
        <input type="email" name="email_address" placeholder="Your email" required className="input-field bg-white text-black px-4 py-2 rounded" />
        <button type="submit" className="btn has-before bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
          <span className="span">Subscribe</span>
          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </button>
      </form>
    </div>

  </div>

  <div className="footer-bottom mt-8">
    <div className="container">
      <p className="text-center">
        Copyright 2023 All Rights Reserved by <a href="#" className="text-blue-500">LBM</a>
      </p>
    </div>
  </div>

</footer>

<a href="#top" className="back-top-btn fixed bottom-10 right-10 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full" aria-label="back to top" data-back-top-btn>
  <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
</a>

      
</div>
  );
};

export default LandingPage;
