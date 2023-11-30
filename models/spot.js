// define spot models in sequelize

const Sequelize = require('sequelize');
const sequelize = require('../utils/dbConnection');

const Spot = sequelize.define('spot', {
    name: Sequelize.STRING,
    code: Sequelize.STRING,
    latitude: Sequelize.DOUBLE,
    longitude: Sequelize.DOUBLE,
    status: Sequelize.BOOLEAN,
});

module.exports = Spot;