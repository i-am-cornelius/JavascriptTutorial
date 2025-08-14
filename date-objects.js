let today = new Date();

//let sam = new Date('December 1, 2021, 02: 03: 04');
let sam = new Date('2021-12-01T02:03:04'); // both 2 ways to do the same thing

console.log(sam);

let elapsedTime = today - sam;
console.log(elapsedTime);

console.log(sam.getDate());
console.log(sam.getTime());
console.log(sam.getFullYear());