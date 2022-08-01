'use strict';
const nodeMailer = require('nodemailer');
const leave = require('./template/leave');
const register = require('./template/register');
const reset = require('./template/resetpassword');

function getTemplateForMail(template, data){
    if(template === "leave_apply"){
        return leave.leave_apply(data);
    } else if (template === "register"){
        return register.emp_register(data);
    } else
    return reset.pass_reset(data);
}

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing

// send mail
exports.sendMail = function (email, subject, data, template, cb) {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: '*******',//email 
            pass: '*******'//password 
        }
    });
    let cp_email = data.cp_email;

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'noreply@ceybit.net', // sender address
        to: email, // list of receivers
        cc:'leavemanage2020@gmail.com',
        bcc: cp_email,
        subject: subject, // Subject line
        html: getTemplateForMail(template, data) // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.info(error);
            return cb(true, error)
        }
        console.info('Done');
        return cb(false, info);
    });

} ;


