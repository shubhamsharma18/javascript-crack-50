/* Guess the output of below the code we are using asynchronous javascript concept fetch and await*/

async function fetchdata()
{
    let result=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(result);
    
}
fetchdata()
console.log("Asynchronous javascript");
console.log("fetch await concept");

