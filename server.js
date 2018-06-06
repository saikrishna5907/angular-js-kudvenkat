var express = require('express');

var app=express();
//set port number
var port = process.env.port || 8080

app.use(express.static(__dirname));

// set up routes
app.get("/",function(req,res){
	res.render("htmlpage");
})

app.listen(port,function(){
	console.log("app_running");
})
