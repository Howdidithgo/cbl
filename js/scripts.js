var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

var bmi = function(number1, number2) {
 return (number1 / (number2**2)) * 703;
};

 var number1 = parseInt(prompt("Enter weight in pounds:"));
 var number2 = parseInt(prompt("Enter height in inches:"));
 var result = bmi(number1, number2);
 alert(result);
