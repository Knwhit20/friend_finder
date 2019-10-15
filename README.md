# friend_finder

Checkout my Github Repo: https://github.com/Knwhit20/friend_finder

Heroku Deployed Link: https://stroup-friend-finder.herokuapp.com/

Instructions: Answer the survey to find your closest friend match!

Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
Determine the user's most compatible friend using the following as a guide:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to         calculate the `totalDifference`.
     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
   * The closest match will be the user with the least amount of difference.

7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
   * The modal should display both the name and picture of the closest match.


Technologies used:
HTML
CSS
Bootstrap
Node.js
Express


Friend Finder in progess, still to be completed:
1. On click function to display best friend match to the user in the browser.  Currently the match is only displayed in the console.
2. Add links to  images in Friends.js
3. create modal pop-up
4. final styling of project

