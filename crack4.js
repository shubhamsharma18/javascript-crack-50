// Create a function that takes an array containing both numbers and strings and return a new array containing only string values

//first method
let array=[1,2,"javascript",56,"crack",45,"50",56,"",1,"never loose hope",undefined,NaN]
let resultarray=array.filter((element)=>{
    return(typeof element ==="string")
   

})
console.log(resultarray);



// second method
// this return number values of array using classical approach

function filterArr(arr){
let newarr=[]
for(let i in arr){
    if(typeof arr[i]!=="string" ){
        newarr=newarr.concat([arr[i]])
        
    }
}
return newarr
}
let arr =[1,"shubham",3,4,5,,"crack",50,"7",334,56,87,"You are best",""]
let newarray=filterArr(arr)
console.log(JSON.stringify(newarray));


