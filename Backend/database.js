const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',    
    password:'12345',
    database:'company_database'
}); 

module.exports = connection;