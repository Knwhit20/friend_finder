var express = require("express");
// Tells node that we are creating an "express" server
var app = express();

var port = process.env.port || 8080

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//routes 
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})
