const message = "Hello World"
for (let i = 0; i <= 10; i++) {
    console.log(`${i}. ${message}`);
}

// Iterating through an array with the 'for' loop, but the 'For ... of' makes iterating through an array easier
let another_message = "Hi";
const names = ["Nathaniel", "Cornelius", "Kali", "Alex", "Wemimo", "Junaid"];
for (i = 0; i < names.length; i++) {
    const output = names[i]
    console.log(`${another_message}, ${output}`);
}

for (const i of names) {
    const output = i 
    console.log(`${another_message} ${output}, how are you?.`);
}

// while loop. It checks the condition first before executing
let age = 0;
while (age < 10) {
    console.log(age++);
    if (age === 5) {
        break;
    }
}

// Do...while loop executes first and then check the condition. This ensure the program runs at least once even if the condition is false
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

// Count down
// Using for loop
let count = 10;
for(let i = count; i >= 0; i--){
    console.log(i);
}
console.log('-'.repeat(20))

// while loop
count = 5;
while (count > 0) {
    console.log(count);
    count--;
}
console.log('-'.repeat(20))

// do-while while
count = 4;
do {
    console.log(count);
    count--;
} while (count > 0);