'use strict';
global.express = require('express');
var app = express();
var http = require('http');
var socket = require('socket.io');

var port = process.env.PORT || 8000;

process.env.NODE_ENV = process.env.NODE_ENV || 'development'; // check the envirment

global.config = require('./config/config'); //all the configurations
global.appFun = require('./app/app_function');
global.globalJs = require('./config/global'); // global variables
global.mail = require('./app/email/sendMail');

const server = http.Server(app);                           
const io = socket(server);

require('./middleware/express')(app); // all the rest api

// var enu = require('./api/enums/app.enum')?

server.listen(port, function () { // server running status
	console.info('server is running on ' + port);
});








// global.express = require('express')
// var https = require('https');
// var app = express();
// var port = process.env.PORT || 8081;
//
// process.env.NODE_ENV = process.env.NODE_ENV || 'development'; // check the environment
//
//
// global.config = require('./config/config'); //all the configurations
// global.appFun = require('./app/app_function');
// global.globalJs = require('./config/global'); // global variables
// global.mail = require('./app/email/sendMail');
//
// require('./middleware/express')(app); //
//
// app.listen(port, function() {
// 	console.log('app running ', port)
// });
