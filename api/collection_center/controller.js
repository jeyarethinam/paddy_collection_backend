'use strict';
var db = require('../../database/mysql/collection_center');
// var User = require('./class');
// var mail = require('../../app/email/sendMail');
// var user = new User();



exports.getCollectionCenterByID = function (req, res, next) {

    db.getCollectionCenterByID(req.params.id, function (err, result) {
        if (err) return res.status(400).json({ status: false, message: "Failed", result: result });

        return res.status(200).json({
            status: true,
            message: "success",
            result: result
        });
    });
};


