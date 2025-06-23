// What is difference between slice and splice

//slice work on both array and string and it will not chnage original array
let string ="shubham"
let str=string.slice(2,3)
console.log(str);

 //splice works only on array changes original array
 let arr =['a','b','c','d','e','f','g']
 let newarr=arr.splice(2,3,'x','y')  // 2 index se start and 3 no of elements 2 index se next 3 elements
 console.log(newarr);
 console.log(arr);
 // slice only give tukda but splice give me tukda and add,update 'x','y' we add in the arr not in newarr
 