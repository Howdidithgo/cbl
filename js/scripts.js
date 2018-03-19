// this is the add function
var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

// this is the BMI function

var bmi = function(number1, number2) {
 return (number1 / (number2**2)) * 703;
};

 var number1 = parseInt(prompt("Enter weight in pounds:"));
 var number2 = parseInt(prompt("Enter height in inches:"));
 var result = bmi(number1, number2);
 alert(result);

//celsius to fahrenheit

 var far = function(number1) {
 	return (number1 +32) *(5/9)
 };

 var number1 = parseFloat(prompt("enter temp. in celcius:"));
 var result = far(number1);
 alert(result);

// fahrenheit to celsius

 var cel = function(number1) {
	return (number1 -32) *(5/9)
};

var number1 = parseFloat(prompt("enter temp. in fahrenheit:"));
var result = cel(number1);
alert(result);
