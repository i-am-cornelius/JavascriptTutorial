// Strings
let name = new String('sam');
console.log(name);
console.log(name.toString());

console.log(typeof name);

let primitive = 'this is a primitive type';
console.log(primitive);
console.log(typeof primitive);
primitive = primitive.toUpperCase();
console.log(primitive);
console.log(typeof primitive);

// Numbers

let age = new Number(23); // it's an object at this point
console.log(typeof age);
let primitiveAge = age.valueOf();
console.log(typeof primitiveAge);