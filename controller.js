'use strict'

var response = require('./res'),
    connection = require('./conn');

exports.getAllData = function(req,res){
    connection.query('SELECT * FROM karyawan',function(error,rows,fields){
        if(!error)
        response.ok(rows,res);
        else
        console.log(error);
    });
};

exports.employeeLogin = function(req,res){
    var employee_email = req.body.employee_email,
        employee_password = req.body.employee_password;

    if(!employee_email != null && !employee_password != null){
        var sql = 'SELECT * FROM login WHERE email = ? AND password = ?'
        connection.query(sql,[employee_email,employee_password],function(error,rows,fields){
            if(rows == 0){
                response.error('Wrong email or password',res);
            }
            else{
               response.ok(rows,res); 
            }
        });
    }
    else{
        response.error('Data found not sufficient',res);
    }


};