/* 
A Promise is an object that represents the eventual completion or failure of an asynchronous operation. It acts as a link between the 
executor function (the “producing code”) and the consuming functions (.then(), .catch()). 

It provides a clean structure to handle the states (pending, fulfilled/resolved, rejected) of an async operation, avoiding " hell".

Example:
- A user tries to make a payment for an online purchase.
- When the user clicks "Pay", a Promise(or promise object) is created.
- The state while the payment is still processing, is called "Pending".
- If the payment succeeds, the Promise is "Fulfilled" (or "Resolved") and returns the result.
- If the payment fails, the Promise is "Rejected" and returns an error message.
*/

// Creating promises
/*const test_promise = new Promise((resolve, reject) => {
    let success = true; // false to fail

    if(success) {
        console.log('Task completed successfully');
    }
    else {
        console.log('Task failed');
    }
})

// Consuming promise using .then() and .catch()
test_promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  })
*/

// Division by zero
/*const divide = (a, b) => {
    return new Promise((resolve, reject) => {
        if(b === 0) {
            reject('Cannot divide by zero');
        }
        else {
            resolve(a / b);
        }
    })
}

divide(10, 0)
    .then(result => console.log(result))
    .catch(error => console.log(error));

divide(90, 10)
    .then(result => console.log(result))
    .catch(error => console.log(error));
*/


// Home work example
/*function do_home_work(subject) {
    // Promise has taken away the need for finished_home_work() in the callback_functions.js file
  return new Promise((resolve, reject) => {
    console.log(`📚 Doing my ${subject} homework...`); 

    setTimeout(() => {
      let success = true; // false to test failure case

      if (success) {
        resolve(`🍾 Finished my ${subject} homework!`);
      } else {
        reject(`💥 Could not finish my ${subject} homework!`);
      }
    }, 1000);
  });
}

// Using .then() and .catch()
do_home_work("Math")
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Chaining Promises
do_home_work("Physics")
  .then(result => {
    console.log(result);
    return do_home_work("Chemistry"); // return another promise
  })
  .then(result => {
    console.log(result);
    return do_home_work("Computer Science"); // Then another
  })
  .then(result => console.log(result))
  .catch(error => console.error(error));*/


// I commented the above because I want to separate the asynchronous execution from mixing up

console.log(`${('-'.repeat(5))} Fixing The Tea making Callback Hell ${('-'.repeat(5))}`);
// Fixing the tea example
// Step 1
function fillKettle() {
  return new Promise((resolve) => {
    setTimeout(() => {
    console.log("1. Fill the kettle");
    resolve();
    }, 0);
  });
}

// Step 2
function placeOnStove() { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const gas_don_finish = false; // true to reject
        if (gas_don_finish) {
            reject("Ahhhh Omo!😭")
        } else {
            console.log("2. Place it on the stove and turn it on");
            resolve(); 
        }
    }, 2000);
  });
}

// Step 3
function waterHeated() {
  return new Promise((resolve) => {
    setTimeout(() => {
    console.log("3. Water has been heated");
    resolve();
    }, 5000);
  });
}

// Step 4
function addMilkAndChocolate() {
  return new Promise((resolve) => {
    setTimeout(() => {
    console.log("4. Put the milk and chocolate in the cup");
    resolve();
    }, 1000);
  });
}

// Step 5
function pourWater() {
  return new Promise((resolve) => {
    setTimeout(() => {
    console.log("5. Pour the water into the cup");
    resolve();
    }, 4000);
  });
}

// Step 6
function stirContents() {
  return new Promise((resolve) => {
    setTimeout(() => {
    console.log("6. Stir the contents of the cup well");
    resolve();
    }, 5000);
  });
}

// Step 7
function enjoyTea() {
  return new Promise((resolve) => {
    setTimeout(() => {
    console.log("7. Enjoy your tea ☕️");
    resolve();
    }, 8000);
  });
}

fillKettle()
    .then(placeOnStove)
    .then(waterHeated)
    .then(addMilkAndChocolate)
    .then(pourWater)
    .then(stirContents)
    .then(enjoyTea)
    .then(() => console.log("Done!"))
    .catch((error) => console.error(error));


// Mistakes: Nesting of consuming functions known as "Promise Hell" or "Pyramid of doom"
function stepOne() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step One Done ✅"), 1000);
  });
}

function stepTwo() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step Two Done ✅"), 1000);
  });
}

function stepThree() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Step Three Failed ❌"), 1000);
  });
}

//1. Nested promises difficult to read
/*
stepOne().then((result1) => {
  console.log(result1);
  stepTwo().then((result2) => {
    console.log(result2);
    stepThree().then((result3) => {
      console.log(result3);
    }).catch((error) => {
      console.error("Error inside stepThree:", error);
    });
  }).catch((error) => {
    console.error("Error inside stepTwo:", error);
  });
}).catch((error) => {
  console.error("Error inside stepOne:", error);
});
*/

//2. Flat chain is cleaner
/*
stepOne()
  .then((result1) => {
    console.log(result1);
    return stepTwo();
  })
  .then((result2) => {
    console.log(result2);
    return stepThree();
  })
  .then((result3) => {
    console.log(result3);
  })
  .catch((error) => {
    console.error("Error caught in one place:", error);
  });
*/

//3. Promise.all and .allSettled is the cleanest, but the won't be any output for the successful steps, rejects all for the failure of one
/*Promise.all([stepOne(), stepTwo(), stepThree()])
  .then((results) => {
    console.log("All results:", results);
  })
  .catch((error) => {
    console.error("One of the promises failed:", error);
  });
*/

//4. Promise.allSettled, settles every step both resolved and failed and prints them out as a map
Promise.allSettled([stepOne(), stepTwo(), stepThree()])
  .then((results) => {
    console.log("All results (settled):", results);
  });


// Overall using async/await with promise is recommended 
