const sequelize = require('../util/database');
const Sequelize = require('sequelize');

const User = sequelize.define('User',{
    id: {type: Sequelize.INTEGER, autoIncrement:true, primaryKey:true},
    username: {type: Sequelize.STRING, unique:true},
    email: {type: Sequelize.STRING, unique: true},
    password: Sequelize.STRING
});
module.exports = User;