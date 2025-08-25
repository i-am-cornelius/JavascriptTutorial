/* Javascript is a very nice language, unlike other languages that throws errors immediately, javascript usually 
tries to handle the situation which can sometimes end up causing more harms than good and increase bugs in the code
so, it is better to specifically handle error case, this is recommended for every language but especially true for Javascript */
let nonsense = 2 + 'hello world' * undefined;
console.log(nonsense); // NaN (Instead of throwing an error it is still trying to work around saying "Well, the result is not a number")

function add(a, b) {
    let c = a + b;
    if(Number.isNaN(c)) {
        const err = new Error("This is just wrong");
        return err;
    }else {
        return `The sum is ${c}`;
    }
}
console.log(add(2, 3));
console.log(add(2, nonsense));

function divide(a, b) {
  let c = a / b;
  if (b === 0) {
    throw new Error("You cannot divide by zero");
  } else {
    return `The quotient is ${c}`;
  }
}
// I did not catch the error for both functions because of that Node.js will terminate the function and show a stack trace of the error
console.log(divide(2, 3));
console.log(divide(2, nonsense));

// Custom Error Class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class MathError extends Error {
  constructor(message) {
    super(message);
    this.name = "MathError";
  }
}

// I Improved add function by adding custom error class
function add(a, b) {
  let c = a + b;
  if (Number.isNaN(c)) {
    throw new ValidationError("Invalid numbers passed to add()");
  }
  return `The sum is ${c}`;
}

// Improved divide function by adding custom error class
function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new ValidationError("Both arguments must be numbers");
  }
  if (b === 0) {
    throw new MathError("You cannot divide by zero");
  }
  return `The quotient is ${a / b}`;
}

// Try...Catch Example(treated in detail in try_catch.js file)
try {
  console.log(add(2, 3));
  console.log(add(2, "oops")); // Will throw ValidationError
} catch (err) {
  if (err instanceof ValidationError) {
    console.error("Validation problem:", err.message);
  } else {
    console.error("Unexpected error:", err);
  }
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0)); // Will throw MathError
} catch (err) {
  if (err instanceof MathError) {
    console.error("Math problem:", err.message);
  } else {
    console.error("Unexpected error:", err);
  }
}


