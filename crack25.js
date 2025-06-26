// Write a function that takes array and return first element of an array if n is not given and also takes n parameter that return first n elements
function returnarrelement(arr, n) {

    if (!n) {
        let num = arr[0]
        console.log("First Element ", num);
    }
    
    else if (n < arr.length) {
        let result = arr.slice(0, n)
       return result
        
        
    }
    else {
        console.log("enter valid no in given array");

    }
    
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 let finalresult=
 returnarrelement(arr,7)
 console.log(finalresult);
 

