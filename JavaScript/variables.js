let x = 4;
let y = 8;
let z = x + y;
console.log(x + ' plus ' + y + ' is equal to ' + z); 

// using string concantenation

console.log(`${x} plus ${y} is equal to ${z}`);

// There are 3 keywords for creating variables in Javascript; var, let, and const

var myVar = "Hello World";
console.log(myVar);

// An example of 'var' nuanced behavior
var text = 'Hello World, first "text" variable';
console.log(text);

var text = 'Hello World, second "text" variable';
console.log(text);

if (true) {
    var text = '"text" variable inside an if statement';
}
console.log(text);

const pi = 3.142;
console.log(pi);


let isNigerian = true;
console.log(isNigerian);
console.log(typeof isNigerian);

let age = 24;
console.log(age);

/* When it comes to scopes; var, let, const, can all create variables outside functions which is the global
environment. But let and const variables are block-scoped, while variables created with var are not just
global they are mounted on the window object in the Browser messing up the
window object, and can also be redeclared multiple times */

let myName = 'Cornelius';
console.log(myName);

myName = 'Ohiani';
console.log(myName);

let a = 3;
let b = 5;

console.log(a > b);

let likesFood = true;
console.log(likesFood);
console.log(typeof likesFood);

let river;
console.log(river);

console.log(a++);
console.log(a);
console.log(++a);

let test = 3 ** 4;
console.log(test);






// Written using python file write// Written using python file write// Written using python file write// Written using python file write// Written using python file write// Written using python file write