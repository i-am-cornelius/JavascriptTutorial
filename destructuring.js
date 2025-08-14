/* Destructuring is a way of extracting values from an array or an object into individual
variable. it was introduced into javascript starting with the ES6 */

// Destructuring an array
//let a, b, c, d, e, f, g; // Can be declared
let cities = [
    'Valparaiso',
    'Los Angeles',
    'Tampa',
    'New York City',
    'Tokyo',
    'Adelaide',
    'Christchurch'
];
// [a, b, c, d, e, f, g] = cities; // Then initialized

let [a, b, c, d, e, f, g] = cities; // Declared and initialized straight away
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(`\n${a} is a city in Chile`);
console.log(`${b} is a city in USA`);
console.log(`${c} is a city in USA`);
console.log(`${d} is a city in USA`);
console.log(`${e} is a city in Japan`);
console.log(`${f} is a city in Australia`);
console.log(`${g} is a city in New Zealand\n`); 

// Using the rest parameter
[a, b, ...others] = cities;
console.log(others);
console.log(others[1],'\n');

// Destructuring an object
let student = ({
    id,
    student_name,
    gender,
    //age,
} = {
    id: 1,
    //student_name: 'Isabel',
    age: 20,
    gender: 'female'
})

console.log(student_name); // student_name will be undefined because I did not instantiate it in the object by commenting it out
console.log(gender);
//console.log(age); // age will throw an error because I did not declare the age variable in the destructuring by commenting it out
console.log(id);

let Pet = {
    animal: 'Dog',
    breed: 'Golden retriever',
    age: 3
}
console.log(Pet);
console.log(Pet.animal, Pet.breed, Pet.age);

// You can also use it to swap the values of variables
a = 'how';
b = 'are';
c = 'you';
console.log(a);
console.log(b);
console.log(c);

[a, b, c] = [c , a, b];

console.log(a);
console.log(b);
console.log(c);
