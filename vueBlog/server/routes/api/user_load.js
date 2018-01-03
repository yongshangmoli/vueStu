var route = require('./../helper').route;
var userLoad = require('../../controller/user_load');
module.exports = [    
  route('/sign_in', 'get', [], userLoad.signInAction)
];