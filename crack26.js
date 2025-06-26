// Write javascriipt function to get the number of occurenece of each letter in specified string
function occurenece(str){
    let spacecount=0;
    for(let i of str){
        if(i===' '){
            spacecount++
        }
    }
    console.log("number of spaces in string",spacecount);
    
let obj={
}

str.split('').forEach((word) => {
    if(obj.hasOwnProperty(word)){
       obj[word]++
    }
    else if(word===" "){}
    else{
        obj[word]=1
    }
    
});
/* for(let key in obj){
    console.log(`${key} aapka ${obj[key]} baar aaya`);
    
}*/
let arr=Object.entries(obj)
arr.forEach((element)=>{
    console.log(`${element[0]} aapka ${element[1]} baar aaya`);
    
})


}
let string="shubham sharma ratti"
occurenece(string)

