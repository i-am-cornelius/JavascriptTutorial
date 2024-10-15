const number = [3, 4, 44, 54, 56, 2, 40];
const names = ["Samuel", "Rose", "Ashley", "Laura", "Cornelius"];

// Arrays are of type object

console.log(typeof number);
console.log(number);

console.log(names[2]);

names[1] = 'Olivia';
console.log(names);

/*
Although an array may be similar to objects, array may hold a list of data not related to each other.
While an object holds the related properties of a single data element in the form of name/value pairs
*/

const combo = ['July', 4, true, 17.76];
console.log(combo);
console.log(typeof combo[2]);
console.log(combo.length);

combo.push(44);
console.log(combo);
console.log(combo.length);

// Arrays can also hold objects as values

const tests = [{
    id: 1,
    text: "this",
    isTrue: true
},
{
    id: 2,
    text: "can",
    isTrue: true
},
{
    id: 3,
    text: 'really',
    isTrue: false
},
{
    id: 3,
    text: 'get',
    isTrue: false
},
{
    id: 4,
    text: 'messy',
    isTrue: true
}
]

// Looping through an array with 'for of' 
for (let test of tests) {
    console.log(test.text)
    console.log(test.id);
};


const myTest = tests.forEach(
    function (tests) {
      console.log('this is ' + tests.id);
    }
);

console.log(myTest);

const myMap = tests.map(
    function (tests) {
        return tests.text;
    }
);

console.log(myMap);

// array methods can also be attached to each other

const myFilter = tests.filter(
    function (tests) {
    return tests.isTrue === true
}
).map( // map method is attached to the filter method here
    function (tests) {
        return tests.text;
    }
);

console.log(myFilter);

// Arrays can also be created using the 'Constructor' function
// this is possible because arrays are typeof object

const stars = new Array('Acturus', 'Betelgeuse', 'Sun', 'Uy scuti', 'Sirius');

console.log(typeof stars);
console.log(stars);
console.log(stars[2]);

// Multi-dimensional arrays; these are array that contain other arrays

let pets = [
    ['Cat', 'Lily', 2], 
    ['Dog', 'Venus', 1], 
    ['Bunny', 'Pete', 3]
];

// Or they arrays can be created differently and then joined together

let mountains = ['Kilimanjaro', 'Everest', 'Rushmore'];
let rivers = ['Nile', 'Amazon', 'Colorado'];
let lakes = ['Baikal', 'Superior', 'Chad'];

let nature = [mountains, rivers, lakes];

console.log(pets);
console.log(nature);

pets.push(['Snake', 'Shasnaka', 2, 'Female', isBig = true]);
console.log (pets);

let selection = nature[0]
console.log(selection);

let selection_1 = nature[1][2];
console.log(selection_1);44