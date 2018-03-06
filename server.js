// Require Express and Body-Parser here
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
var PORT = process.env.port || 3000;

app.use(express.static("public"));
// css won't show without this
app.use(express.static(path.join(__dirname, './public/assets/css/burger_style.css')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them on line 26.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});