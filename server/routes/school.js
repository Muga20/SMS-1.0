const {
    createSchool  
}= require( "../controller/schoolRegistration");

const SchoolRoutes = require("express").Router();

SchoolRoutes.post("/", createSchool);

module.exports = SchoolRoutes;