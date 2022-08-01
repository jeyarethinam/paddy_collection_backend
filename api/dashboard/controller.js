'use strict';
var db = require('../../database/mysql/user');
var User = require('./class');
var mail = require('../../app/email/sendMail');
var user = new User();

exports.dashboard = function (req, res, next) {
    var reqBodyResult = appFun.reqBodyValidation(req, res);
    if (reqBodyResult != null) return res.status(400).json({status: false, message: "Failed", result: reqBodyResult});
    return res.status(200).json({
        status: true,
        message: "success",
        result:[{
            "lable":"Total Family",
            "count":1239
        },
        {
            "lable":"Children",
            "count":120
        },
        {
            "lable":"Employee",
            "count":400
        },
        {
            "lable":"Un Emloyed",
            "count":746
        }
    
    ]
    });
    // db.login(req.body.email, req.body.password, function (err, result) {
    //     if (err) return res.status(400).json({status: false, message: "Failed", result: result});
    //     return res.status(200).json({
    //         status: true,
    //         message: "success",
    //         result: user.loginResponse(req, result[0], "")
    //     });
    // });
};

