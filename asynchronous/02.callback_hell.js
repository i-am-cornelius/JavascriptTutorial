// Using the tea executions
/* Because the setTimeOut() on its own will execute them randomly based on the time, putting each step in a function and 
taking the next step as a callback allow one step to wait for the other before executing*/ 
// Step 1
function fillKettle(callback) {
  setTimeout(() => {
    console.log("1. Fill the kettle");
    callback();
  }, 0);
}

// Step 2
function placeOnStove(callback) { 
  setTimeout(() => {
    console.log("2. Place it on the stove and turn it on");
    if(callback) callback(); // for safer code, you can add it to the rest if you want
  }, 2000);
}

// Step 3
function waterHeated(callback = () => {}) { // default empty function also for safety use either this or the one in step 2
  setTimeout(() => {
    console.log("3. Water has been heated");
    callback();
  }, 5000);
}

// Step 4
function addMilkAndChocolate(callback) {
  setTimeout(() => {
    console.log("4. Put the milk and chocolate in the cup");
    callback();
  }, 1000);
}

// Step 5
function pourWater(callback) {
  setTimeout(() => {
    console.log("5. Pour the water into the cup");
    callback();
  }, 4000);
}

// Step 6
function stirContents(callback) {
  setTimeout(() => {
    console.log("6. Stir the contents of the cup well");
    callback();
  }, 5000);
}

// Step 7
function enjoyTea(callback) {
  setTimeout(() => {
    console.log("7. Enjoy your tea ☕️");
    callback();
  }, 8000);
}

console.log(`${('-'.repeat(5))} Execution Sequence ${('-'.repeat(5))}`);
fillKettle(() => {
  placeOnStove(() => {
    waterHeated(() => {
      addMilkAndChocolate(() => {
        pourWater(() => {
          stirContents(() => {
            enjoyTea(() => {
              console.log("Done!");
            });
          });
        });
      });
    });
  });
});

/* Works but I am approaching the region of callback hell, where functions are nested so much that they are difficult for 
the programmer to follow the flow of execution due to the nested complexity. So, solution? Promise.*/
