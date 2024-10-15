const river = 'Colorado';

const firstFunction = () => {
    const river = 'Thames';
    console.log(river);
}

const secondFunction = () => {
    const river = 'yangste';
    firstFunction();
    console.log(river);
    
}

console.log(river);

secondFunction();

function greet(name) {
    return `Hey ${name}, how are you`;
}
console.log(greet ("Cornelius"));







