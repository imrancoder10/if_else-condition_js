/***
you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.
 */
//Math starts here......................
/*var num1=10;
var num2=25;
var result;
if(num1>num2){
    result=num1*2;
    console.log('The multiplication of num1 is: ' + result);
}
else{
    result=num1+num2;
    console.log('The addition of num1 and num2 is: ' + result);
}*/

// Ternary starts here.....................
var num1= 20;
var num2=25;
var result= num1>num2 ? (num1*2):(num1+num2);
console.log(result);

// Alternative 
// num1>num2 ? (console.log('The multiplitation of num1 is: ' + num1*2)) : (console.log('The addition of num1 and num2 are: ' +  (num1+num2)));