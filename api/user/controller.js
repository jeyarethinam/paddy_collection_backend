'use strict';
var db = require('../../database/mysql/user');
var User = require('./class');
var mail = require('../../app/email/sendMail');
var user = new User();


// login
exports.login = function (req, res, next) {
    user.validateLoginBody(req);
    var reqBodyResult = appFun.reqBodyValidation(req, res);
    if (reqBodyResult != null) return res.status(400).json({ status: false, message: "Failed", result: reqBodyResult });
    db.login(req.body.username, req.body.password, function (err, result) {
        if (err) return res.status(400).json({ status: false, message: "Failed", result: result });
        return res.status(200).json({
            status: true,
            message: "success",
            result: user.loginResponse(req, result[0], "")
        });
    });
};


// register
exports.register = function (req, res, next) {
    user.validateRegistrationBody(req);
    var reqBodyResult = appFun.reqBodyValidation(req, res);
    if (reqBodyResult != null) return res.status(400).json({ status: false, message: "failed", result: reqBodyResult });

    db.registration(req.body, function (err, result) {
        if (err) {
            return res.status(400).json({ status: false, message: "failed", result: err });
        }
        return res.status(200).json({ status: true, message: "Registration Success", result: "registration success" });
    });
};


// get all user
exports.getAllUsers = function (req, res, next) {

    db.getAllUser(req.params, function (err, result, obj) {
        if (err) {
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
