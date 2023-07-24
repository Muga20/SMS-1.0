const {DataTypes} = require('sequelize')


const defineParentModel = (newDB) => {
const parent = newDB.define("parent",{
    parent_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    student_id:{
        type: DataTypes.UUID,
    },
    name:{
        type: DataTypes.STRING,
    },
    profile_picture:{
        type: DataTypes.STRING,
    },
    date_of_birth:{
        type: DataTypes.DATE,
    },  
    contact:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
        unique: true,
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