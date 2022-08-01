
exports.emp_register = function (data) {
    return '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '        <body style="background-color: #f4f4f5;">\n' +
        '            <table align="center" style="background-color: #fff; width: 100%; max-width: 680px; height: 100%;">\n' +
        '                <tbody>\n' +
        '                    <tr>\n' +
        '                        <td>\n' +
        '                            <table style="padding: 10px 80px 50px 80px;">\n' +
        '                                <tbody>\n' +
        '\n' +
        '                                    <tr>\n' +
        '                                       <td style="padding-top: 22px;">\n' +
        '                                           <img src="https://unicomsd.com/185a7152/wp-content/uploads/2019/09/cropped-Untitled-1-2-e1567526739214-1.png" style="width: 160px;" alt="unicom SD">\n' +
        '                                       </td>\n' +
        '                                    </tr>\n' +
        '\n' +
        '                                    <tr>\n' +
        '                                       <td colspan="2" style="padding: 20px 0 20px 0; font-size: 25px; font-weight: 600;">\n' +
        '                                           <u>Leave Management System - Unicom SD</u>\n' +
        '                                       </td>\n' +
        '                                    </tr>\n' +
        '\n' +
        '                                    <tr>\n' +
        '                                       <td style="color: #9095a2; font-size: 16px; font-weight: 400; ">\n' +
        '                                                  Your details have been inserted into the Leave Management System of Unicom SD. Please use the following credentials to login to the system.\n' +
        '                                       </td>\n' +
        '                                    </tr>\n' +
        '\n' +
        '                                    <tr>\n' +
        '                                       <td style="padding-top: 20px;color: #9095a2; font-size: 16px; font-weight: 400; ">\n' +
        '                                               Username: ' + data.email + '<br>\n' +
        '                                               Password: ' + data.password + '\n' +
        '                                       </td>\n' +
        '                                    </tr>\n' +
        '\n' +
        '                                    <tr>\n' +
        '                                       <td style="padding-top: 20px;color: #9095a2; font-size: 16px; font-weight: 400; ">\n' +
        '                                               Once you logged into the system, please change your password and enjoy with the system.\n' +
        '                                       </td>\n' +
        '                                    </tr>\n' +
        '\n' +
        '                                    <tr>\n' +
        '                                      <td style="padding-top: 20px;color: #9095a2; font-size: 16px; font-weight: 400; ">\n' +
        '                                               Regards, <br> Admin <br> Unicom SD\n' +
        '                                      </td>\n' +
        '                                    </tr>\n' +
        '\n' +
        '                                </tbody>\n' +
        '                            </table>\n' +
        '                        </td>\n' +
        '                    </tr>\n' +
        '                </tbody>\n' +
        '            </table>\n' +
        '        </body>\n' +
        '\n' +
        '</html>\n';
};
