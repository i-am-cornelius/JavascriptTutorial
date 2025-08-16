/* Javascript is a very nice language, unlike other languages that throws errors immediately, javascript usually 
tries to handle the situation which can sometimes end up causing more harms than good and increase bugs in the code */
let nonsense = 2 + 'hello world' * undefined;
console.log(nonsense); // NaN (Instead of throwing an error it is still trying to work around saying "Well, the result is not a number")

function add_1(a, b) {
    let c = a + b;
    if(Number.isNaN(c)) {
        const err = new Error("This is just wrong");
        return err;
    }else {
        return `The sum is ${c}`;
    }
}
console.log(add_1(2, 3));
console.log(add_1(2, nonsense));

function add_2(a, b) {
  let c = a + b;
  if (Number.isNaN(c)) {
    throw new Error("This is just wrong");
  } else {
    return `The sum is ${c}`;
  }
}
// I did not catch the error for both functions so Node.js will terminate the function and show a stack trace of the error
console.log(add_2(2, 3));
console.log(add_2(2, nonsense));