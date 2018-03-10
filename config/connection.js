var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {

    connection = mysql.createConnection(process.env.JAWSDB_URL)

} else {

    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Caggac11*",
        port: 3306,
        database: "burgers_db"
    })
}
connection.connect();
module.exports = connection;
