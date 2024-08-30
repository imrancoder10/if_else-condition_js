/***
3. Grade Calculator 
Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:
    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
***/
var number=70;
if(number>=90 && number<=100){
    console.log('Your Grade is A');
}
else if(number>=80 && number<=89){
    console.log('Your Grade is B.');
}
else if(number>=70 && number<=79){
    console.log('Your Grade is C.');
}
else if(number>=60 && number<=69){
    console.log('Your Grade is D.');
}
else if(number>=0 && number<=59){
    console.log('Your Grade is F.');
}
else{
    console.log('Your Input is incorrect.')
}
