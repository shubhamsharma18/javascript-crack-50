// WAP to explain float point precession problem and solution


console.log(0.1 + 0.2===0.3); // false
console.log(0.1 + 0.2);   //0.3000000000004

// handle
let sum= Number(((0.1 + 0.2).toFixed(2)))
console.log(sum===0.3);


