// Arrow function is a shorthand syntax for creating functions

// This is the traditional function
function nameOfFunction(parameters) {
    // Body of the function
}

// The all-new Arrow funtions

const nameOfFunctions = (parameter) => {
    // Body of function
}

const greet = (name) => {
    return console.log(`Hi ${name}`);
};

greet('Isabel');

const multiply = (x, y) => {
    return x * y;
};

console.log(multiply(2, 3));

let cities = ['Tokyo', 'Las Vegas', 'Stockholm', 'London', 'Saint Petersburg'];
cities.map((city) => {
    console.log(`${city} is an Alpha city`)
});

console.log(cities);

// The 'map' method can be assigned to a variable to create a new array entirely.
let countries = ['Lichenstein', 'Albania', 'Estonia', 'Slovenia', 'Luxembourg'];
let newArray = countries.map((country) => {
    return `${country} is an European country`
});

console.log(newArray);
console.log(countries);