// Build a simple isPrime() function to check a nuumber is prime or not

function isPrime(num) {
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) { 
            return false
        }
    }
    return true

}

let result = isPrime(7)
console.log(result);
