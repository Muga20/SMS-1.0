const { initializeSchoolDB } = require("../../constants/databaseVerification");
const Department = require("../../models/department");

const createDepartment = async (req, res) => {
    try {
      const { departmentName , teacherId } = req.body;
      const { schoolName, role } = req.user; 

      console.log(req.user);
  
      if ( !departmentName || !schoolName || !teacherId  || !role ) {
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
      const SchoolDepartment = Department(schoolDB);
  
      const department = await SchoolDepartment.create({

        department_name: departmentName,
        department_head: teacherId,

      });
  
      return res.status(200).json({ success: true, department });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ success: false, message: error.message });
    }
  };


  const getDepartments = async (req, res) => {
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
      const SchoolDepartment = Department(schoolDB);
  
      const departments = await SchoolDepartment.findAll();
  
      return res.status(200).json({ success: true, departments });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  
 module.exports = {
    createDepartment,
    getDepartments
  };
  