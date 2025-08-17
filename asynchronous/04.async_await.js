// Async/Await is modern syntax built on top of Promises. It replaces the need for .then() and .catch() in consuming functions.
// Async/Await cannot exist without Promises — every async function returns a Promise internally. It complements promise not replace it

// Creating promise
console.log(`${('-'.repeat(5))} Creating promise(basics) ${('-'.repeat(5))}`);
const test_promise = new Promise((resolve, reject) => {
  let success = true; // change to false to test failure

  if (success) {
    resolve("Task completed successfully ✅");
  } else {
    reject("Task failed ❌");
  }
});

// Consuming promise using async/await (eliminating then and catch)
async function runTestPromise() {
  try {
    const result = await test_promise; // waits until the promise resolves/rejects
    console.log(result); // .then
  } catch (error) {
    console.error(error); // .catch
  }
}

runTestPromise();

console.log(`${('-'.repeat(5))} Division by zero ${('-'.repeat(5))}`);
// Divide by 0
const divide = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Error: cannot divide by zero");
    } else {
      resolve(a / b);
    }
  });
};

// Consuming with async/await
async function runDivision(a, b) {
  try {
    const result = await divide(a, b);  // replaces .then
    console.log(result);

  } catch (error) {
    console.error(error); // replaces .catch
  }
}
runDivision(10, 0);
runDivision(90, 10);

console.log(`${('-'.repeat(5))} Homework example ${('-'.repeat(5))}`);
// Homework example with async/await
function do_home_work(subject) {
  return new Promise((resolve, reject) => {
    console.log(`📚 Doing my ${subject} homework`);

    setTimeout(() => {
      let success = true; // change to false to test rejection

      if (success) {
        resolve(`🍾 Finished my ${subject} homework!`);
      } else {
        reject(`💥 Could not finish my ${subject} homework!`);
      }
    }, 1000);
  });
}

async function homework_flow() {
    try {
        let math = await do_home_work("Math");
        console.log(math);

        let physics = await do_home_work("Physics");
        console.log(physics);

        let chemistry = await do_home_work("Chemistry");
        console.log(chemistry);

        let cs = await do_home_work("Computer Science");
        console.log(cs);

    } catch (error) {
        console.error(error);
    }
}
homework_flow();
// It can also accept a list of items
async function homework_flow_1(subjects) {
  try {
    for (let subject of subjects) {
      const result = await do_home_work(subject);
      console.log(result);
    }
  } catch (error) {
    console.error(error);
  }
}

homework_flow_1(["Math", "Physics", "Chemistry", "Computer Science"]);

console.log(`${('-'.repeat(5))} Tea making example with async/await ${('-'.repeat(5))}`);
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
      const gas_don_finish = false; // change to true to reject
      if (gas_don_finish) {
        reject("Ahhhh Omo!😭");
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

// Async/Await version
async function makeTea() {
  try {
    await fillKettle();
    await placeOnStove();
    await waterHeated();
    await addMilkAndChocolate();
    await pourWater();
    await stirContents();
    await enjoyTea();
    console.log("Done!");
  } catch (error) {
    console.error(error);
  }
}

// Run it
makeTea();

console.log(`${('-'.repeat(5))} Fixing chaining promises ${('-'.repeat(5))}`);
function stepOne() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Step One Done ✅"), 1000)
  );
}

function stepTwo() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Step Two Done ✅"), 1500)
  );
}

function stepThree() {
  return new Promise((_, reject) =>
    setTimeout(() => reject("Step Three Failed ❌"), 500)
  );
}

async function runSteps() {
  try {
    const results = await Promise.allSettled([stepOne(), stepTwo(), stepThree()]);
    // Process results
    results.forEach((result, index) => {
      if (result.status === "fulfilled") { // Success status for Promise.allSettled() is "fulfilled", failed is "rejected"
        console.log(`Step ${index + 1} success:`, result.value);
      } else {
        console.error(`Step ${index + 1} failed:`, result.reason);
      }
    });
  } catch (error) { // This won't normally trigger with allSettled, but it's good practice to keep try/catch.
    console.error("Unexpected error:", error);
  }
}
runSteps();

// Promise.All can also be used to make it shorter but invalidates the success of others for one failure
async function runAllSteps() {
  try {
    const results = await Promise.all([stepOne(), stepTwo(), stepThree()]);
    console.log("All results:", results);
  } catch (error) {
    console.error("Error caught:", error);
  }
}
runAllSteps();

async function runWithAllSettled() {
  const results = await Promise.allSettled([stepOne(), stepTwo(), stepThree()]);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Step ${index + 1} success:`, result.value);
    } else {
      console.error(`Step ${index + 1} failed:`, result.reason);
    }
  });
}
runWithAllSettled();

// All of these is a lot so take your time
// You can comment other sections out to see individual examples clearly, otherwise
// The output of the examples mixing up shows asynchronous programming in its glory
