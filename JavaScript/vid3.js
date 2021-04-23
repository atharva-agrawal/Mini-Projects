var num1 = 10;
var num2 = 10.9;

console.log(typeof(num1));
console.log(typeof(num2));

//Addition
var num3 = 15;
var sum = num1 + num2 + num3;
console.log(sum);

//Subtraction
var diff = num3 - num1;
console.log(diff);

//Multiplication
var mul = num3 * num1;
console.log(mul);

//Division
var div = num3 / num1;
console.log(div);

//Infinity
var checkInfinity = num1 / 0;
console.log(checkInfinity);

//NaN
var checkNaN = num1 * "A";
var check = num1 - "c";
console.log(checkNaN);
console.log(check);

console.log(typeof(sum));
console.log(typeof(diff));
console.log(typeof(mul));
console.log(typeof(div));
console.log(typeof(checkInfinity));
console.log(typeof(checkNaN));
console.log(typeof(check));