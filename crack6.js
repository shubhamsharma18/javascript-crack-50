// Write a function that return a length of the keys

let lengthofObject=((object)=>{
return Object.keys(object).length
})
let obj={
    name:"Shubham",
    class:"BCA",
    TCS:true,
    salary:12000,
    locaton:"remote"
}

let result=lengthofObject(obj)
console.log(result);


