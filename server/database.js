const mysql = require("mysql");

const connection = mysql.createConnection({
    host : "192.168.0.20",
    user : "root",
    password : "1015",
    database : "healthmatching"
});
connection.connect();

module.exports = connection;