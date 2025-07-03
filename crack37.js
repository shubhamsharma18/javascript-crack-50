// WAP to count number of even and odd numbers in array

let arr=[1,2,3,4,5,6,6,8]
even=0;
odd=0;
evenarr=[]
oddarr=[]
for(let i=0; i<arr.length;i++){
    if(arr[i]%2===0){
        even=even+1
        evenarr.push(arr[i])

    }
    else{
        odd=odd+1
        oddarr.push(arr[i])
    }
}
console.log("even arr ",evenarr,even,"times");
console.log("odd arr " ,oddarr,odd,"times");
