const {DataTypes} = require('sequelize')

const defineFeesModel = (newDB) => {
const Fees = newDB.define("fees",{
    fees_id:{
      type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    student_id:{
      type: DataTypes.UUID,
    },
    Annual_fee:{
      type: DataTypes.INTEGER,
    },
    term_one:{
      type: DataTypes.INTEGER,
    },  
    term_two:{
      type: DataTypes.INTEGER,
    },
    term_Three:{
      type: DataTypes.INTEGER,
    },
    balance:{
      type: DataTypes.INTEGER,
    },
},
{
    freezeTableName: true,
    timestamps: true,
});

return Fees
};

module.exports =  defineFeesModel;