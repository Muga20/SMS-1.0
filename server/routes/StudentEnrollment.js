const express = require("express");
const {
     createStudent , 
     createStudentLogInCredentials,
  
 } = require("../controller/StudentEnrollment"); 
 
const SchoolRoutes = require("express").Router();

SchoolRoutes.post("/", createStudent ,createStudentLogInCredentials);


module.exports = SchoolRoutes;
