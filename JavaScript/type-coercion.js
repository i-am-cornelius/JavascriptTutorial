/* // 'parseInt' returns an integer, 'parseFloat' returns a float. They basically do the same thing
let a = 3;
let b = '3';
let c = b + a;
console.log(c);
console.log("b is a type of "+typeof b);

b = parseInt(b, 5);// the 'parseint' function converts the string '2' into an integer
console.log("b is now typeof "+typeof b);


console.log(b);
c = a + b;
console.log(c);

let example = parseFloat('8.5', 10);// the number parameter should be higher than the string
console.log(example);

let name = parseInt('Cornelius', 10);
console.log(name);
let check = isNaN(name);
console.log(check); */

let a = 3;
let b = '3';
let total = a + b;

if (a === b) {
    console.log('They are equal');
} else {
    console.log('They are not equal');
}

console.log (typeof Number('2'));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
