const { initializeSchoolDB } = require("../constants/databaseVerification");
const Student = require("../models/student");
const Fees = require("../models/fees");
const Users = require("../models/users");
const bcrypt = require("bcrypt");

const createStudent = async (req, res, next) => {
  try {
    const { schoolName, name, date_of_birth, gender, class_id, studentAdm } =
      req.body;

    if (!schoolName ||!name ||!date_of_birth ||!gender ||!class_id ||!studentAdm) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields Are Required" });
    }

    const schoolDB = await initializeSchoolDB(schoolName);
    const SchoolStudent = Student(schoolDB);

    const student = await SchoolStudent.create({
      name: name,
      date_of_birth: date_of_birth,
      gender: gender,
      class_id: class_id,
      student_adm: studentAdm,
    });
   
    req.studentAdm = studentAdm ;
    req.student_id = student.student_id;
    req.schoolName = schoolName;

    next();

    return res.status(200).json({ 
      success: true, 
      message: "Student created successfully",
      student 
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create student ",
    });
  }
};

const createStudentsFee = async (req, res, next) => {
  try {
    const { schoolName } = req;
    const { student_id } = req;

    if (!schoolName || !student_id) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields Are Required" });
    }

    const schoolDB = await initializeSchoolDB(schoolName);
    const SchoolFees = Fees(schoolDB);

    const fees = await SchoolFees.create({
      student_id: student_id,
      Annual_fee: 54000,
      term_one: 0,
      term_two: 0,
      term_Three: 0,
      balance: 54000,
    });

    next();

   return res.status(200).json({ 
    success: true, 
    message: "Student fees created successfully",
    fees });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create student fees ",
    });
  }

};

const createStudentLogInCredentials = async (req, res) => {
  try {
    const { schoolName } = req.body;
    const { studentAdm, student_id } = req;

    if (!schoolName || !studentAdm || !student_id) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields Are Required" });
    }

    const schoolDB = await initializeSchoolDB(schoolName);
    const SchoolUsers = Users(schoolDB);

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash("123456", salt);

    const user = await SchoolUsers.create({
      student_user_id: student_id,
      username: studentAdm,
      password: hashedPassword,
      role: "student",
    });

    return res.status(200).json({
       success: true,
       message: "Student created successfully",
      user
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create student login credentials",
    });
  }
};


module.exports = {
  createStudent,
   createStudentsFee,
  createStudentLogInCredentials,
 
};
