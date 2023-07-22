const {DataTypes} = require('sequelize')


const defineTeacherSubjectModel = (newDB) => {
const teacherSubject = newDB.define("teacherSubject",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    teacher_id:{
        type: DataTypes.INTEGER,
    },
    subject_id:{
        type: DataTypes.INTEGER,
    },
},
{
    freezeTableName: true,
    timestamps: true,
});



return teacherSubject;
};

module.exports = defineTeacherSubjectModel;



