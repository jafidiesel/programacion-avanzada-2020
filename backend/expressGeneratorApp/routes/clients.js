var express = require('express');
var router = express.Router();

/* GET clients listing. */
router
	.get('/', function(req, res, next) {
		res.send('GET clients');
	})
	.post('/', function(req,res,next){
		console.log(req.body);
		res.send('POST client'+JSON.stringify(req.body));
	})
	.get('/:idClient', function(req,res,next){
		res.send(`GET client with idClient = ${req.params.idClient}`)
	})
	.put('/:idClient',function(req,res,next){
        res.send(`PUT client with idClient = ${req.params.idClient} ${JSON.stringify(req.body)}` )
    })
    .delete('/:idClient',function(req,res,next){
        res.send(`DELETE client with idClient = ${req.params.idClient}`)
	})
	.get('/:idClient/contracts', function(req,res,next){
		res.send(`GET contracts of client with idClient = ${req.params.idClient}`);
	})
	.post('/:idClient/contracts',function(req,res,next){
        res.send('POST contract' + JSON.stringify(req.body));
	})
	.get('/:idClient/contracts/:idContract', function(req,res,next){
		res.send(`GET contract with id ${req.params.idContract} client with idClient = ${req.params.idClient}`)
	})
	.put('/:idClient/contracts/:idContract',function(req,res,next){
        res.send(`PUT contract with id ${req.params.idContract} client with idClient = ${req.params.idClient} ${JSON.stringify(req.body)}` )
    })
    .delete('/:idClient/contracts/:idContract',function(req,res,next){
        res.send(`DELETE contract with id ${req.params.idContract} client with idClient = ${req.params.idClient}`)
	})
    


module.exports = router;
