/* This is a bad practice, Avoid as much as possible
var myVariable;

var myFunction = function () {
    console.log("me too, i'm at the global level or scope or environment");
}
console.log(myVariable);
myFunction();*/

function age() {

    return 23;

}
//const theAge = age();
//console.log(theAge);
console.log(age());

const theAge = age;
console.log(typeof theAge)


function message() {
    return function () {
        console.log("Hello World!");
    }
}

let myFunction = message();// the inner anonymous function is what get passed to 'myFunction'.
myFunction();


function apology() {
    return function () {
        return "Hey i'm sorry";
    }
}
console.log(apology()());// the double invocation is because of the 2 return keywords for the outer and inner functions