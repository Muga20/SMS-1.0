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

      school_admin_user: {
        type: DataTypes.UUID,
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
        unique: true,
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
