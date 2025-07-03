// wap function that check number is even or odd

function check(num){
    if(num%2==0){
        console.log("even")
        return num
    }
    else{
        console.log("odd");
        return num
    }
}
let result=check(11)
console.log(result)