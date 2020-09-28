//4 steps to create new year's countdown timer:
//Set a valid end date
const deadline = 'December 31 2020 23:59:59';
//Calculate the time remaining //Convert the time to a usable format.
function getTimeRemaining(endtime){
    console.clear();
    const total = Date.parse(endtime) - Date.parse(new Date());//to find the remaining time until the deadline (in milli seconds by function date.parse())
    const seconds = Math.floor( (total/1000) % 60 );  //we don’t want all of the seconds, just those remaining after the minutes have been counted:  (t/1000) % 60)
    const minutes = Math.floor( (total/1000/60) % 60 );  //same for minutes ..we need minutes after hours
    const hours = Math.floor( (total/(1000*60*60)) % 24 );   // we use the function math.floor 
    const days = Math.floor( total/(1000*60*60*24) );
    //Output the Clock Data as a Reusable Object
    console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s");
}

setInterval(getTimeRemaining, 1000, deadline);
 


