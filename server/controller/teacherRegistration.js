const { initializeSchoolDB } = require("../constants/databaseVerification");
const Teacher = require("../models/teacher");
const Users = require("../models/users");
const bcrypt = require("bcrypt");

const createTeacher = async (req, res, next) => {
  try {
    const {
      schoolName,
      name,
      date_of_birth,
      gender,
      phone,
      email,
      address,
      teacher_reg_no,
    } = req.body;

    console.log("Received request to create teacher:", req.body);

    if (
      !schoolName ||
      !name ||
      !date_of_birth ||
      !gender ||
      !phone ||
      !email ||
      !address ||
      !teacher_reg_no
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields Are Required" });
    }

    const schoolDB = await initializeSchoolDB(schoolName);
    const SchoolTeacher = Teacher(schoolDB);

    const teacher = await SchoolTeacher.create({
      name: name,
      date_of_birth: date_of_birth,
      gender: gender,
      phone: phone,
      email: email,
      address: address,
      teacher_reg_no: teacher_reg_no,
    });

    console.log("New teacher created:", teacher);

    req.teacher_id = email;

    next();
  } catch (error) {
    console.error("Error creating teacher:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to create teacher" });
  }
};



const createTeacherLogInCredentials = async (req, res) => {
  try {
    const { schoolName } = req.body;
    const { teacher_id } = req;

    console.log(
      "Received request to create teacher login credentials:",
      req.body
    );

    if (!schoolName || !teacher_id) {
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
      username: teacher_id,
      password: hashedPassword,
      role: "teacher",
    });

    console.log("New user created:", user);

    return res.status(201).json({
      success: true,
      message: "Teacher created successfully",
    });
  } catch (error) {
    console.error("Error creating teacher login credentials:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create teacher login credentials",
    });
  }
};

module.exports = {
  createTeacher,
  createTeacherLogInCredentials,
};
