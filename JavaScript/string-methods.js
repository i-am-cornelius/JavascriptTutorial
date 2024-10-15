let first = 'Fairness means equal oppurtunities, not equal outcomes';
let second = '  I want to travel to the USA.  ';
let third = '2, 4, 3, 74, 86, 99, 10';

let mySplit = third.split(',');
console.log(mySplit);

let mySlice = first.slice(14, 20);
console.log(mySlice);

let mySubStr = first.substr(14, 6);
console.log(mySubStr)

let mySubString = first.substring(14, 6);
console.log(mySubString);

let myEndsWith = second.endsWith('usa.'.toUpperCase()); // can also be done with 'startsWith' method
console.log(myEndsWith);

let myRepeat = second.repeat(4);
console.log(myRepeat);

console.log(second.length)
let myTrim = second.trim().length;
console.log(myTrim);

// string methods can also be called on string literals not only the variables
console.log('hello world'.toUpperCase());
console.log('Ha '.repeat(4));