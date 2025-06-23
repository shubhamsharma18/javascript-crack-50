// WAP to differentiate between Number() and parseInt()
console.log(parseInt(33.67)); // typeof Number
console.log(Number(33.67));   // typeof Number

console.log(parseInt("245.56px"));  //245.56
console.log(Number("245.56px"));  //NaN

console.log(parseInt("101", 2)); // 2 is radix, 2 denotes binary that converts "101" in binary to number 5
console.log(Number("1010",2)); // but Number() is not able to