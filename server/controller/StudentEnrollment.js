const { initializeSchoolDB } = require("../constants/databaseVerification");
const Student = require("../models/student");
const Users = require("../models/users");
const bcrypt = require("bcrypt");

const createStudent = async (req, res, next) => {
  try {
    const { schoolName, name, date_of_birth, gender, class_id, studentAdm } =
      req.body;

    console.log("Received request to create student:", req.body);

    if (
      !schoolName ||
      !name ||
      !date_of_birth ||
      !gender ||
      !class_id ||
      !studentAdm
    ) {
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
    console.log("New student created:", student);

    req.studentAdm = studentAdm || student.student_adm;

    next();
    
  } catch (error) {
    console.error("Error creating student:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to create student" });
  }
};

const createStudentLogInCredentials = async (req, res) => {
  try {
    const { schoolName } = req.body;
    const { studentAdm } = req;

    console.log(
      "Received request to create student login credentials:",
      req.body
    );

    if (!schoolName || !studentAdm) {
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
      username: studentAdm,
      password: hashedPassword,
      role: "student",
    });
    console.log("New student login credentials created:", user);

    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error creating student login credentials:", error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Failed to create student login credentials",
      });
  }
};

module.exports = {
  createStudent,
  createStudentLogInCredentials,
};
