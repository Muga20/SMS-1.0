const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost:3306");
const defineClassesModel = require("../models/class");
const defineFeesModel = require("../models/fees");
const defineParentModel = require("../models/parent");
const schoolsModel = require("../models/schools");
const defineStudentModel = require("../models/student");
const defineTeacherModel = require("../models/teacher");
const defineTeacherSubjectModel = require("../models/teacherSubject");
const defineUsersModel = require("../models/users");
const defineSubjectModel = require("../models/subject");

const createSchool = async (req, res) => {
  const { name } = req.body;

  try {
    await sequelize.query(`CREATE DATABASE ${name}`);
    const newDBConfig = {
      database: name,
      username: "root",
      password: "",
      host: "localhost",
      dialect: "mysql",
    };

    const newDB = new Sequelize(
      newDBConfig.database,
      newDBConfig.username,
      newDBConfig.password,
      {
        host: newDBConfig.host,
        dialect: newDBConfig.dialect,
      }
    );

    const SchoolTeachers = defineTeacherModel(newDB);
    const Schools = schoolsModel(newDB);
    const SchoolStudents = defineStudentModel(newDB);
    const SchoolFees = defineFeesModel(newDB);
    const SchoolParents = defineParentModel(newDB);
    const SchoolTeacherSubjects = defineTeacherSubjectModel(newDB);
    const SchoolSubjects = defineSubjectModel(newDB);
    const SchoolClasses = defineClassesModel(newDB);
    const SchoolUsers = defineUsersModel(newDB);

    // Define associations here
    SchoolStudents.belongsTo(SchoolClasses, { foreignKey: "class_id" });
    SchoolFees.belongsTo(SchoolStudents, { foreignKey: "student_id" });
    SchoolClasses.belongsTo(SchoolTeachers, { foreignKey: "teacher_id" });
    SchoolParents.belongsTo(SchoolStudents, { foreignKey: "student_id" });
    SchoolSubjects.belongsTo(SchoolTeachers, { foreignKey: "teacher_id" });
    SchoolUsers.belongsTo(SchoolStudents, { foreignKey: "student_user_id" });
    SchoolUsers.belongsTo(SchoolParents, { foreignKey: "parent_user_id" });
    SchoolUsers.belongsTo(SchoolTeachers, { foreignKey: "teacher_user_id" });

    SchoolTeacherSubjects.belongsTo(SchoolSubjects, {
      foreignKey: "subject_id",
    });
    SchoolTeacherSubjects.belongsTo(SchoolTeachers, {
      foreignKey: "teacher_id",
    });

    //arrange the tables in the correct order because of the foreign key

    await SchoolTeachers.sync();
    await Schools.sync();
    await SchoolSubjects.sync();
    await SchoolClasses.sync();
    await SchoolStudents.sync();
    await SchoolFees.sync();
    await SchoolParents.sync();
    await SchoolTeacherSubjects.sync();
    await SchoolUsers.sync();

    return res
      .status(200)
      .json({ message: "School Database and Table created successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createSchool };
