var express = require("express");

var app = express();
var port = process.env.PORT || 8080;

app.get("/", function (req, res) {
    res.send("welcome to node js app on heroku!");
});

app.listen(port);