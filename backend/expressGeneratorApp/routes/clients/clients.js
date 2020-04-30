var express = require('express');
var router = express.Router();

/* GET clients listing. */
router
	.get('/', function(req, res, next) {
		res.send('GET clients');
	})
	.post('/', function(req,res,next){
		res.send('POST client');
	})
	.get('/:idClient', function(req,res,next){
		res.send(`GET client with idClient = ${req.params.idClient}`)
	})
	.put('/:idClient',function(req,res,next){
        res.send(`PUT client with idClient = ${req.params.idClient}` )
    })
    .delete('/:idClient',function(req,res,next){
        res.send(`DELETE client with idClient = ${req.params.idClient}`)
    })



module.exports = router;

/*
curl 127.0.0.1:3000/clients 
curl 127.0.0.1:3000/clients/NUMERO 
curl --data "param1=value1&param2=value2" 127.0.0.1:3000/clients -X POST 
curl --data "param2=value223" 127.0.0.1:3000/clients/NUMERO -X PUT 
curl 127.0.0.1:3000/clients/NUMERO -X DELETE */