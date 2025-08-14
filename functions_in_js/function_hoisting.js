// In Javascript it is possible to use a function before declaring it
console.log(join_words('Hello', 'World!'))

function join_words(a, b) {
    return `${a} ${b}`;
}

// Arrow functions can't be hoisted
// console.log(greet("Cornelius"));
// console.log(greet("Luiz"));
const greet = (user_name) => {
    const message =  user_name.length < 5 ? `Hello ${user_name}` : `Hi ${user_name}`;
    console.log(message);
}
greet("Cornelius");
greet("Luiz");


let result = find_prime(2);
console.log(result);

function find_prime(num) {
    if(num === 2) return true;
    if(num <= 1 || num % 2 === 0) return false;

    const square_root = Math.sqrt(num);

    for(let i = 3; i <= square_root; i += 2) {
        if(num % i === 0) return false; 
    }
    return true
}

result = find_prime(10);
console.log(result);

result = find_prime(7);
console.log(result)