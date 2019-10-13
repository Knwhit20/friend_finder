var express = require("express");
var path = require("path");
// Tells node that we are creating an "express" server
var app = express();

var port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})

