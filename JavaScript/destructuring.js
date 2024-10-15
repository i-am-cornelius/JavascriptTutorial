/* Destructuring is a way of extracting values from an array or an object into individual
variable. it was introduce into javascript starting with the ES6 */
// Destructuring an array
//let a, b, c, d, e, f, g;

let cities = [
    'Valparaiso',
    'Los Angeles',
    'Tampa',
    'New York City',
    'Tokyo',
    'Adelaide',
    'Christchurch'
];

//let [a, b, c, d, e, f, g] = cities;
/* console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(`${a} is a city in Chile`);
console.log(`${b} is a city in USA`);
console.log(`${c} is a city in USA`);
console.log(`${d} is a city in USA`);
console.log(`${e} is a city in Japan`);
console.log(`${f} is a city in Australia`);
console.log(`${g} is a city in New Zealand`); */


// Using the rest parameter

//let others;

[a, b, ...others] = cities;
console.log(a);
console.log(b);
console.log(others);
console.log(others[1]);

/* // Destructuring an object

let student = ({
    id,
    name,
    gender,
    //age,
} = {
    id: 1,
    //name: 'Isabel',
    age: 20,
    gender: 'female'
})

// name will be undefined because i did not create it in the object by commenting it out
console.log(name);

console.log(gender);

// age will throw an error because i did not declare the age variable in the destruturing by commenting it out
//console.log(age);

let Pet = {
    animal: 'dog',
    //breed: '',
    age: 3
}

let {animal, breed = 'Golden retriever', age} = Pet;
console.log(animal);
console.log(breed);
console.log(age);

// we can also use it to swap the values of 2 or more variables
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


 */