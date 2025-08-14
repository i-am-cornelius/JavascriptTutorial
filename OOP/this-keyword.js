/* the THIS keyword depends on how a function is created and Called (proper or arrow functions),
an object can be passed as the first argument to invoke a funtion and the THIS keyword
 will be bound to it  */
function first() {
    return this;
}
// 'global' is the top level for node, 'window' for the browser. the 'globalThis' can be used for both
console.log(first() === global);// 'window' will be used if the code will be executed in the browser 
console.log(first() === undefined);
console.log(first() === unescape);

let myObject = {
    value: 'Hey whatsup'
};

// this property is set on the global object 
global.value = 'i am the global object';

function third(name) {
    return this.value + name;
}

console.log(third(' Cornelius'));

/* Both the 'call' and 'apply' methods can be used to set what you want to represent the THIS keyword
the only difference is how additional arguments to the function are passed  */
console.log(third.call(myObject, ' stephanie'));
console.log(third.apply(myObject, [' lexi']));