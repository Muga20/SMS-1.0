const {
    createStudent , 
    createStudentLogInCredentials,
    createStudentsFee
 
} = require("../controller/studentEnrollment"); 

const {
    createTeacher,
    createTeacherLogInCredentials, 
} = require("../controller/teacherRegistration");

const {
    createParent,
    createParentLogInCredentials,
} = require("../controller/parentRegistration");



const EnrollRoutes = require("express").Router();


EnrollRoutes.post("/student", createStudent ,createStudentsFee ,createStudentLogInCredentials );
EnrollRoutes.post("/teacher", createTeacher, createTeacherLogInCredentials);
EnrollRoutes.post("/parent", createParent, createParentLogInCredentials);


module.exports = EnrollRoutes;