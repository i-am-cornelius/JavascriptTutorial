// Types of Expression
// 1. Variable declaration

let name;

// 2. Assigning a value

name = 'Cornelius';

//perform an evaluation that returns a single value

//x + y;

// these are single expressions here 
let x = 4;
let y = 2;

/*  there are 3 expressions here
(1). variable declaration...let z  
(2). evaluation...x + y  
(3). result of evaluation is assigned to z
 */
let z = x + y;
console.log(z)


// Categories of operators

// Assignment operator =

let message = "Hello World!";
console.log(message);

// Arithmetic operator + - * / %
// + operator example
let shirt = 20;
let trouser = 30;
let outfitTotal = shirt + trouser;
console.log(outfitTotal);

// - operator example
let trouserAlone = outfitTotal - shirt;
console.log(trouserAlone);

// * operator example
let wristwatch = shirt * trouser;
console.log(wristwatch);

// % operator example

let number = 20 % 3;
console.log(number);

// / operator example
let newNumber = number / 2;
console.log(newNumber);

// Increment and Decrement operator ++ and --
let age = 23;
age++;
console.log(age);

let reverseAge = 23;
reverseAge--;
console.log(reverseAge);
// operator precedence. the multiplication(*) operator gets executed first then the addition(+) operator comes next.

let result = 2 + 3 * 4;
console.log(result);


// surrounding the + expression in a () allows it to execute first before the *
let reverseResult = (2 + 3) * 4;
console.log(reverseResult);

// Logical and:&& , or:|| operators

// The dot notation . to access object properties

// code block {} 

// accessing array elements [] and [''] for accessing object properties

// or = ||

// and = &&