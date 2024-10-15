let parentCar = {
    make: 'Mercedes-Benz',
    model: 'Maybach',
    year: 2020,
};

console.log(parentCar);
console.log(typeof parentCar);

let childCar = Object.create(parentCar);

console.log(childCar.make);

console.log(Object.getPrototypeOf(childCar));

let myPrototype = Object.getPrototypeOf(childCar);
console.log(myPrototype.year);

console.log(childCar.price);

parentCar.price = '$ 200,000';
console.log(childCar.price);

let parentOwn = parentCar.hasOwnProperty('price');
let childOwn = childCar.hasOwnProperty('price');
let parentOwn2 = parentCar.hasOwnProperty('make');
let childOwn2 = childCar.hasOwnProperty('make');
console.log(parentOwn);
console.log(childOwn);
console.log(parentOwn2);
console.log(childOwn2);

console.log(childCar)
childCar.make = 'Rolls Royce';
console.log(childCar);

console.log(parentCar.milage);
console.log(childCar.milage);

childCar.milage = '5000 km';
console.log(parentCar.milage);
console.log(childCar.milage);

let parentOwn3 = parentCar.hasOwnProperty('milage');
let childOwn3 = childCar.hasOwnProperty('milage');
console.log(parentOwn3);
console.log(childOwn3);