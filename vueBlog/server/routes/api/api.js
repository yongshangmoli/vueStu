var route = require('./../helper').route;
var userLoadRoute = require('./user_load');

module.exports = [
  route('/api', '', userLoadRoute),
];
