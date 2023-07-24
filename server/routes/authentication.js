
const {
     loginUser,
 } = require("../authentication/users"); 
 
const AuthRoutes = require("express").Router();

AuthRoutes.post("/login", loginUser);

module.exports = AuthRoutes
