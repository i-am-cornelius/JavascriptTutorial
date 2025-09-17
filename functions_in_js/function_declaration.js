message();
function message() {
    console.log("Hello World!");
};

console.log(calculate_tax(450));
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
function calculate_tax(amount) {
    let result = amount * 0.002245;
    return "$ " + result;
}

console.log(calculate_tax(400));

// it can also be assigned to a variable
const tax = calculate_tax(100);
console.log(tax);