var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Jasmin"];

app.post("/addFriend", function(req, res){
    var newFriend = req.body.name;
    friends.push(newFriend);
    res.redirect("/friend");
})

app.get("/", function(req, res){
    res.render("home");
})

app.get("/friend", function(req,res){   
    res.render("friend", {friends: friends});
})

app.listen(3000, function(){
    console.log("Server started!");
})