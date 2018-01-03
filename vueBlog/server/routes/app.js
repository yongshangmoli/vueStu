// 可添加认证等
var route = require('./helper').route;
var env = process.env.NODE_ENV;
var appRoute = require('./api/api');
var routeList = [];

function handler(req, res, next){
  let action = req.query.action;
  res.render('index', {
    env: req.config.urlPrefix,
    devPath: util.getDevPath(req)
  });
}

// if (env === 'test') {
//   routeList.push(route('/t/:oid(\\w+)', 'get', appRoute, handler));
// } else if (env === 'pre') {
//   routeList.push(route('/p/:oid(\\w+)', 'get', appRoute, handler));
// } else if (env === 'development') {
//   routeList.push(route('/d/:oid(\\w+)', 'get', appRoute, handler));
// } else {
//   routeList.push(route('/:oid(\\w+)', 'get', appRoute, handler));
// }
routeList.push(route('/', 'get', appRoute, handler));

module.exports = routeList;