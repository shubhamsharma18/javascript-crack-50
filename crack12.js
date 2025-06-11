// Write a function to flatten a nested array [1,2,3,[4,5,],6] =>[1,2,3,4,5,6]

//First method..


let arr=[1,2,3,['a','b',["#","%"],'c'],4,5]
let newarray=arr.flat(2)
console.log(newarray);


//second method..


let array=[1,2,3,["a","b","c"],4,5]
let newarr=array[3]
array.splice(3,1,...newarr)
console.log(array);
