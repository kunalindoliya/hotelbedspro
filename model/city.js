const sequelize = require('../util/database');
const Sequelize = require('sequelize');

const City = sequelize.define('City',{
    id:{type:Sequelize.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:Sequelize.STRING, unique:true}
});
module.exports = City;
