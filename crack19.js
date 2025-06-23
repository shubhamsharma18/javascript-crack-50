// Create a function that reverse each word of given sentence like " mai hu shubh" -> "iam uh hbuhs"
function reverseword(sentence)
{
    let str=''
for(let i=0;i<=sentence.length;i++){
    
    if(sentence[i] != " "){
        str+=sentence[i]
    }
    else{
        for(let i=str.length;i<=0;i++){
            str=str[i]
    }
}
    
return str
}
let sentence1 = reverseword("mai hu shubh")
console.log(sentence1)
