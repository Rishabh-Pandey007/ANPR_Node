const Sequelize = require('sequelize');

const sequelize = new Sequelize('anpr_logs', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    logging:false
  });                       
                                
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database: ' + err);
    })

module.exports = sequelize;