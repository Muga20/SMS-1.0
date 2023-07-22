const {DataTypes} = require('sequelize')


const defineTeacherSubjectModel = (newDB) => {
const teacherSubject = newDB.define("teacherSubject",{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    teacher_id:{
        type: DataTypes.UUID,
    },
    subject_id:{
        type: DataTypes.UUID,
    },
},
{
    freezeTableName: true,
    timestamps: true,
});



return teacherSubject;
};

module.exports = defineTeacherSubjectModel;



