const express = require('express');
const cors = require("cors");
const app = express();
const queryDatabases = require('./config/database');
const SchoolRoutes = require("./routes/school");
const StudentEnrollment = require("./routes/StudentEnrollment");
const AuthRoutes = require("./routes/authentication");
const TeacherRoutes = require("./routes/TeachersRegistration");

app.use(cors());
app.use(express.json());

app.use('/schools',SchoolRoutes);
app.use('/student',StudentEnrollment);
app.use('/auth',AuthRoutes);
app.use('/teacher',TeacherRoutes);



app.listen(5000, () => console.log("Server running at port 5000"));