'use strict';
var db = require('../../database/mysql/farmer');
// var User = require('./class');
// var mail = require('../../app/email/sendMail');
// var user = new User();


// login
exports.getAllFarmer = function (req, res, next) {

    // user.validateLoginBody(req);
    // var reqBodyResult = appFun.reqBodyValidation(req, res);
    // if (reqBodyResult != null) return res.status(400).json({status: false, message: "Failed", result: reqBodyResult});
    db.getAllFarmer(req.body, function (err, result) {
        if (err) return res.status(400).json({ status: false, message: "Failed", result: result });

        return res.status(200).json({
            status: true,
            message: "success",
            result: result
        });
    });
};


// register
exports.registerFarmer = function (req, res, next) {
    // user.validateRegistrationBody(req);
    // var reqBodyResult = appFun.reqBodyValidation(req, res);
    // if (reqBodyResult != null) return res.status(400).json({ status: false, message: "failed", result: reqBodyResult });

    db.registerFarmer(req.body, function (err, result) {
        if (err) {
            return res.status(400).json({ status: false, message: "failed", result: result });
        }
        return res.status(200).json({ status: true, message: "Registration Success", result: result });
    });
};


// get all user
exports.getAllFamily = function (req, res, next) {
    console.log("am I working");

    db.getAllFamily(req.params, function (err, result, obj) {
        if (err) {
            console.log(err);
            return res.status(400).json({ status: false, message: "failed", result: "something went wrong" });
        }
        return res.status(200).json({ status: true, message: "success", result: result });

    })

};

exports.deleteFarmerById = function (req, res, next) {
    console.log("am I working");

    db.deleteFarmerById(req.params.id, function (err, result, obj) {
        if (err) {
            console.log(err);
            return res.status(400).json({ status: false, message: "failed", result: "something went wrong" });
        }
        return res.status(200).json({ status: true, message: "success", result: result });

    })

};


// changePassword
exports.changePassword = function (req, res, next) {
    user.validateChangePasswordBody(req);
    var reqBodyResult = appFun.reqBodyValidation(req, res);
    if (reqBodyResult != null) return res.status(400).json({ status: false, message: "failed", result: reqBodyResult });

    var password = appFun.encryptPassword(req.body.password.conformPassword);
    db.changePassword(req.body.email, password, function (err, result, obj) {
        if (err) {
            return res.status(400).json({ status: false, message: result, result: result });
        }
        return res.status(200).json({ status: true, message: "success", result: result });
    });
};


// forgetPassword
exports.forgetPassword = function (req, res, next) {
    user.validateEmailLoginBody(req);
    var reqBodyResult = appFun.reqBodyValidation(req, res);
    if (reqBodyResult != null) return res.status(400).json({ status: false, message: "failed", result: reqBodyResult });
    var generatedPassword = appFun.genarateRandoString(6);

    var password = appFun.encryptPassword(generatedPassword);
    db.getUserByEmail(req.body.email, (err, result, obj) => {
        if (err) {
            return res.status(400).json({ status: false, message: result, result: result });
        }
        if (result.length == 0) {
            return res.status(400).json({ status: false, message: "There is no user with this email", result: "There is no user with this email" });
        }
        db.forgetPassword(req.body.email, password, function (err, result, obj) {
            if (err) {
                return res.status(400).json({ status: false, message: result, result: result });
            }

            const data = { password: generatedPassword, email: req.body.email };
            mail.sendMail(req.body.email, 'Reset Password', data, 'pass_reset', (err, result) => {
            });
            return res.status(200).json({ status: true, message: "success", result: 'password going to change' });
        });
    });
};
