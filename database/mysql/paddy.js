var db = require('./connection');
const uuidv4 = require('uuid/v4');


// login
exports.getAllPaddyCollection = function (req, cb) {
    var query = `select f.full_name as farmer_name,p.name as paddy_name,pc.* from paddy_collection as pc
    JOIN farmers as f ON pc.farmerID=f.id
    JOIN paddy_type AS p ON p.id = pc.paddyId`;

    db(query, null, null, (err, result, cbData) => {
        if (err) return cb(true, err, cbData);

        return cb(false, result, cbData);

    });
};
// paddy_type



// registration
exports.addCollection = function (obj, cb) {
    console.log("hello am I working");
    console.log(obj);
    var query = `INSERT into paddy_collection (paddyId,farmerID,quantity,price) value('${obj.paddyId}','${obj.farmerID}','${obj.quantity}','${obj.price}')`


    db(query, null, obj, (err, result, cbData) => {
        if (err) return cb(true, err);

        return cb(false, result);

    });
};
// delete User By Emp Id
exports.deleteCollectionById = function (id, cb) {
    var queryString = "Delete from paddy_collection where id = " + id;

    db(queryString, null, null, (err, result, cbData) => {
        if (err) return cb(true, err, cbData);
        return cb(false, result, cbData);
    });
};
exports.getAllPaddyType = function (req, cb) {
    var query = `select * from paddy_type `;

    db(query, null, null, (err, result, cbData) => {
        if (err) return cb(true, err, cbData);

        return cb(false, result, cbData);

    });
};
exports.addPaddyType = function (obj, cb) {
    console.log("hello am I working");
    console.log(obj);
    var query = `INSERT into paddy_type (name,price,description) value('${obj.name}','${obj.price}','${obj.description}')`


    db(query, null, obj, (err, result, cbData) => {
        if (err) return cb(true, err);

        return cb(false, result);

    });
};

exports.deletePaddyTypeById = function (id, cb) {
    var queryString = "Delete from paddy_type where id = " + id;

    db(queryString, null, null, (err, result, cbData) => {
        if (err) return cb(true, err, cbData);
        return cb(false, result, cbData);
    });
};

// // get All User



// // get User By Emp Id
// exports.getUserByEmpId = function (id, cb) {
//     var queryString = "SELECT * from user where employee_id = " + id;

//     db(queryString, null, null, (err, result, cbData) => {
//         if (err) return cb(true, err, cbData);
//         return cb(false, result, cbData);
//     });
// };


















