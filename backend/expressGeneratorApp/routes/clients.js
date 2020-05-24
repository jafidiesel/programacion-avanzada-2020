let express = require('express');
let router = express.Router();

const helper = require('../helpers/common');

let redisController = require('../db/redisController');
let redisClient = redisController.redisClient;
let saveClient = redisController.saveClient;
let getAllClients = redisController.getAllClients;


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
		saveClient(`${req.body.idClient}`, req.body)
		res.send(helper.buildResponse(200, 'client created', req.body));
	})
	.get('/:idClient', async function (req, res, next) {
		let result = await redisController.getClient(req.params.idClient)
		if(!result) {
			res.send( helper.buildResponse(400, 'not ok', result))
		}else{
			res.send( helper.buildResponse(200, 'all ok', result))
		}
	})
	.put('/:idClient', function (req, res, next) {
		res.send(helper.buildResponse(200, 'client updated', req.body))
	})
	.delete('/:idClient', function (req, res, next) {
		res.send(helper.buildResponse(200, 'client deleted', {}))
	})
	.get('/:idClient/contracts', function (req, res, next) {
		res.send(helper.buildResponse(200, 'all ok', { idClient: `${req.params.idClient}`}))
	})
	.post('/:idClient/contracts', function (req, res, next) {
		res.send(helper.buildResponse(200, 'contract created', req.body))
	})
	.get('/:idClient/contracts/:idContract', function (req, res, next) {
		res.send(helper.buildResponse(200, 'all ok', { idContract: `${req.params.idContract}`}))
	})
	.put('/:idClient/contracts/:idContract', function (req, res, next) {
		res.send(helper.buildResponse(200, 'contract updated', req.body ))
	})
	.delete('/:idClient/contracts/:idContract', function (req, res, next) {
		res.send(helper.buildResponse(200, 'contract deleted', {} ))
	})


module.exports = router;
