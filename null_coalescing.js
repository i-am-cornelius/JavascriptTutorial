// Null coalescing is a way to return a default value if the expected one is not provided
// Nullish operator(??) return the right side operand if the left is null or undefined 
const price = null;
console.log(price ?? 'Priceless');

const user_name = null;
console.log(user_name ?? 'Anonymous');

let user_name_1;
console.log(user_name_1);
console.log(user_name_1 ?? 'Anonymous');

user_name_1 = "John";
console.log(user_name_1 ?? 'Anonymous');


let x = 'undefined';
console.log(x ?? 'Variable not initialized');

// with functions
function test(a, b) {
    a = a ?? 2;
    b = b ?? 4;
    return a + b;
}

console.log(test());
console.log(test(3, 6));
console.log(test(1));
console.log(test(null ,1));