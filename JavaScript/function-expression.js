// anonymous function expression
setTimeout(function () {
    console.log("i waited 5 seconds");
}, 5000);

//------------------------------------------------------------------
let counter = 0;

function timeOut() {
    function myCounter () {
        console.log("hi " + counter++);
        timeOut();
    }
    setTimeout(myCounter(), 2000);
};
timeOut(); // stop with ctrl c 

// immediately invoked function expression a.k.a IIFE
const example = (function () {
    console.log("hi, this is an immediately invoked function expression");
})();