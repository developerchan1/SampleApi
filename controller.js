const response = require('./res');
const connection = require('./conn');

exports.getAllData = (req, res) => {
    const sql = 'SELECT * FROM karyawan';
    connection.query(sql,function(error, rows, fields){
        if(!error) response.ok(rows, res);
        else console.log(error);
    });
};

exports.employeeLogin = (req, res) => {
    const { employee_email, employee_password} = req.body;

    if(employee_email !== null && employee_password !== null) {
        const sql = 'SELECT * FROM login WHERE email = ? AND password = ?';
        connection.query(sql, [employee_email, employee_password], function(error, rows, fields) {
            if(rows === 0) {
                response.error('Wrong email or password', res);
            }
            else {
               response.ok(rows, res);
            }
        });
    }
    else {
        response.error('Data found not sufficient', res);
    }

};