/* Closure is a combination of funtions enclosed together with each inner 
function having acces to the properties of the outer functions 

In Javascript each closure creates a lexical environment. lexical environment is where a code is sitting*/

// the greet function sits in the global environment 

function greet  () {

    let age = 24;

    // message is a closure inside the greet function
    function message(name) {

        // question is a closure inside message, yet again inside greet
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
