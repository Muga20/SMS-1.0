
const {
     loginStudent,
 } = require("../authentication/users"); 
 
const AuthRoutes = require("express").Router();

AuthRoutes.post("/login", loginStudent);

module.exports = AuthRoutes
