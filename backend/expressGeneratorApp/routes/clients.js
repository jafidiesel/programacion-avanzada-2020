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


/* clients */
router
	.get('/', async function (req, res, next) {
		try {
			let clientsList = await getAllClients();
			if(!clientsList.length) {
				res.send( helper.buildResponse(400, 'not ok', { list: clientsList }));
			}else{
				res.send( helper.buildResponse(200, 'Client list retrieved', { list: clientsList }));
			}
		} catch (error) {
			next(error);
		}
	})
	.post('/', function (req, res, next) {
		if(!req.body || !req.body.name || !req.body.lastname || !req.body.idClient){
			res.send( helper.buildResponse(400, 'error', { message: "Missing fields" } ));
		}

		try {
			let result = saveClient(`${req.body.idClient}`, req.body);
			if(!result) {
				res.send( helper.buildResponse(400, 'not ok', result));
			}else{
				res.send( helper.buildResponse(200, 'Client created', result));
			}
		} catch (error) {
			next(error);
		}

	})
	.get('/:idClient', async function (req, res, next) {
		try {
			let result = await redisController.getClient(req.params.idClient);
			if(!result) {
				res.send( helper.buildResponse(400, 'not ok', result));
			}else{
				res.send( helper.buildResponse(200, 'Client retrieved', result));
			}
		} catch (error) {
			next(error);
		}
	})
	.put('/:idClient', async function (req, res, next) {
		if(!req.body){
			res.send( helper.buildResponse(400, 'error', { message: "Missing fields" } ));
		}

		try {
			let result = await putClient(req.params.idClient, req.body);
			if(!result) {
				res.send( helper.buildResponse(400, 'not ok', result));
			}else{
				res.send( helper.buildResponse(200, 'Client updated', result));
			}
		} catch (error) {
			next(error);
		}

	})
	.delete('/:idClient', async function (req, res, next) {
		try {
			let result = await deleteClient(req.params.idClient);
			if(!result) {
				res.send( helper.buildResponse(400, 'not ok', result));
			}else{
				res.send( helper.buildResponse(200, 'Client deleted', result));
			}
		} catch (error) {
			next(error);
		}
	})
	.get('/:idClient/contracts', async function (req, res, next) {
		try {
			let contractsList = await getAllContractsFromAClient(req.params.idClient);
			if(!contractsList.length) {
				res.send( helper.buildResponse(400, 'not ok', { list: contractsList }));
			}else{
				res.send( helper.buildResponse(200, 'Client contract list retrieved', { list: contractsList }));
			}
		} catch (error) {
			next(error);
		}
	})
	.post('/:idClient/contracts', function (req, res, next) {
		if(!req.body || !req.body.title || !req.body.description || !req.body.idContract){
			res.send( helper.buildResponse(400, 'error', { message: "Missing fields" } ));
		}

		try {
			let result = saveContract(req.params.idClient, req.body);
			if(!result) {
				res.send( helper.buildResponse(400, 'not ok', result));
			}else{
				res.send( helper.buildResponse(200, 'Client contract created', result));
			}
		} catch (error) {
			next(error);
		}

	})
	.get('/:idClient/contracts/:idContract', async function (req, res, next) {
		try {
			let result = await getContract(req.params.idClient, req.params.idContract);
			if(!result) {
				res.send( helper.buildResponse(400, 'not ok', result));
			}else{
				res.send( helper.buildResponse(200, 'Client contract retrieved', result));
			}
		} catch (error) {
			next(error);
		}
	})
	.put('/:idClient/contracts/:idContract', async function (req, res, next) {
		if(!req.body){
			res.send( helper.buildResponse(400, 'error', { message: "Missing fields" } ));
		}

		try {
			let result = await putContract(req.params.idClient, req.params.idContract, req.body);
			if(!result) {
				res.send( helper.buildResponse(400, 'not ok', result));
			}else{
				res.send( helper.buildResponse(200, 'Client contract updated', result));
			}
		} catch (error) {
			next(error);
		}

	})
	.delete('/:idClient/contracts/:idContract', async function (req, res, next) {
		try {
			let result = await deleteContract(req.params.idClient, req.params.idContract);
			if(!result) {
				res.send( helper.buildResponse(400, 'not ok', result));
			}else{
				res.send( helper.buildResponse(200, 'Client contract deleted', result));
			}
		} catch (error) {
			next(error);
		}
	})


module.exports = router;
