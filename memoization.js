const test = () =>{
    let cache = {}; 

    return (a, b) => {
        let key = a + b;
        if (key in cache){
            console.log('returning from cache'); 
            return cache[key];
        }else{
            console.log('Executing for the first time'); 
            return cache [key] = key;
        }
    }
}
        

const my_test = test();

console.log("2 + 2 = ",my_test(2, 2));
console.log("2 + 9 = " ,my_test(2,9));
console.log("2 + 2 = " ,my_test(2, 2));
console.log("6 + 5 = " ,my_test(6,5));
console.log("2 + 10 = " ,my_test(2,10));
console.log("2 + 6 = " ,my_test(2,6));
console.log("7 + 4 = " ,my_test(7,4));


// Fibonacci is a good example of the effectiveness of memoization
// unoptimized fibonacci 
const fib = (num) => {
    if (num <= 1) {
        return num;
    }

    return fib(num - 1) + fib(num - 2);
}

console.log("without memoization");
console.log(fib(7));
console.log(fib(10));
//console.log(fib(50)); // takes long to execute, and longer for larger sequences

// optimized fibonacci
const optimized_fib = (num, cache = {}) => {
    if(num <= 1){
        return num;
    }

    if(num in cache){
        return cache[num];
    }

    let result = optimized_fib(num - 1, cache) + optimized_fib(num - 2, cache);
    cache[num] = result;
    return result;
}
console.log("Optimized with memoization");
console.log(optimized_fib(7));
console.log(optimized_fib(10));
console.log(optimized_fib(50));

for (let i = 0; i <= 100; i++) {
    console.log(`f(${i}) = ${optimized_fib(i)}`);
    
} 

const check = (num) => {
    for (let i = 0; i <= num; i++){
        if (i % 2 === 0) {
            console.log(`${i}. ${i} is an even number`);
        } else {
            console.log(`${i}. ${i} is an odd number`);
        }
    }
}

check(6);


function check_leap_year(year)
{
    if (year % 4 == 0 && year % 100 != 0) {
        console.log(`${year} is a leap year!`)
        return
    }
    console.log(`${year} is not a leap`)
}

check_leap_year(1995)
check_leap_year(1996)
check_leap_year(1988)
check_leap_year(1998)