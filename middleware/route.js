
'use strict';
module.exports = function (app) {
    var auth = require('./validateRequest');
    // app.all('/api/v1/*', [require('./middlewares/validateRequest')]);
    app.use(config.baseUrl + '/user', require('../api/user/index')); //user related Api    
    app.use(config.baseUrl + '/dashboard', require('../api/dashboard/index')); //dashbord related Api   
    app.use(config.baseUrl + '/family', require('../api/family/index')); //dashbord related Api   
    app.use(config.baseUrl + '/farmer', require('../api/farmer/index')); //farmer related Api   
    app.use(config.baseUrl + '/paddy', require('../api/paddy/index')); //paddy related Api   
    app.use(config.baseUrl + '/collection_center', require('../api/collection_center/index')); //collection_center related Api   
}
