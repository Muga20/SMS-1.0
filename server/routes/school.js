const {
    createSchool  
}= require( "../controller/schoolRegistration");

const {
    createClass
} = require("../controller/classRoom");


const SchoolRoutes = require("express").Router();

SchoolRoutes.post("/", createSchool);
SchoolRoutes.post("/class", createClass);

module.exports = SchoolRoutes;