const {DataTypes} = require('sequelize')


const defineFeesModel = (newDB) => {
const Fees = newDB.define("fees",{
    fees_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    student_id:{
      type: DataTypes.INTEGER,
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