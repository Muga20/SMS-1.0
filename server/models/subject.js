const {DataTypes} = require('sequelize')
const Teacher = require('./teacher')

const defineSubjectModel = (newDB) => {
const subject = newDB.define("subject",{
    subject_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    subject_name:{
        type: DataTypes.STRING,
    },
    teacher_id:{
        type: DataTypes.INTEGER,
    },
},
{
    freezeTableName: true,
    timestamps: true,
});



return subject;
};

module.exports = defineSubjectModel;