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
    
    app.post("/api/friends", function(req, res) {
        // console.log(req.body);
        var newUser= req.body;
        var newuserName = req.body.name;
        var newuserScores = req.body.scores;
        var totalDifference = [];

        var compareUser = [];
        compareUser[0] = new Array ();
        compareUser[1] = new Array();
        compareUser[2] = new Array();
        compareUser[3] = new Array();
        compareUser[4] = new Array();
        compareUser[5] = new Array();
        compareUser[6] = new Array();

        //function to assist with reduce
        function add(total, num) {
            
            return total + num;
            
        }

       

       if(friends.length > 1) {
           for (i = 0; i < friends.length; i++){
            //    console.log(friends[i].scores[0]);
        

               for (j = 0; j < 10; j++){
                // console.log(newUser.scores[j]);
                  var  compare = parseInt(friends[i].scores[j]) - parseInt(newUser.scores[j])
                // console.log(compare)
                   compareUser[i].push(Math.abs(compare));
                   

               }
                totalDifference.push(compareUser[i].reduce(add, 0));
               //console.log(totalDifference);
                //console.log(compareUser[i].reduce(add, 0));
            }
           //console.log(compareUser);
           console.log(totalDifference);
       var smallest = totalDifference[0];
            var bestFriend = 0;
           
            for (i =1; i < totalDifference.length; i++) {
               if (totalDifference[i] <= smallest){
                smallest = totalDifference[i];   
                var bestFriend = i;
                   
                  // if (tempNum <= totalDifference[i]){
                 //      tempNum = totalDifference[i];   
                  //  var bestFriend = i;
                 //  }

        // var smallest = totalDifference[0];
        // for (var i=1; i<totalDifference.length; i++){
        //     if(totalDifference[i] < smallest){
        //         smallest = totalDifference
        //     }
        // }

               }
              
           }
           console.log("My Best Friend");
           //console.log(friends[bestFriend]);
           console.log(bestFriend);
        }
                
            
        //     //loop through each score question, compare newUserScore and friendScore for the difference


        // //save the diffence to an array for each question
        // //sum the difference array = totalDifference
        // //repeat for each friend
        // //match = friend with smallest totalDifference
        // }




        friends.push(req.body);
        res.json(friends[0]);
    
    

    });
};