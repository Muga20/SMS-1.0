const {DataTypes} = require('sequelize')

const defineUserModel = (newDB) => {
const User = newDB.define("user",{

    user_id:{
        type: DataTypes.INTEGER,
    },

    username:{
        type: DataTypes.STRING,
    },

    password:{
        type: DataTypes.STRING,
    },
      
    role:{
        type: DataTypes.STRING,
    },
},
{
    freezeTableName: true,
    timestamps: true,
});

return User;
};


module.exports = defineUserModel;



