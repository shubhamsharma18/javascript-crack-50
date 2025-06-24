// Create a function that reverse each word of given sentence like " mai hu shubh" -> "iam uh hbuhs"
let sentence="the finisher benstokes"
let result= sentence.split(' ').map((element)=>{
    let reverseword= element.split('').reverse().join('')
    return reverseword
}).join(' ')

console.log(result);


