// Write a function that takes string as a parameter and coverts the first letter of each word in uppercase
 let string="ms dhoni is great wicketkeeper"

 const uppercase= (str)=>{
   let result= str.split(' ').map((word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return result.join(' ')
    
 }
 let finalresult=uppercase(string)
 console.log(finalresult);
 