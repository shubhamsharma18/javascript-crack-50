

// Find maximun number in an array

//first approach

let array=[23,34,5,7,8,89,765,44,32,34,10024]
console.log(Math.max(...array));



// second appraoch

let arr=[23,34,5,7,8,89,765,44,32,34,10024]
let  sortarr=arr.sort((a,b)=>a-b) //a-b ascending order and b-a descending order
let newarr=sortarr[sortarr.length-1]
console.log(newarr);




