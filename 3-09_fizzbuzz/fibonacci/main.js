console.log('fibonacci')
/** a3 = a2 +a 0,1,1,2,3,5,8,13,21,34,55 */

function fibonacci(n) {
    if (n <= 1) {
        return n
    }
    else if (n > 1) {
        return fibonacci(n-1) + fibonacci(n-2)
    }
    
    


}
console.log(fibonacci(10))