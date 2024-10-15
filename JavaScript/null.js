let example = /abc/;
let sentence = "we're just cruising";
let output = sentence.match(example)
console.log(output);
console.log(typeof output);
console.log(typeof null);

if (output === null) {
    console.log('There is no match so it is just null');
};

/* Unlike the 'undefined', 0, empty String, 'Null' means an Object reference was expected for a variable
but there is none set to it. */