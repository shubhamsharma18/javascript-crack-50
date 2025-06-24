// wap a program that returns a passed string in alphabetical order
function alphastring(str){
return str.split('').sort().join('')
}
let result=alphastring("zyx")
console.log( result);
