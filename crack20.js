// wap in array of numbers and strings add all the numbers not string
let arr=[1,2,3,'S',"Manas",6,"des",12,10]
let sum=0
arr.forEach(element=>{
    if(typeof element==='number'){
        sum+=element
    }
})
console.log(sum);
