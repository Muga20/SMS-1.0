const {DataTypes} = require('sequelize')

const defineSchoolModel = (newDB) => {
const School = newDB.define("school",{
    school_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    School_name:{
        type: DataTypes.STRING,
    },
    school_address:{
        type: DataTypes.STRING,
    },
    school_contact_number:{
        type: DataTypes.INTEGER,
    },
    school_email:{
        type: DataTypes.STRING,
        unique: true,
    },
    logo:{
        type: DataTypes.STRING,
    },  
},
{
    freezeTableName: true,
    timestamps: true,
}
);

return School;
};

module.exports = defineSchoolModel;