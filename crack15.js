// Write a function that remove duplicate value from an array and arrange in ascending order


// First method

let arr=[1,2,3,3,45,5,34,3,43,43,4,100,100,34]


function removesort(arr){
return [...new Set(arr)].sort((a,b)=>a-b)
}

let result=removesort(arr)
console.log(result);

// second method

// Remove duplicate values

function removeDuplicate(array){
let result =array.filter((element,index)=>{
return array.indexOf(element)===index
})
return result
}
let resultarr=removeDuplicate(arr)
console.log(resultarr);

