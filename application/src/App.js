import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fees from "./accountant/Fees";
import SchoolRegistration from "./admin/SchoolRegistration";
import Classes from "./teacher/Classes";
import Attendance from "./student/Attendance";
import Teachers from "./seniorTeacher/Teachers";
import ClassStream from "./deputy/ClassStreams";
import Report from "./principle/Report";
import StudentRegistration from "./secretary/StudentsRegistration";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import ChooseSchool from "./pages/ChooseSchool";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/ChooseSchool" element={<ChooseSchool/>}/>
        <Route path="/Auth" element={<Login/>}/>
        <Route path="/ResetPassword" element={<ResetPassword/>}/>
        <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
        <Route path="/Admin" element={<SchoolRegistration/>}/>
        <Route path="/Principle" element={<Report/>}/>
        <Route path="/Deputy" element={<ClassStream/>}/>
        <Route path="/SeniorTeacher" element={<Teachers/>}/>
        <Route path="/Secretary" element={<StudentRegistration/>}/>
        <Route path="/Accountant" element={<Fees/>} />
        <Route path="/Teacher" element={<Classes/>}/>
        <Route path="/Student" element={<Attendance/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App