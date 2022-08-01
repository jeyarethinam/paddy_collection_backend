var db = require('./connection');
const uuidv4 = require('uuid/v4');






// get User By Emp Id
exports.getCollectionCenterByID = function (id, cb) {
    var queryString = "SELECT * from collection_center where id = " + id;

    db(queryString, null, null, (err, result, cbData) => {
        if (err) return cb(true, err, cbData);
        return cb(false, result, cbData);
    });
};