const { verifyToken } = require("../middleware/authMiddleware");

const { createSchool } = require("../controller/schoolRegistration");

const { createClass, getClasses } = require("../controller/school/classRoom");

const {
  createDepartment,
  getDepartments,
} = require("../controller/school/department");

const { 
    createSubject,
    getSubjects,
    createTeachersSubjects
 } = require("../controller/school/subjects");


const SchoolRoutes = require("express").Router();

SchoolRoutes.post("/", createSchool);
SchoolRoutes.post("/class", verifyToken, createClass);
SchoolRoutes.get("/class", verifyToken, getClasses);
SchoolRoutes.post("/department", verifyToken, createDepartment);
SchoolRoutes.get("/department", verifyToken, getDepartments);
SchoolRoutes.post("/subject", verifyToken, createSubject);
SchoolRoutes.get("/subject", verifyToken, getSubjects);
SchoolRoutes.post("/subject/teacher", verifyToken, createTeachersSubjects);



module.exports = SchoolRoutes;
