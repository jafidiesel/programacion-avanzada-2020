var express = require('express');
var router = express.Router();

const helper = require('../helpers/common');

let redisController = require('../db/redisController');

let getAllContracts = redisController.getAllContracts;

/* GET contracts listing. */
router
	.get('/', async function (req, res, next) {
		let contractsList = await getAllContracts();
		if(!contractsList.length) {
			res.send( helper.buildResponse(400, 'not ok', { list: contractsList }));
		}else{
			res.send( helper.buildResponse(200, 'all ok', { list: contractsList }));
		}
	})

module.exports = router;
