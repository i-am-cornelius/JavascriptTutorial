// Synchronous programming is a style of program execution where commands are executed one after another in a linear model(line by line)
console.log('first');
console.log('second');
console.log('third');
console.log('fourth');
console.log('='.repeat(20));

console.log('first');
setTimeout(() => {
    console.log('second');
}, 2000); // milliseconds = 2 seconds
console.log('third');
console.log('fourth');

// imagine trying to make tea
// Synchronous execution
console.log(`${('-'.repeat(5))} Synchronous Execution(line by line) ${('-'.repeat(5))}`)
console.log('1. fill the kettle');
console.log('2. place it on the stove and turn it on');
console.log('3. water has been heated');
console.log('4. put the milk and chocolate in the cup');
console.log('5. pour the water into the cup');
console.log('6. stir the contents of the cup well');
console.log('7. enjoy your tea');

// Asynchronous execution using setTimeOut function (time in milliseconds)
// This is to show how different parts of the program can run asynchronously not necessarily to show the steps for making tea
console.log(`${('-'.repeat(5))} Asynchronous Execution(different parts concurrently) ${('-'.repeat(5))}`)
setTimeout(() => {
    console.log('1. fill the kettle');
}, 0);

setTimeout(() => {
    console.log('2. place it on the stove and turn it on');
}, 2000);

setTimeout(() => {
    console.log('3. water has been heated');
}, 5000);

setTimeout(() => {
    console.log('4. put the milk and chocolate in the cup');
}, 1000);

setTimeout(() => {
    console.log('5. pour the water into the cup');
}, 4000);

setTimeout(() => {
    console.log('6. stir the contents of the cup well');
}, 5000);

setTimeout(() => {
    console.log('7. enjoy your tea');
}, 8000);

