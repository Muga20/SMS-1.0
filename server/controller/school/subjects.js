const { initializeSchoolDB } = require("../../constants/databaseVerification");
const Subject = require("../../models/subject");
const TeachersSubjects = require("../../models/teacherSubject");

const createSubject = async (req, res) => {
    try {
      const { subjectName , department_id } = req.body;
      const { schoolName, role } = req.user; 

      console.log(req.user);
  
      if ( !subjectName || !schoolName || !department_id  || !role ) {
        return res
          .status(400)
          .json({ success: false, message: "All Fields Are Required" });
      }
  
    if (role !== "admin" && role !== "teacher") {
        return res
          .status(403)
          .json({ success: false, message: "Unauthorized access" });
      }
  
      const schoolDB = await initializeSchoolDB(schoolName);
      const SchoolSubject = Subject(schoolDB);
  
      const subject = await SchoolSubject.create({

        subject_name: subjectName,
        department_id: department_id,

      });
  
      return res.status(200).json({ success: true, subject });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ success: false, message: error.message });
    }
  };

  const getSubjects = async (req, res) => {
    try {
      const { schoolName , role } = req.user;
  
      if (!schoolName || !role) {
        return res
          .status(400)
          .json({ success: false, message: "All Fields Are Required" });
      }

      if (role !== "admin" && role !== "teacher") {
        return res
          .status(403)
          .json({ success: false, message: "Unauthorized access" });
      }
  
      const schoolDB = await initializeSchoolDB(schoolName);
      const SchoolSubject = Subject(schoolDB);
  
      const subjects = await SchoolSubject.findAll();
  
      return res.status(200).json({ success: true, subjects });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  const createTeachersSubjects = async (req, res) => {
    try {
      const {subject_id } = req.body;
      const { schoolName , role , teacher_user_id } = req.user;
  
      if (!schoolName || !role || !subject_id || !teacher_user_id) {
        return res
          .status(400)
          .json({ success: false, message: "All Fields Are Required" });
      }

      if (role !== "admin" && role !== "teacher") {
        return res
          .status(403)
          .json({ success: false, message: "Unauthorized access" });
      }
  
      const schoolDB = await initializeSchoolDB(schoolName);
      const SchoolSubject = TeachersSubjects(schoolDB);
  
      const subjects = await SchoolSubject.create({
        teacher_id: teacher_user_id,
        subject_id: subject_id,
      });
  
      return res.status(200).json({ success: true, subjects });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }



module.exports = {
    createSubject,
    getSubjects,
    createTeachersSubjects
};
