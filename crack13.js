// Check all elements in aray are number or not


// first method

let arr=[12,23,35,"s",54]

function checknmber(arr){
let check= arr.every(elemt=> typeof elemt==='number')
return check
}
let Result=checknmber(arr)
console.log(Result);



// second method


let array=[1,9,9]
function check(){
       let isNumber=true;
    array.forEach(element => {
 
    if(typeof element !=='number'){
       isempty=false;
    }
    
    });
    return isNumber
}

let result=check(array)
console.log(result);
