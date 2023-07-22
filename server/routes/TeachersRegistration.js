const {
    createTeacher,
    createTeacherLogInCredentials, 
} = require("../controller/teacherRegistration");

const TeacherRoutes = require("express").Router();

TeacherRoutes.post("/", createTeacher, createTeacherLogInCredentials);

module.exports = TeacherRoutes;