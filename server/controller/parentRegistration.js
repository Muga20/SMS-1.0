const { initializeSchoolDB } = require("../constants/databaseVerification");
const Parent = require("../models/parent");
const Users = require("../models/users");
const bcrypt = require("bcrypt");

const createParent = async (req, res, next) => {
    try {
      const {schoolName, name, date_of_birth, contact, email, address ,student_id } = req.body;
  
      if (!name || !date_of_birth || !contact || !email || !address || !student_id || !schoolName) {
        return res
          .status(400)
          .json({ success: false, message: "All Fields Are Required" });
      }
  
      const schoolDB = await initializeSchoolDB(schoolName);
      const SchoolParent = Parent(schoolDB);
  
      const parent = await SchoolParent.create({
        name: name,
        student_id: student_id,
        date_of_birth: date_of_birth,
        contact: contact,
        email: email,
        address: address,
      });
  
      req.parents_email = email;
      req.parent_id = parent.parent_id;
  
      next();
      return res.status(201).json({
        success: true,
        message: "Parent created successfully",
        parent,
      });

    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Failed to create parent",
      });
    }

  };
  
  const createParentLogInCredentials = async (req, res) => {
    try {
      const { schoolName } = req.body;
      const { parents_email , parent_id } = req;
  
      if (!schoolName || !parent_id || !parents_email) {
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
        parent_user_id: parent_id,
        username: parents_email,
        password: hashedPassword,
        role: "parent",
      });
  
      return res.status(200).json({ 
        success: true,
        message: "Parent created successfully",
        user
       });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Failed to create parent login credentials",
      });
    }
  };

  
    module.exports = {
     createParent,
     createParentLogInCredentials,
    };
