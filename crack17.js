// WAP to explain float point precession problem and solution

console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2);   //0.3000000000004

// handle
let sum = Number(((0.1 + 0.2).toFixed(2)))
console.log(sum === 0.3);

//another method using decimal,js libraray command npm i decimal.js
let Decimal = require("decimal.js")
let num1 = Decimal(0.1) //typeof object
let num2 = Decimal(0.2)
let sum1= num1.plus(num2)
console.log(sum1);


