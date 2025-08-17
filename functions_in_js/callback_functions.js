/* A callback is a function passed as an argument to another function, so that 
it can be executed later (or “called back”) once some task is done. */

//1. Default call back function
function do_home_work(home_work_subject ,callback_fn) {
    console.log(`doing my ${home_work_subject} homework📚`); //1. Runs first once the function is invoked
    callback_fn(home_work_subject); //2. calls the call back function
}

function finished_home_work(subject) {
    console.log(`Finished my ${subject} homework🍾`); // 3. executes when the finished_home_work() is invoked as a call back function
}

do_home_work('math', finished_home_work); // math will also be given to finished_home_work() as its argument

// do_home_work() can't be invoked without its call back argument
// do_home_work('math'); // Error

// finished_home_work() can be invoked independently if the subject is provided
finished_home_work('Computer Science');
console.log(`\n${'='.repeat(40)}\n`);

//2. Optional call back function
function do_home_work(home_work_subject ,callback_fn) {
    console.log(`doing my ${home_work_subject} homework📚`); 
    if(typeof callback_fn === 'function') {
        callback_fn(home_work_subject);
    }
}

function finished_home_work(subject) {
    console.log(`Finished my ${subject} homework🍾`);
}

do_home_work('chemistry', finished_home_work);

// do_home_work() can now be invoked independently
do_home_work('Physics');

// Invoked independently if the subject is provided
finished_home_work('Computer Science');
console.log(`\n${'='.repeat(40)}\n`);

// 3. Using a default parameter(provides an empty call back function by default) 
// Added in ES6, so it is perhaps the most modern approach
function do_home_work(home_work_subject ,callback_fn = () => {}) {
    console.log(`doing my ${home_work_subject} homework📚`); 
    callback_fn(home_work_subject);
}

function finished_home_work(subject) {
    console.log(`Finished my ${subject} homework🍾`);
}

do_home_work('chemistry', finished_home_work);

// do_home_work() can now be invoked independently
do_home_work('Physics');

// Invoked independently if the subject is provided
finished_home_work('Computer Science');

// Call backs are helpful and offer flexibility as also seen in function_as_value file, but it can also become entangled and 
// complicated leading to what is called "callback hell" so this problem is solved using promises, async and await.