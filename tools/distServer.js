var express = require("express");
var path = require("path");
var app = express();

var port = process.env.PORT || 3000;

app.get("/", function(req,res) {
	res.sendFile(path.join(__dirname,"..","dist/index.html"),{}, function(err){
		if (err)
			console.log(err);
	});
});

app.listen(port, function(err){
	console.log("Server is Running on Port " + port);
});
