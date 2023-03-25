const {Sequelize, DataTypes} = require('sequelize');
const databaseConnectionString = require('../databaseConnectionSequelize');
const sequelize = new Sequelize(databaseConnectionString);
const petModel = sequelize.define('pet',
{pet_id: {type: DataTypes.INTEGER, autoIncrement: true,
primaryKey: true},
web_user_id: {type: DataTypes.INTEGER, allowNull: false},
name: {type: DataTypes.STRING, allowNull: false},
pet_type_id: {type: DataTypes.INTEGER, allowNull: false, foreignKey: true}
},
{tableName: 'pet',
timestamps: false,
singular: 'pet',
plural: 'pet'}
);
module.exports = petModel;