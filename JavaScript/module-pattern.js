/*this section deals with writing code inside block scope(practicing encapsulation), to 
avoid writing our code in the global scope, which can lead to many errors 
e.g name collision, excessive computer memory usage etc.
Writing code in the global scope should be avoided as much as possible */

// step 1. IIFE (immediately invoked function expression)

const example = (function () {
    // scoped code can't be called outside the function
    let count = 0;

    function displayMessage(message) {
        console.log(message + '---' + count);

    }

    displayMessage('Hello World');

    // return an object.returning the propeties as object makes 
    //it accessible outside the function without messing up the global environment with global scope variables

    return {
        //value: count,

        get: function () {
            return count;
        },
        set: function (value) {
            count = value;
        },

        increment: function () {
            count += 1;
            displayMessage('After increment: ');
        },

        reset: function () {
            displayMessage('Before reset: ');
            count = 0;
            displayMessage('After reset: ');
        }
    }
})();

console.log(example.count);

// this accidentally creates a closure

console.log(example.value);
example.increment();
example.increment();
example.increment();
example.reset();
example.set(7);
console.log(example.get());
example.reset();