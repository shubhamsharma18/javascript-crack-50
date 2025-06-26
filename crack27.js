// Wap to find the most frequent element of an array
function fun(arr){
let obj={
}

arr.forEach((word) => {
    if(obj.hasOwnProperty(word)){
       obj[word]++
    }
    else if(word===" "){}
    else{
        obj[word]=1
    }
    
});

 
let arr1= Object.entries(obj)
let maxfreq=(Math.max(...Object.values(obj)))
let filterarr=arr1.filter((element)=>{
return element[1]=== maxfreq
})
for(let i in obj){
    if(obj[i]===maxfreq){
        console.log(i,"occured",obj[i]);
        
    }
}

}
let arr=[1,2,3,3,3,4,4,5,4]
fun(arr)