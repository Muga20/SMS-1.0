const { initializeSchoolDB } = require("../constants/databaseVerification");
const Classes = require("../models/class");

const createClass = async (req, res) => {
  try {
    const { schoolName, className, teacher_id } = req.body;

    if (!schoolName || !className || !teacher_id) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields Are Required" });
    }

    const schoolDB = await initializeSchoolDB(schoolName);
    const SchoolClassroom = Classes(schoolDB);

    const classroom = await SchoolClassroom.create({
      class_name: className,
      teacher_id: teacher_id,
    });
;
    return res.status(200).json({ 
      success: true, 
      message: "Class created successfully",
      classroom 
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create student login credentials",
    });
  }
};

module.exports = {
  createClass,
};
