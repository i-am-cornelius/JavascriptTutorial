let name = 'Jordan';
let age = 18;
let intro = (`My name is ${name} and i am ${age} years old`);

console.log(intro);

// Interpolation

function example() {
    return 1;
}
let interpolation = `Give me ${(example() === 1) ? 'one good reason' : 'a few reasons' } you love football`;
console.log(interpolation);