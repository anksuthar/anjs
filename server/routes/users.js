var express = require('express');
var router = express.Router();
var UserModel = require('../model/user');
var baseModel = require('../model/base');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

/* GET users listing. */
router.get('/', async (req, res, next) => {
	let response;
	let params = req.query;
	let offset = params.offset ? parseInt(params.offset) : 0;
	let limit = params.limit ? parseInt(params.limit) : 10;
	var search = {  status: { [Op.notLike]: 'deleted'} };
	response = await  baseModel.findAndCountAll(UserModel, search, offset, limit);
	res.status(200).send(response);
});

router.get('/create', async (req, res, next) => {
	let createResponse;
	try {
		createResponse = await  baseModel.createTabels();
	} catch(err) {
		res.send('respond with a error' + JSON.stringify(err));
		return;
	}
	let  data = {
		firstName: 'Ankita',
		lastName: 'Suthar',
		email: 'test1@gmail.com',
		password: 'password',
		status: 'inactive'
	};
	let insetedRespons;
	try {
		insetedRespons = await  baseModel.insert(UserModel,data);
	} catch(err) {
		res.status(500).send('respond with a error' + JSON.stringify(err));
		return;
	}
	res.status(200).send('respond with a resource' + insetedRespons.id + 'firstName = '+ insetedRespons.firstName);
});

module.exports = router;
