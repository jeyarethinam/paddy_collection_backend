

exports.leave_apply = function(data){

    return '\n' +
        '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '        <style>\n' +
        '            .fl-table {\n' +
        '                font-size: 18px;\n' +
        '                border-collapse: collapse;\n' +
        '                white-space: nowrap;\n' +
        '                box-shadow: 2px 3px 2px rgba( 0, 0, 0, 0.2 );\n' +
        '            }\n' +
        '            .fl-table td, .fl-table th {\n' +
        '                text-align: left;\n' +
        '                padding: 8px;\n' +
        '            }\n' +
        '            .fl-table td {\n' +
        '                border: 1px solid #AEB6BF;\n' +
        '                font-size: 15px;\n' +
        '            }\n' +
        '            .fl-table thead th {\n' +
        '                border: 1px solid #AEB6BF;\n' +
        '                color: #ffffff;\n' +
        '                background: #009688;\n' +
        '            }\n' +
        '            button{\n' +
        '                border: none;\n' +
        '                color: #ffffff;\n' +
        '                font-size: 16px;\n' +
        '                font-weight: 600;\n' +
        '                line-height: 30px;\n' +
        '                background-color: #009688;\n' +
        '                border-radius: 4px;\n' +
        '            }\n' +
        '        </style>\n' +
        '        <title>Unicom SD</title>\n' +
        '</head>\n' +
        '\n' +
        '    <body style="background-color: #f4f4f5;">\n' +
        '        <table align="center" style="background-color: #fff; width: 100%; max-width: 680px; height: 100%;">\n' +
        '            <tbody>\n' +
        '                <tr>\n' +
        '                    <td>\n' +
        '                        <table style="padding: 10px 80px 50px 80px;">\n' +
        '                            <tbody>\n' +
        '\n' +
        '                                <tr>\n' +
        '                                    <td style="padding-top: 22px;">\n' +
        '                                        <img src="https://unicomsd.com/185a7152/wp-content/uploads/2019/09/cropped-Untitled-1-2-e1567526739214-1.png" style="width: 160px;" alt="unicom SD">\n' +
        '                                    </td>\n' +
        '                                </tr>\n' +
        '\n' +
        '                                <tr>\n' +
        '                                    <td colspan="2" style="padding: 20px 0 20px 0; font-size: 25px; font-weight: 600;">\n' +
        '                                        <u>Leave Management System - Unicom SD </u>\n' +
        '                                    </td>\n' +
        '                                </tr>\n' +
        '\n' +
        '                                <tr>\n' +
        '                                    <td style="padding: 0 0 30px 0; font-size: 20px; font-weight: 600;">\n' +
        '                                        Leave Request\n' +
        '                                    </td>\n' +
        '                                </tr>\n' +
        '\n' +
        '                                <tr>\n' +
        '                                    <td style="color: #9095a2; font-size: 16px; font-weight: 400; ">\n' +
        '                                        Leave request has been obtained from <b> ' + data.emp_first_name + ' ' + data.emp_last_name + '.</b> ' +
        '                                    </td>\n' +
        '                                </tr>\n' +
        '\n' +
        '                                <tr>\n' +
        '                                    <td style="padding-top: 20px;color: #9095a2; font-size: 16px; font-weight: 400; ">\n' +
        '                                        <table class="fl-table">\n' +
        '                                            <thead>\n' +
        '                                                <tr>\n' +
        '                                                    <th>Employee Name</th>\n' +
        '                                                    <th>Leave Type</th>\n' +
        '                                                    <th>Leave Dates</th>\n' +
        '                                                    <th>Cover Person</th>\n' +
        '                                                    <th>Reason</th>\n' +
        '                                                    <th style="text-align: center;">View</th>\n' +
        '                                                </tr>\n' +
        '                                            </thead>\n' +
        '\n' +
        '                                            <tbody>\n' +
        '                                                <tr>\n' +
        '                                                    <td> ' + data.emp_first_name + ' ' + data.emp_last_name + ' </td>\n' +
        '                                                    <td> ' + data.leave_type + ' <br> ' + data.session + ' </td>\n' +
        '                                                    <td> ' + data.start_date + ' - ' + data.end_date + ' <br> (' + data.total_days + ' Days) </td>\n' +
        '                                                    <td> ' + data.cp_first_name + ' ' + data.cp_last_name + ' </td>\n' +
        '                                                    <td> ' + data.reason + ' </td>\n' +
        '                                                    <td style="text-align: center;">\n' +
        '                                                        <a href="http://localhost:4200/main/viewleaveadmin">\n' +
        '                                                            <button> View Leave </button>\n' +
        '                                                        </a>\n' +
        '                                                    </td>\n' +
        '                                                </tr>\n' +
        '                                            <tbody>\n' +
        '                                        </table>\n' +
        '                                    </td>\n' +
        '                                </tr>\n' +
        '\n' +
        '                                <tr>\n' +
        '                                    <td style="padding-top: 20px;color: #9095a2; font-size: 16px; font-weight: 400; ">\n' +
        '                                        Regards, <br> Admin <br> Unicom SD\n' +
        '                                    </td>\n' +
        '                                </tr>\n' +
        '\n' +
        '                            </tbody>\n' +
        '                        </table>\n' +
        '                    </td>\n' +
        '                </tr>\n' +
        '            </tbody>\n' +
        '        </table>\n' +
        '    </body>\n' +
        '</html>';
};
