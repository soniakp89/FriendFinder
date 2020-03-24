var express = require("express")
var path = require("path")

var app = express();
//
var PORT = process.env.PORT || 3000;
//handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 3000;

//handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//routes
require("./app/Routing/apiRoutes")(app);
require("./app/Routing/htmlRoutes")(app);
//app listening on port

app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});