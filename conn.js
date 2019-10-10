const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'employee'
});

mysqlConnection.connect(function (err){
    if(!err) console.log('DB Connection Succeded.');
    else console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mysqlConnection;
