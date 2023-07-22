const Sequelize = require('sequelize');
const { getSchoolDBConfigByName } = require('../config/database');

const initializeSchoolDB = async (schoolName) => {
    try {
        const schoolDBConfig = await getSchoolDBConfigByName(schoolName);
        const schoolDB = new Sequelize(schoolDBConfig.database, 'root', '', {
            host: 'localhost',
            dialect: 'mysql'
        });

        return schoolDB;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    initializeSchoolDB,
};
