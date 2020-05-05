var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var clientsRouter = require('./routes/clients');

const { handleError } = require('./helpers/error');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/clients', clientsRouter);
app.use('/clients/:idClient/contracts', clientsRouter);

app.use((err, req, res, next)=>{
    handleError(err, res);
});

module.exports = app;
