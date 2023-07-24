const { initializeSchoolDB } = require("../../constants/databaseVerification");
const SchoolAdmin = require("../../models/schoolAdmin");
const Users = require("../../models/users");
const bcrypt = require("bcrypt");
const path = require("path");

const createAdmin = async (req, res, next) => {
  try {
    const { schoolName, name, date_of_birth, contact, email, address, reg_number } = req.body;

    if (!name || !date_of_birth || !contact || !email || !address || !schoolName) {
      return res.status(400).json({ success: false, message: "All Fields Are Required" });
    }

    const schoolDB = await initializeSchoolDB(schoolName);
    const schoolAdmin = SchoolAdmin(schoolDB);

    const baseUrl = req.protocol + "://" + req.get("host");

    const newSchoolAdmin = await schoolAdmin.create({
      name: name,
      date_of_birth: date_of_birth,
      contact: contact,
      email: email,
      address: address,
      reg_number: reg_number,
      profile_picture: `${baseUrl}/${path.join("Images", "blank-profile-picture-gab6c06e5a_1920.png")}`,
    });

    req.admins_email = email;
    req.admin_id = newSchoolAdmin.admin_id;

     console.log(newSchoolAdmin);
    next();
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

const createAdminLogInCredentials = async (req, res) => {
  try {
    const { schoolName } = req.body;
    const { admins_email, admin_id } = req;

    if (!schoolName || !admin_id || !admins_email) {
      return res.status(400).json({ success: false, message: "All Fields Are Required" });
    }

    const schoolDB = await initializeSchoolDB(schoolName);
    const SchoolUsers = Users(schoolDB);

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash("123456", salt);

    const user = await SchoolUsers.create({
      school_admin_user: admin_id,
      username: admins_email,
      password: hashedPassword,
      role: "admin",
    });

    return res.status(200).json({
      success: true,
      message: "Parent created successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create parent login credentials",
    });
  }
};

module.exports = {
  createAdmin,
  createAdminLogInCredentials,
};
