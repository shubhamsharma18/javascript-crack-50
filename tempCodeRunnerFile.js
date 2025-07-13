
async function fetchdata(){
    let result=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(result);
    
}
fetchdata()
console.log("Asynchronous javascript");
console.log("fetch await concept");
