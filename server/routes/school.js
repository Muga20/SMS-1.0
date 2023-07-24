const { verifyToken } = require("../middleware/authMiddleware");

const { createSchool } = require("../controller/schoolRegistration");

const { createClass, getClasses } = require("../controller/school/classRoom");

const SchoolRoutes = require("express").Router();

SchoolRoutes.post("/", createSchool);
SchoolRoutes.post("/class", verifyToken, createClass);
SchoolRoutes.get("/class", verifyToken, getClasses);

module.exports = SchoolRoutes;
