const {DataTypes} = require('sequelize')
const Teacher = require('./teacher')

const defineClassesModel = (newDB) => {

 const classes = newDB.define("classes",{

    class_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    class_name:{
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

return classes;

};

module.exports = defineClassesModel;

