const { DataTypes } = require("sequelize");

const defineFeesModel = (newDB) => {
  const Student = newDB.define(
    "student",
    {
      student_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      student_adm: {
        type: DataTypes.STRING,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      UPI: {
        type: DataTypes.STRING,
        unique: true,
      },
      index_number: {
        type: DataTypes.STRING,
      },
      kcpe_results: {
        type: DataTypes.STRING,
      },
      date_of_birth: {
        type: DataTypes.DATE,
      },
      gender: {
        type: DataTypes.STRING,
      },
      profile_picture: {
        type: DataTypes.STRING,
      },
      class_id: {
        type: DataTypes.UUID,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );

  return Student;
};

module.exports = defineFeesModel;
