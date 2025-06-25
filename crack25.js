// Write a function that takes array and return first element of an array and also takes n parameter that return first n elements
function returnarrelement(arr,n){
    let num =arr[0]
    console.log("First Element ",num);
    
   let result= arr.splice(0,n)
   return result
}
let arr=[1,2,3,4,5,6,7,8,9]
let result=returnarrelement(arr,7)
console.log(result);
