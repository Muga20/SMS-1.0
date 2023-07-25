const {DataTypes} = require('sequelize');

const defineDepartmentModel = (newDB) => {
    const Department = newDB.define(
        'department',
        {
            department_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            department_name: {
                type: DataTypes.STRING,
            },
            department_head: {
                type: DataTypes.UUID,
            },
        },
        {
            freezeTableName: true,
            timestamps: true,
        }
    );

    return Department;
};

module.exports = defineDepartmentModel;