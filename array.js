const number = [3, 4, 44, 54, 56, 2, 40];
const names = ["Samuel", "Rose", "Ashley", "Laura", "Cornelius"];

// Arrays are of type object
console.log(typeof number);
console.log(number);

console.log(names[2]);

names[1] = 'Olivia';
console.log(names);

const combo = ['July', 4, true, 17.76];
console.log(combo);
console.log(typeof combo[2]);
console.log(combo.length);

combo.push(44);
console.log(combo);
console.log(combo.length);

// Arrays can also contain object literals
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

// if the foreach is assigned to a variable, it will print undefined at the end. if return is used in the foreach only undefined is printed
/* const myTest = tests.forEach( 
    function (tests) {
      console.log('this is ' + tests.id);
    }
);
console.log(myTest); 
*/

// This is better
tests.forEach(function (test) {
  console.log('this is ' + test.id);
});

// outputs the text for all the objects
const myMap = tests.map(
    function (tests) {
        return tests.text;
    }
);
console.log(myMap); 

// outputs all the text of the object whose isTrue = true
const myFilter = tests.filter(
    function (tests) {
    return tests.isTrue === true
}
).map(
    function (tests) {
        return tests.text;
    }
);
console.log(myFilter);

// Arrays can also be created using the 'Constructor' function this is possible because arrays are typeof object
const stars = new Array('Arcturus', 'Betelgeuse', 'Sun', 'Uy Scuti', 'Sirius');

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

pets.push(['Dog', 'Alexei', 4, 'Male', isBig = true]);
console.log (pets);

let selection = nature[0]
console.log(selection);

let selection_1 = nature[1][2];
console.log(selection_1);44