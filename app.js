var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.send("Home");
})

app.listen(3000, function(){
    console.log("Server started!");
})