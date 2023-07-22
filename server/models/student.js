const {DataTypes} = require('sequelize')


const  defineFeesModel = (newDB) => {
const Student = newDB.define("student",{
    student_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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
        type: DataTypes.UUID,
    },
},
{
    freezeTableName: true,
    timestamps: true,
});


return Student;
};


module.exports =  defineFeesModel;