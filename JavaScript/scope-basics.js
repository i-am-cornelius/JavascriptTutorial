/* let x = "Hey i'm first";

let scopeTest = () => {
    //console.log(x); //Error because there is a variable named 'x' in this scope, so the log() function
    // will make use of the variable 'x' in that scope instead of looking to the global environment, 
    // although it is available later, it has not been declared before the log() that leads to th error.
    let x = "I'm just here";

    if (x !== "") {
        console.log(x);
        let z = "Hey i'm third"
        console.log(z);
    }

    //console.log(z);

    let y = "Hey i'm second";
    console.log(y);
}

scopeTest();

console.log(x);

//console.log(y); */

/* In the example below, the code will throw a refrence error because we used let keyword to declare the variables, but
if we switch the let keyword to var it will become undefined because of var's nuanced nature of being somehow available 
even before it is declared 
 */
let a = 1;
function example() {
  console.log(a);
  let a = 2;
}
example();