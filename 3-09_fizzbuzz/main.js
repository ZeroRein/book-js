console.log('test')

function fizzbuzz(num){
    if((num % 3 === 0) && (num % 5 === 0)) {
        return 'FizzBuzz';
    } else if(num % 3 ===0){
        return 'Fizz';
    } else if(num % 5 === 0){
        return 'Buzz';
    } else{
        return num;
    }
}

let i = 1
while(i <= 30) {
    console.log(fizzbuzz(i));
    i += 1;
}
