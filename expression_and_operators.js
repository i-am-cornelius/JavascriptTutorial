// Types of Expression
// 1. Variable declaration
let name;

// 2. Assigning a value
name = 'Cornelius';

//perform an evaluation that returns a single value

//x + y;

// these are single expressions here 
const x = 4;
const y = 2;

/*  there are 3 expressions here
(1). variable declaration...const z  
(2). evaluation...x + y  
(3). result of evaluation is assigned to z
 */
const z = x + y;
console.log(z)


// Categories of operators

// Assignment operator =

const message = "Hello World!";
console.log(message);

// Arithmetic operator + - * / %
// + operator example
const shirt = 20;
const trouser = 30;
const outfitTotal = shirt + trouser;
console.log(outfitTotal);

// - operator example
const trouserAlone = outfitTotal - shirt;
console.log(trouserAlone);

// * operator example
const wristwatch = shirt * trouser;
console.log(wristwatch);

// % operator example

const number = 20 % 3;
console.log(number);

// / operator example
const newNumber = number / 2;
console.log(newNumber);

// Increment and Decrement operator ++ and --
let age = 23;
age++;
console.log(age);

let reverseAge = 23;
reverseAge--;
console.log(reverseAge);
// operator precedence. the multiplication(*) operator gets executed first then the addition(+) operator comes next.

const result = 2 + 3 * 4;
console.log(result);


// surrounding the + expression in a () allows it to execute first before the *
const reverseResult = (2 + 3) * 4;
console.log(reverseResult);

// Logical and:&& , or:|| operators

// The dot notation . to access object properties

// code block {} 

// accessing array elements [] and [''] for accessing object properties

// or = ||

// and = &&