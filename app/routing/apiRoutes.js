//    * A GET route with the url`/api/friends`.This will be used to display a JSON of all possible friends.
//    * A POST routes`/api/friends`.This will be used to handle incoming survey results.This route will also be used to handle the compatibility logic.

// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
var friends = require("../data/friends.js");

// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });     
    app.post("")
};

var newUser = {
    name: $("#nameInput").val().trim(),
    image: $("#imageLink").val().trim(),
    scores: [$("#q1").val(),
    $("#q2").val(),
    $("#q3").val(),
    $("#q4").val(),
    $("#q5").val(),
    $("#q6").val(),
    $("#q7").val(),
    $("#q8").val(),
    $("#q9").val(),
    $("#q10").val()

    ]
};
for (i = 0; i < newUser.scores.length; i++) {
    var difference = newUser.scores[i];
    console.log(difference);
    console.log(friends[i].scores)
}