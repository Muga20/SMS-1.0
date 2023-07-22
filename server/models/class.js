const { DataTypes } = require("sequelize");

const defineClassesModel = (newDB) => {
  const Classes = newDB.define(
    "classes",
    {
      class_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      class_name: {
        type: DataTypes.STRING,
      },

      teacher_id: {
        type: DataTypes.UUID,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );

  return Classes;
};

module.exports = defineClassesModel;
