const {
    createStudent , 
    createStudentLogInCredentials,
    createStudentsFee
 
} = require("../controller/enrollemrnt/studentEnrollment"); 

const {
    createTeacher,
    createTeacherLogInCredentials, 
} = require("../controller/enrollemrnt/teacherRegistration");

const {
    createParent,
    createParentLogInCredentials,
} = require("../controller/enrollemrnt/parentRegistration");

const {
    createAdmin,
    createAdminLogInCredentials,
} = require("../controller/enrollemrnt/adminRegistration");



const EnrollRoutes = require("express").Router();


EnrollRoutes.post("/student", createStudent ,createStudentsFee ,createStudentLogInCredentials );
EnrollRoutes.post("/teacher", createTeacher, createTeacherLogInCredentials);
EnrollRoutes.post("/parent", createParent, createParentLogInCredentials);
EnrollRoutes.post("/admin", createAdmin, createAdminLogInCredentials);


module.exports = EnrollRoutes;