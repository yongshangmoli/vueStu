// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

var express = require('express');
var helper = require('./helper');
var routeMaps = require('./app');
var router = express.Router();
module.exports = helper.generateRoute(router, routeMaps);