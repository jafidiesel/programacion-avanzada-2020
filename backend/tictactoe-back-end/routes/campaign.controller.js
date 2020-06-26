let express = require('express');
let router = express.Router();
let campaignService = require('../services/campaign.service')
let buildResponse = require('../helpers/common').buildResponse

/* /campaign */
router
    .post('/new', async function(req,res,next){
        try {
            
            let result = await campaignService.newCampaign(req.body);
            
            if(result && result.statusCode == 400){
                res.statusCode = result.statusCode;
                res.send( buildResponse(result.statusCode, result.message, result.data));
            }else if(result && result.statusCode == 200){
                res.send( buildResponse(result.statusCode, result.message, result.data));
            }else{
                next();
            }
        } catch (error) {
            next(error)
        }
    })
    .post('/:hash/join', async function(req, res, next) {
        // campaignService.join(req.body)
        try {
            let result = await campaignService.joinCampaign(req.params.hash,req.body);
            
            if(result && result.statusCode == 400){
                res.statusCode = result.statusCode;
                res.send( buildResponse(result.statusCode, result.message, result.data));
            }else if(result && result.statusCode == 200){
                res.send( buildResponse(result.statusCode, result.message, result.data));
            }else{
                next();
            }
        } catch (error) {
            next(error)
        }
    })
    .get('/:hash/status', async function(req, res, next) {
        //  get campaign status
        try {
            let result = await campaignService.getCampaignStatus(req.params.hash);
            
            if(result && result.statusCode == 400){
                res.statusCode = result.statusCode;
                res.send( buildResponse(result.statusCode, result.message, result.data));
            }else if(result && result.statusCode == 200){
                res.send( buildResponse(result.statusCode, result.message, result.data));
            }else{
                next();
            }
        } catch (error) {
            next(error);
        }
    })
    .get('/:hash/history-board', function(req, res, next) {
        res.status = 500;
        res.send(buildResponse(500, "Endpoint not implemented. It's optional yet.",{}));
    })
    .post('/:hash/cell/:cell', async function(req, res, next) {
        //  get campaign status
        try {
            let result = await campaignService.placeCell(req.params.hash, req.params.cell, req.body);
            
            if(result && result.statusCode == 400){
                res.statusCode = result.statusCode;
                res.send( buildResponse(result.statusCode, result.message, result.data));
            }else if(result && result.statusCode == 200){
                res.send( buildResponse(result.statusCode, result.message,result.data));
            }else{
                next();
            }
        } catch (error) {
            next(error);
        }
    })

module.exports = router;
