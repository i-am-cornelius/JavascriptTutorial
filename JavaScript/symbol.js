 /* Symbol is a new primitive datatype added to modern javascript(starting with ES6) for creating unique values it is
meant for some specifical use, mainly:

1| To define properties for objects in such a way they don’t appear during
normal iteration, using the for...in loop. These properties are not private; they’re just available
like other properties.

2| To easily define a global registry or dictionary of objects.

3| To define some special well-known methods in objects; it is this feature, which
fills the void of interfaces, that is arguably the most important purpose
of Symbol. */

const myAge = Symbol(5);
const email = 'sam@gmail.com';

let person = {
    name: 'Sam',
    [email]: 'Symsam@gmail.com',
    [myAge]: 2
}

console.log('iteration begins');

for (property in person) {
    console.log(`${property} : ${person[property]}`);
};

console.log('list of visible properties');
console.log(Object.getOwnPropertyNames(person));

console.log('list of symbol properties');
console.log(Object.getOwnPropertySymbols(person));

console.log('accessing a symbol property:');
console.log(person[myAge]);

console.log('changing value...');
person[myAge] = 3;
console.log(person[myAge]);

const regex = /cool/;

process.stdout.write('regex is of type RegExp >> ');
console.log(regex instanceof RegExp);

process.stdout.write('Properties of regex >> ');
console.log(Object.getOwnPropertyNames(regex));

process.stdout.write('Symbol properties of regex >> ');
console.log(Object.getOwnPropertySymbols(regex));

console.log("Symbol properties of regex's prototype >> ");

console.log(Object.getOwnPropertySymbols(Object.getPrototypeOf(regex)));

/*  Arguments passed to the 'Symbol' function are of no significance(that's why the variable 'name'
 displays deprecated when hovered over),calling each 'Symbol()' creates a unique 'Symbol'.
 */
const name = 'Tom';

const tom = Symbol(name);

const jerry = Symbol('Jerry');

const anotherTom = Symbol(name);

console.log(tom);

console.log(typeof (tom));

console.log(tom === jerry);

console.log(tom === anotherTom);
 

Number()
String()
Boolean()
//BigInt()
//null
Symbol()
console.log(Symbol());
console.log(Symbol("Haaa"));
console.log(Symbol());
console.log(Symbol());
console.log(Symbol());
console.log(Symbol());
console.log(Symbol());

const age = Symbol(2);
const age1 = Symbol(2);

console.log(age === age1);
 if (age === age1) {
    console.log('they are equal');
}
else {
    console.log("They are definitely not equal");
} 

