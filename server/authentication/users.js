const { initializeSchoolDB } = require("../constants/databaseVerification");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Users = require("../models/users");
const dotenv = require("dotenv");
dotenv.config();

const loginUser = async (req, res) => {
  try {
    const { schoolName, username, password } = req.body;

    if (!schoolName || !username || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields Are Required" });
    }

    const schoolDB = await initializeSchoolDB(schoolName);
    const SchoolUsers = Users(schoolDB);

    const user = await SchoolUsers.findOne({ where: { username: username } });
    console.log(user);
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

    const token = jwt.sign(
      {
        userId: user.id,
        student_user_id: user.student_user_id,
        parent_user_id: user.parent_user_id,
        teacher_user_id: user.teacher_user_id,
        username: user.username,
        role: user.role,
        schoolName: schoolName,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    // Include the token in the "Authorization" header of the response
    res.setHeader("Authorization", token);

    return res.status(200).json({
      success: true,
      message: "Users logged in successfully",
      user: {userId: user.id, username: user.username, role: user.role, schoolName: schoolName, token: token},
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to login student" });
  }
};

module.exports = {
  loginUser,
};
