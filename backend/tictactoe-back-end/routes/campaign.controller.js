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
    .post('/:hash/join', async function(req, res, next) {
        // campaignService.join(req.body)
        try {
            let result = await campaignService.joinCampaign(req.params.hash,req.body)
            if(!result) {
                res.send( msgResponse.buildResponse(400, 'Error', result))
            }else{
                res.send( msgResponse.buildResponse(200, 'Ok', result))
            }
            next()
        } catch (error) {
            next(error)
        }
        //res.send(req.params.hash);
    })
    .get('/:hash/status', async function(req, res, next) {
        //  get campaign status
        try {
            let result = await campaignService.getCampaignStatus(req.params.hash);
            
            if(!result){
                res.send( buildResponse(400, "Error",{}));
            }else{
                res.send( buildResponse(200, "Success",result));
            }
        } catch (error) {
            next(error);
        }
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
