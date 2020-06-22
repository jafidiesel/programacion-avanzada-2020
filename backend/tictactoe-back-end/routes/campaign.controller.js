let express = require('express');
let router = express.Router();
let campaignService = require('../services/campaign.service')
let buildResponse = require('../helpers/common').buildResponse

/* /campaign */
router
    .post('/new', async function(req,res,next){
        try {
            console.log("/new");
            
            let result = await campaignService.newCampaign(req.body);

            console.log("result ->",result);
            
            if(!result){
                res.send( buildResponse(400, "Error",{}))
            }else{
                res.send( buildResponse(200, "Success",result))
            }
        } catch (error) {
            next(error)
        }
    })
    .post('/:hash/join', function(req, res, next) {
        // campaignService.join(req.body)
        res.send(req.params.hash);
    })
    .get('/:hash/status', function(req, res, next) {
        res.send(req.params.hash);
    })
    .get('/:hash/score', function(req, res, next) {
        res.send(req.params.hash);
    })
    .get('/:hash/history-board', function(req, res, next) {
        res.send(req.params.hash);
    })
    .post('/:hash/position/:cell', function(req, res, next) {
        res.send(req.params.cell);
    })
    .post('/:hash/join', function(req, res, next) {
        res.send(req.params.hash);
    })

module.exports = router;
