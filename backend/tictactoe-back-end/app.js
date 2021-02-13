var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var campaignController = require('./routes/campaign.controller');

let handleError = require('./helpers/error').handleError

var app = express();


app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "POST");
  next();
});


app.use('/', indexRouter);
app.use('/campaign', campaignController);


app.use((err, req, res, next) => {
    //err.isServer
    console.log("handleError");
    
    let result = handleError(err, res) ;
    result.send(result.body)
    next()
  });

const redis = require("redis");
const client = redis.createClient();

client.on("error", function(error) {
    console.error(error);
});


module.exports = app;
