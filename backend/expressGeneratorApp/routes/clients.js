let express = require('express');
let router = express.Router();

const helper = require('../helpers/common');

let redisController = require('../db/redisController');

let saveClient = redisController.saveClient;
let getAllClients = redisController.getAllClients;
let deleteClient = redisController.deleteClient;
let putClient = redisController.putClient;

let getAllContractsFromAClient = redisController.getAllContractsFromAClient;
let saveContract = redisController.saveContract;
let getContract = redisController.getContract;
let putContract = redisController.putContract;
let deleteContract = redisController.deleteContract;


/* GET clients listing. */
router
	.get('/', async function (req, res, next) {
		let clientsList = await getAllClients();
		if(!clientsList.length) {
			res.send( helper.buildResponse(400, 'not ok', { list: clientsList }));
		}else{
			res.send( helper.buildResponse(200, 'all ok', { list: clientsList }));
		}
	})
	.post('/', function (req, res, next) {
		let result = saveClient(`${req.body.idClient}`, req.body);
		if(!result) {
			res.send( helper.buildResponse(400, 'not ok', result));
		}else{
			res.send( helper.buildResponse(200, 'all ok', result));
		}
	})
	.get('/:idClient', async function (req, res, next) {
		let result = await redisController.getClient(req.params.idClient);
		if(!result) {
			res.send( helper.buildResponse(400, 'not ok', result));
		}else{
			res.send( helper.buildResponse(200, 'all ok', result));
		}
	})
	.put('/:idClient', async function (req, res, next) {
		let result = await putClient(`${req.params.idClient}`, req.body);;
		if(!result) {
			res.send( helper.buildResponse(400, 'not ok', result));
		}else{
			res.send( helper.buildResponse(200, 'all ok', result));
		}
	})
	.delete('/:idClient', async function (req, res, next) {
		let result = await deleteClient(req.params.idClient);
		if(!result) {
			res.send( helper.buildResponse(400, 'not ok', result));
		}else{
			res.send( helper.buildResponse(200, 'all ok', result));
		}
	})
	.get('/:idClient/contracts', async function (req, res, next) {
		let contractsList = await getAllContractsFromAClient(req.params.idClient);
		if(!contractsList.length) {
			res.send( helper.buildResponse(400, 'not ok', { list: contractsList }));
		}else{
			res.send( helper.buildResponse(200, 'all ok', { list: contractsList }));
		}
	})
	.post('/:idClient/contracts', function (req, res, next) {
		let result = saveContract(req.params.idClient, req.body);
		if(!result) {
			res.send( helper.buildResponse(400, 'not ok', result));
		}else{
			res.send( helper.buildResponse(200, 'all ok', result));
		}
	})
	.get('/:idClient/contracts/:idContract', async function (req, res, next) {
		let result = await getContract(req.params.idClient, req.params.idContract);
		if(!result) {
			res.send( helper.buildResponse(400, 'not ok', result));
		}else{
			res.send( helper.buildResponse(200, 'all ok', result));
		}
	})
	.put('/:idClient/contracts/:idContract', async function (req, res, next) {
		let result = await putContract(req.params.idClient, req.params.idContract, req.body);
		if(!result) {
			res.send( helper.buildResponse(400, 'not ok', result));
		}else{
			res.send( helper.buildResponse(200, 'all ok', result));
		}
	})
	.delete('/:idClient/contracts/:idContract', async function (req, res, next) {
		let result = await deleteContract(req.params.idClient, req.params.idContract);
		if(!result) {
			res.send( helper.buildResponse(400, 'not ok', result));
		}else{
			res.send( helper.buildResponse(200, 'all ok', result));
		}
	})


module.exports = router;
