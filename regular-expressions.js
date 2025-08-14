// Regex can be created with forward slashes /
let pattern = /always/;
console.log(pattern);
console.log(typeof pattern);

let example = 'this is always a test of mental capacity';

// The test method is used to check if the pattern exist in the string 
console.log(pattern.test(example)); // this will return a boolean if we can/can't find "always" in example

console.log(example.replace(pattern, 'not')); // Replaces the value inside pattern

//console.log(example.match(pattern));

let match = example.match(pattern);
console.log(match.index);