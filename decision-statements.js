// basic decision syntax
let age = 12;
if (age >= 18) {
    console.log("you are an adult stop acting silly");
} else if (age === 18) {
    console.log("you need to be wiser");

} else {
    console.log("go ahead be stupid");
}

// switch statement

let favFootballer = "messi";

switch (favFootballer.toUpperCase()) {
    case "RONALDO":
        console.log("Best header in football history");
        console.log("Excellent positioning and finishing");
        console.log("Excellent physique");
        console.log("fast and deadly with powerful shots");
        break;
    case "MESSI":
        console.log("Best dribbler");
        console.log("Excellent playmaker");
        console.log("passing and positioning");
        console.log("Excellent vision and finishing");
        break;
    default:
       console.log('he is a footballer');
}
// ternary operator
const x = 1, y = "1"
let result = (x === y) ?"equal" : "not equal";

console.log(result)
console.log(typeof y);

let results = (x !== y) ?
    "yes" :
    "no";

console.log(results);
// it can also be inline

console.log((x === y) ?
    "equal" :
    "not equal");