var mysql = require("mysql");

var connection = mysql.createConnection({
host: "localhost",
database: "burgers_db",
user: "root",
password: "Caggac11*",
port: 3306
});


connection.connect(function(err){
if (err) throw err;
});

module.exports = connection;
