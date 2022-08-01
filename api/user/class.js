class User {

    constructor() { }

    //Check login body
    validateLoginBody(req, res) { // login body param validation
        req.checkBody('username', 'Invalid email').notEmpty().withMessage("email can not be empty");
        req.checkBody('password', 'Invalid password').notEmpty().withMessage("password can not be empty");
    }

    //Check email login  validation
    validateEmailLoginBody(req) { // login body param validation
        req.checkBody('email', 'Invalid email').notEmpty().withMessage("Plz enter valid mail address");
    }

    loginResponse(req, data, privilege) {
        var user = {
            id: data.id,
            email: data.email,
            role_id: data.role_id,
            profile: "profile",
            browser: req.useragent.browser + '_' + req.useragent.version,
            ip: req.connection.remoteAddress
        };

        var name = (data.first_name !== undefined && data.last_name !== undefined) ? data.first_name + " " + data.last_name : data.email;
        return {
            token: appFun.jwtToken(user),
            active: data.active,
            role_id: data.role_id,
            name: name,
            email: data.email,
        }
    }

    //Check change password  validation
    validateChangePasswordBody(req, res) {
        req.checkBody('password.conformPassword', 'Invalid password').notEmpty().withMessage("password can not be empty");
    }

    // registration code
    validateRegistrationBody(req, res) { // login body param validation
        req.checkBody('username', 'Invalid email').notEmpty().withMessage("email can not be empty");
        req.checkBody('password', 'Invalid password').notEmpty().withMessage("password can not be empty");
    }
}


module.exports = User;
