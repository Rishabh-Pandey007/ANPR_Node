// define logs models in sequelize

const Sequelize = require('sequelize');
const sequelize = require('../utils/dbConnection');

const Logs = sequelize.define('logs', {

    eventTimeStamp: Sequelize.DATE,
    eventDescription: Sequelize.STRING,
    vehicleRegistration: Sequelize.STRING,
    vehicleImage: Sequelize.STRING,
    speed: Sequelize.DOUBLE,

});

module.exports = Logs;