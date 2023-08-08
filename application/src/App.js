import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Features from "./pages/Features";
import Classes from "./pages/teacher/Classes";
import Attendance from "./pages/student/Attendance";
import Fees from "./pages/accountant/Fees";
import StudentsRegistration from "./pages/secretary/StudentsRegistration";
import Teachers from "./pages/seniorTeacher/Teachers";
import ClassStream from "./pages/deputy/ClassStreams";
import Report from "./pages/principle/Report";
import SchoolRegistration from "./pages/admin/SchoolRegistration";



 
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
    { path: "/deputy", element: <ClassStream/> },
    { path: "/seniorTeacher", element: <Teachers/> },
    { path: "/secretary", element: <StudentsRegistration/> },
    { path: "/accountant", element: <Fees/> },
    { path: "/teacher", element: <Classes /> },    
    { path: "/student", element: <Attendance/> },
 
 
  
  ]);

  function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;





