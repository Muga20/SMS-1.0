const { initializeSchoolDB } = require("../../constants/databaseVerification");
const Teacher = require("../../models/teacher");
const Users = require("../../models/users");
const bcrypt = require("bcrypt");
const path = require("path");

const createTeacher = async (req, res, next) => {
  try {
    const { schoolName, name, date_of_birth, gender, phone, email, address, teacher_reg_no } = req.body;

    if (!schoolName || !name || !date_of_birth || !gender || !phone || !email || !address || !teacher_reg_no) {
      return res.status(400).json({ success: false, message: "All Fields Are Required" });
    }

    const schoolDB = await initializeSchoolDB(schoolName);
    const SchoolTeacher = Teacher(schoolDB);
    
    const baseUrl = req.protocol + "://" + req.get("host");

    const teacher = await SchoolTeacher.create({
      name: name,
      date_of_birth: date_of_birth,
      gender: gender,
      phone: phone,
      email: email,
      address: address,
      teacher_reg_no: teacher_reg_no,
      profile_picture: `${baseUrl}/${path.join("Images", "blank-profile-picture-gab6c06e5a_1920.png")}`,
    });

    req.teachers_email = email;
    req.teacher_id = teacher.teacher_id;

    // Do not send a response here, as we'll let the next middleware handle it
    
    next();
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const createTeacherLogInCredentials = async (req, res) => {
  try {
    const { schoolName } = req.body;
    const { teachers_email, teacher_id } = req;

    if (!schoolName || !teachers_email) {
      return res.status(400).json({ success: false, message: "All Fields Are Required" });
    }

    const schoolDB = await initializeSchoolDB(schoolName);
    const SchoolUsers = Users(schoolDB);

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash("123456", salt);

    const user = await SchoolUsers.create({
      teacher_user_id: teacher_id,
      username: teachers_email,
      password: hashedPassword,
      role: "teacher",
    });

    return res.status(201).json({
      success: true,
      message: "Teacher login credentials created successfully",
      user,
    });
  } catch (error) {
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
