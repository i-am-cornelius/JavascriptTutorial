const message = " Hello World"
for (apology = 0; apology <= 10; apology++) {
    console.log(apology + message);
}

// Iterating through an array with the 'for' loop, but the 'For ... of' makes iterating through an array easier

let anotherMessage = "I love you";
const names = ["natalie", "Cornelius", "Ashley", "lexi", "Olivia", "jasmine"];
/* for (i = 0; i < names.length; i++) {
    const output = names[i]
    console.log(`${anotherMessage}, ${output}`);
} */

for (const i of names) {
    const output = i 
    console.log(`${anotherMessage} ${output} so much.`);
}

// using the while loop. It checks the condition first before executing

let age = 0;
while (age < 10) {
    console.log(age++);
    if (age === 5) {
        break;
    }
}

// Using the Do...while loop. executes first and then check the condition.
// it will rub at least once even if the condition is false
age = 14;
do {
    console.log(age);
} while (age < 5);



// Using FOR...OF to iterate through an array

for (let person of names) {
    console.log(person);
};

// this syntax outputs all the values as key/value pairs with the index number and the values as strings 
for (let person of names.entries()) {
    console.log(person);
};
// this one outputs the index with i as the index variable alongside the values 
for (const [i, name] of names.entries()) {
    console.log(i + ' >> ' + name);
};
