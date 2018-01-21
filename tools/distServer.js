var express = require("express");
var path = require("path");
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('dist'))

app.listen(port, function(err){
	console.log("Server is Running on Port " + port);
});
