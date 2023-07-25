import Classes from "../../pages/teacher/Classes";
import Attendance from "../../pages/student/Attendance";
import Fees from "../../pages/accountant/Fees";
import StudentsRegistration from "../../pages/secretary/StudentsRegistration";
import Teachers from "../../pages/seniorTeacher/Teachers";
import ClassStream from "../../pages/deputy/ClassStreams";
import Report from "../../pages/principle/Report";
import SchoolRegistration from "../../pages/admin/SchoolRegistration";


const roleRoutes = {
    admin: [
      { path: "/admin", element: <SchoolRegistration /> },
    
    ],
    principle: [
      { path: "/principle", element: <Report /> },
   
    ],
    deputy: [
      { path: "/deputy", element: <ClassStream/> },
   
    ],
    seniorTeacher: [
      { path: "/seniorTeacher", element: <Teachers/> },
     
      ],
    secretary: [
        { path: "/secretary", element: <StudentsRegistration/> },
     
      ],
    accountant: [
        { path: "/accountant", element: <Fees/> },
     
      ],
    teacher: [
        { path: "/teacher", element: <Classes /> },
     
      ],
    student: [
        { path: "/student", element: <Attendance/> },
     
      ],
  };
  
export default roleRoutes;