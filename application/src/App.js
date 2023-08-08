import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Features from "./pages/Features";
import Report from "./pages/principle/Report";
import SchoolRegistration from "./pages/admin/SchoolRegistration";

import StudentFees from "./pages/student/Fees";
import StudentSchoolCalender from "./pages/student/SchoolCalender";
import StudentProfile from "./pages/student/Profile";
import StudentTimetable from "./pages/student/Timetable";
import StudentSubjects from "./pages/student/Subjects";
import StudentAttendance from "./pages/student/Attendance";



 
  const Layout = () => {
    return (
      <div className="bg-customBackground">
        <Navbar />
        <Outlet  />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
       { path: "/",  element: <Layout />,children: [
        { path: "/", element: <LandingPage/> },
        { path: "/about", element: <About />},
        { path: "/features", element: <Features />},
      ],
    },
  
    { path: "/navbar", element: <Navbar/> },
    { path: "/footer", element: <Footer/> },
    { path: "/Auth", element: <Login/> },
    { path: "/ResetPassword", element: <ResetPassword/> },
    { path: "/ForgotPassword", element: <ForgotPassword/> },
    { path: "/admin", element: <SchoolRegistration /> },
    { path: "/principle", element: <Report /> },

    //student pages
    { path: "/student/timetable", element: <StudentTimetable/> },
    { path: "/student/courseMaterials", element: <StudentSchoolCalender/> },
    { path: "/student/profile", element: <StudentProfile/> },
    { path: "/student/fees", element: <StudentFees/> },
    { path: "/student/Subjects", element: < StudentSubjects/> },
    { path: "/student/attendance", element: <StudentAttendance/> },

 
 
  
  ]);

  function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;





