const { initializeSchoolDB } = require("../constants/databaseVerification");
const Users = require("../models/users");
const bcrypt = require("bcrypt");


const loginStudent = async (req, res) => {
  try {
    const { schoolName, username, password } = req.body;

    console.log("Received request to login student:", req.body);

    if (!schoolName || !username || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields Are Required" });
    }

    const schoolDB = await initializeSchoolDB(schoolName);
    const SchoolUsers = Users(schoolDB);

    const user = await SchoolUsers.findOne({ where: { username: username } });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid username or password" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid username or password" });
    }

    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error logging in student:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to login student" });
  }
};

module.exports = {
  loginStudent
};
