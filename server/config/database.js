const Sequelize = require('sequelize');

const config = {
  development: {
    username: 'root',
    password: '',
    host: 'localhost',
    dialect: 'mysql'
  }
};

const sequelize = new Sequelize(config.development);

const queryDatabases = async () => {
  try {
    const results = await sequelize.query("SHOW DATABASES");
    const databaseNames = results[0].map(row => row.Database);
    return databaseNames;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Error querying databases');
  }
};


const getSchoolDBConfigByName = async (schoolName) => {
  // Your logic to fetch the school database configuration based on the schoolName
  // ...

  const schoolDBName = `${schoolName.toLowerCase()}`;
  const schoolDBConfig = {
    database: schoolDBName,
    username: 'root',
    password: '',
    host: 'localhost',
    dialect: 'mysql',
  };

  return schoolDBConfig;
};


module.exports ={ 
  queryDatabases,
  getSchoolDBConfigByName 
}