const {DataTypes} = require('sequelize')


const defineSubjectModel = (newDB) => {
const subject = newDB.define("subject",{
    subject_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    subject_name:{
        type: DataTypes.STRING,
    },
    teacher_id:{
        type: DataTypes.UUID,
    },
},
{
    freezeTableName: true,
    timestamps: true,
});



return subject;
};

module.exports = defineSubjectModel;