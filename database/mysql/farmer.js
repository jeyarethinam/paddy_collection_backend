var db = require('./connection');
const uuidv4 = require('uuid/v4');


// login
exports.getAllFarmer = function (req, cb) {
    var query = `select * from farmers `;

    db(query, null, null, (err, result, cbData) => {
        if (err) return cb(true, err, cbData);

        return cb(false, result, cbData);

    });
};





// registration
exports.registerFarmer = function (obj, cb) {
    var query = `INSERT into farmers (full_name,address,contact,acc_no,bank,nic) value('${obj.full_name}','${obj.address}','${obj.contact}','${obj.acc_no}','${obj.bank}','${obj.nic}')`


    db(query, null, obj, (err, result, cbData) => {
        if (err) return cb(true, err);

        return cb(false, result);

    });
};






// delete User By Emp Id
exports.deleteFarmerById = function (id, cb) {
    var queryString = "Delete from farmers where id = " + id;

    db(queryString, null, null, (err, result, cbData) => {
        if (err) return cb(true, err, cbData);
        return cb(false, result, cbData);
    });
};




// changePassword
exports.changePassword = function (email, password, cb) {
    var queryString = `UPDATE user SET password ='${password}', active = true WHERE email='${email}'`;

    db(queryString, null, null, (err, result, cbData) => {
        if (err) return cb(true, err, cbData);
        return cb(false, result, cbData);
    });
};








