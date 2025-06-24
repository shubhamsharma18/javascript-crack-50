// write a javascript function that reverse a number
function reversenum(num) {
    let num1 = String(num)
    return Number((num1.split('').reverse()).join(''))

}
let result = reversenum(2345434534)
console.log(result);
