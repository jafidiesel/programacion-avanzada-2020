let express = require('express');
let router = express.Router();
let campaignService = require('../services/campaign.service')


/* /campaign */
router
    .post('/new', function(req,res,next){
        res.send(campaignService.newCampaign());
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
