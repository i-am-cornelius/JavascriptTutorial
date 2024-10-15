message();
function message() {
    console.log("Hello World!");
};

console.log(calculateTax(450));
/* function are first class citizens they can be called before where they are
 declared, but the best practice is to declare before used. */
// the best way to use functions is to return the value instead of hard-coding the console.log
function greetings(name) {
    return "Hi " + name + " nice to meet you";
};

console.log(greetings("Cornelius and Ashley"));
console.log(greetings("Natalie"));
console.log(greetings("Erica"));

// performing tasks inside functions

function calculateTax(amount) {
    let result = amount * 0.002245;
    return "$ " + result;
}

console.log(calculateTax(400));

// it can also be assigned to a variable
const tax = calculateTax(100);
console.log(tax);