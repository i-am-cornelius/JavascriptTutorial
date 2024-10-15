let a = "This is in the global scope";

function outer () {
    let a = "inside the outer function scope";
    console.log(a);

    function inner (){
        let a = "inside the inner function scope";
        console.log(a);
    }
    inner();

}
outer();

console.log(a);