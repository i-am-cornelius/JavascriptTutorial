/* Inline caching is in simple terms a short cut to a value or property*/
function findUser(user) {
    return `The full name ${user.firstName} ${user.lastName}`
}


const user = {
    firstName: 'John',
    lastName: 'Doe'
}
console.log(findUser(user));
/* if this findUser(user) are called multiple times,
then it will be optimized (inline cached) to just be and 'found John Doe', 
thus, the interpreter will be a little bit slower when it is given a new value. */