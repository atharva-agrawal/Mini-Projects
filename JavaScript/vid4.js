var num1 = 10;
var num2 = 11.3;

//toString() coverts number to string
console.log(num1.toString());
console.log(num2.toString());

var strNum1 = "10";
var strNum2 = "11.9";
var strNum3 = "23.5";

//parseInt() convert string to integer number
console.log(parseInt(strNum1));
console.log(parseInt(strNum2));

//parseFloat() convert string to floating numbers

console.log(parseFloat(strNum2));
console.log(parseFloat(strNum3));

//toFixed() takes floating numbers and round off to given decimal place
var floatingNum1 = 23.56543654;
console.log(floatingNum1.toFixed());
console.log(floatingNum1.toFixed(2));
console.log(floatingNum1.toFixed(6));