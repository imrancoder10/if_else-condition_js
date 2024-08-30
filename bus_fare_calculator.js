/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var age=9;
var students=true;
var ticketFare=800;
if(age<10){
    console.log("Free for children.");
}
else if(age>=10 && age<60 && students){
    var discount=ticketFare*50/100;
    var ticketFareForStudents= ticketFare-discount;
    console.log("50% off from " + ticketFare + "tk Only for Students : " + ticketFareForStudents + "tk");

}
else if(age>=60){
    var discount=ticketFare*15/100;
    var ticketFareForSenior= ticketFare-discount;
    console.log("15% off from " + ticketFare + "tk Only for senior citizens : " + ticketFareForSenior + "tk");
}