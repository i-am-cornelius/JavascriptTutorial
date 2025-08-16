// Javascript is synchronous and Node.js is single-threaded(Both means the program runs sequentially one line after another)
console.log('first');
console.log('second');
console.log('third');
console.log('fourth');
console.log('-'.repeat(20));

// However to efficiently make use of the processing power sometimes we want things to run asynchronously(more than one at a time concurrently)
// While one thread is waiting for 2 seconds before executing and printing 'second', other threads prints out 'third' and 'fourth'
console.log('first');
setTimeout(() => {
    console.log('second');
}, 2000); // milliseconds = 2 seconds
console.log('third');
console.log('fourth');