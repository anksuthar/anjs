var Sequelize = require('sequelize');
var sequelize = new Sequelize('anjs', 'root', '', 
{
	define: {
		timestamps: true // created and updated column in db tables
	},
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

module.exports = sequelize;