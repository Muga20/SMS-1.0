const { DataTypes } = require("sequelize");

const defineSchoolAdminModel = (newDB) => {
    const SchoolAdmin = newDB.define(
      "schoolAdmin",
      {
        admin_id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        reg_number: {
          type: DataTypes.STRING,
        },
        name: {
          type: DataTypes.STRING,
        },
        profile_picture: {
          type: DataTypes.STRING,
        },
        date_of_birth: {
          type: DataTypes.DATE,
        },
        contact: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
        },
        address: {
          type: DataTypes.STRING,
        },
      },
      {
        freezeTableName: true,
        timestamps: true,
      }
    );
  
    return SchoolAdmin;
  };

module.exports = defineSchoolAdminModel;
