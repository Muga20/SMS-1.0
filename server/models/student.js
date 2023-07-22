const {DataTypes} = require('sequelize')
const Class = require('./class')

const  defineFeesModel = (newDB) => {
const Student = newDB.define("student",{
    student_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    student_adm:{
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
    class_id:{
        type: DataTypes.INTEGER,
    },
},
{
    freezeTableName: true,
    timestamps: true,
});


return Student;
};


module.exports =  defineFeesModel;