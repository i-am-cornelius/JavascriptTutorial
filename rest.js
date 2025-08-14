let a = [1, 2, 3];
let b = [4, 5, 6];
//let c = a.concat(b);

// Using the spread operator// we will comment out the concat()

let c = [...a, ...b];
console.log(c);

let d = ['john', ...a, 'sam'];
console.log(d);

console.log(c.push('hi'))

// we can also print out the array as a string using the spread operator
console.log(...c);

// objects
let Obj1 = {
    a: 'apple',
    b:'ball'
}

let Obj2 = {
    x: 1,
    y: 2
}

let Obj = {...Obj1, ...Obj2};

console.log(Obj);

// the Rest Operator

let animal = ['duck', 'cat', 'otter', 'leopard', 'dog'];
//console.log(animal);

/* [m, n, ...theRest] = animal;
console.log(m);
console.log(n);
console.log(theRest); */

function myRest(num1, num2, ...animal) {
    return num1 + num2 + animal;
}

console.log(myRest(2, 3, ' duck', 'cat', 'otter', 'leopard', 'dog'));

