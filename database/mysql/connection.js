var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'u909371547_gs'
});


module.exports = function (queryString, data, cbData, cb) {
    pool.getConnection((err, db) => {
        if (err) { return cb(true, err, cbData); }

        db.query(queryString, (err, result) => {
            console.log(err);
            db.release();
            if (err) {
                return cb(true, err, cbData);
            }
            return cb(false, result, cbData);
        });
    })
};
