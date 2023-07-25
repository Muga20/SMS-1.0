const { initializeSchoolDB } = require("../../constants/databaseVerification");
const Classes = require("../../models/class");

const createClass = async (req, res) => {
  try {
    const { className } = req.body;
    const { schoolName, teacher_user_id , role } = req.user; 

    if ( !className || !schoolName || !user_id || !role) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields Are Required" });
    }

    if (role !== "admin") {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized access" });
    }

    const schoolDB = await initializeSchoolDB(schoolName);
    const SchoolClassroom = Classes(schoolDB);

    const classroom = await SchoolClassroom.create({
      class_name: className,
      teacher_id: teacher_user_id,
    });

    return res.status(200).json({ success: true, classroom });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};


const getClasses = async (req, res) => {
  try {
    const { role, schoolName } = req.user;

    if (role !== "teacher") {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized access" });
    }

    const schoolDB = await initializeSchoolDB(schoolName);
    const SchoolClassroom = Classes(schoolDB);

    const classrooms = await SchoolClassroom.findAll();

    return res.status(200).json({ success: true, classrooms });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createClass,
  getClasses,
};
