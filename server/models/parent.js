const {DataTypes} = require('sequelize')
const Student = require('./student')

const defineParentModel = (newDB) => {
const parent = newDB.define("parent",{
    parent_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    student_id:{
        type: DataTypes.INTEGER,
    },
    name:{
        type: DataTypes.STRING,
    },
    date_of_birth:{
        type: DataTypes.DATE,
    },  
    contact:{
        type: DataTypes.INTEGER,
    },
    address:{
        type: DataTypes.STRING,
    },
},
{
    freezeTableName: true,
    timestamps: true,
});



return parent;
};

module.exports = defineParentModel;