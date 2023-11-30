// define users models in sequelize
const Sequelize = require('sequelize');
const sequelize = require('../utils/dbConnection');

const Users = sequelize.define('users', {
    name: {
        type: Sequelize.STRING,
    },
    emailId: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
});

module.exports = Users;