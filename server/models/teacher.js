const {DataTypes} = require('sequelize')

const defineTeacherModel = (newDB) => {
const teacher = newDB.define("teacher",{
    teacher_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    teacher_reg_no:{
        type: DataTypes.STRING,
    },
    name:{
        type: DataTypes.STRING,
    },
    date_of_birth:{
        type: DataTypes.DATE,
    },  
    gender:{
        type: DataTypes.STRING,
    },
    phone:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    },
    address:{
        type: DataTypes.STRING,
    },
},
{
    freezeTableName: true,
    timestamps: true,
});

return teacher;
};

module.exports = defineTeacherModel;




