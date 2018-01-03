var express = require('express');
var helper = require('./helper');
var routeMaps = require('./app');
var router = express.Router();
module.exports = helper.generateRoute(router, routeMaps);