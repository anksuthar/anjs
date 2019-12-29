var Sequelize = require('sequelize');
const Model = Sequelize.Model;
var sequelize = require('../config/sequelize');

class User extends Model {}
User.init(
	{
		firstName: {
			type: Sequelize.STRING,
			field: 'first_name',
			allowNull: false
		},
		lastName: {
			type: Sequelize.STRING,
			field: 'last_name',
			allowNull: false
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			isEmail: true, 
			unique: true
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false			
		},
		status: {
			type: Sequelize.ENUM('active', 'inactive', 'deleted'),
			allowNull: false			
		}
	},
	{
		sequelize,
		modelName: 'user'
	}
);

module.exports = User;