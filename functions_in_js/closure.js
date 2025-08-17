/* Closure is a combination of functions enclosed together with each inner function having access to the scope of its outer function(s) 
In Javascript lexical environment is important, it is where a code is sits physically and this is crucial to understand closures.
Where the function sits determines what it has access to .*/

// greet() sits in the global environment 

function greet  () {
    let age = 24;
    // message() is a closure inside greet()
    function message(name) {
        // question() is a closure inside message(), yet again inside greet()
        function question(){
            return 'What is your name ?';
        }
        console.log(question());
        return `${name} is ${age} years old`;
    }
    console.log(message('Cornelius'));
}



greet();
console.log("Hello world")
