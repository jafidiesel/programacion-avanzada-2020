var express = require('express');
var router = express.Router();

/* GET contracts listing. */
router
	.get('/', function(req, res, next) {
		res.send(`GET contracts of client with idClient = ${req.params.idClient}`);
	})
	.post('/', function(req,res,next){
		res.send('POST contract' + JSON.stringify(req.body));
	})
	.get('/:idContract', function(req,res,next){
		res.send(`GET contract with id ${req.params.idContract} client with idClient = ${req.params.idClient}`)
	})
	.put('/:idContract',function(req,res,next){
        res.send(`PUT contract with id ${req.params.idContract} client with idClient = ${req.params.idClient} ${JSON.stringify(req.body)}` )
    })
    .delete('/:idContract',function(req,res,next){
        res.send(`DELETE contract with id ${req.params.idContract} client with idClient = ${req.params.idClient}`)
    })

module.exports = router;

/*
curl 127.0.0.1:3005/clients/23/contracts -X GET 
curl 127.0.0.1:3005/clients/23/contracts/50 -X GET 
curl 127.0.0.1:3005/clients/23/contracts -X POST 
curl 127.0.0.1:3005/clients/23/contracts/50 -X PUT 
curl 127.0.0.1:3005/clients/23/contracts/50 -X DELETE*/