4. /***if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad
Note: 
use nested if-else-if-else
*/
var friendResult=81;
var selfResult=81;
if(selfResult>80){
    // friend score here.........
    if(friendResult>80){
        console.log('Go for a lunch.');
    }
    else if(friendResult<80 && friendResult>=60){
        console.log('good luck next time.');
    }
    else if(friendResult<60 && friendResult>=40){
        console.log("keep your friend's message unseen.");
    }
    else if(friendResult<40){
        console.log('block your friend');
    }
}
else{
    console.log('Go to home and sleep and act sad.');
}