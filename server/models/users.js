const { DataTypes } = require("sequelize");

const defineUserModel = (newDB) => {
  const User = newDB.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      student_user_id: {
        type: DataTypes.UUID,
      },

      parent_user_id: {
        type: DataTypes.UUID,
      },

      teacher_user_id: {
        type: DataTypes.UUID,
      },

      username: {
        type: DataTypes.STRING,
      },

      password: {
        type: DataTypes.STRING,
      },

      role: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );

  return User;
};

module.exports = defineUserModel;
