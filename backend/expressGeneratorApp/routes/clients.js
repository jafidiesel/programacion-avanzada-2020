var express = require('express');
var router = express.Router();
const helper = require('../helpers/common');

/* GET clients listing. */
router
	.get('/', function (req, res, next) {
		res.send(helper.buildResponse(200, 'all ok', { name: "juan" }));
	})
	.post('/', function (req, res, next) {
		res.send(helper.buildResponse(200, 'client created', req.body));
	})
	.get('/:idClient', function (req, res, next) {
		res.send(helper.buildResponse(200, 'all ok', { idClient: `${req.params.idClient}` }))
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
