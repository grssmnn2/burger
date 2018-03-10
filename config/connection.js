var mysql = require("mysql");

var connection = mysql.createConnection({
host: "localhost",
database: "burgers_db",
user: "root",
password: "",
port: 3306
});


var connection = mysql.createConnection(process.env.JAWSDB_URL);

module.exports = connection;
