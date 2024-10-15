let countries = ['Taiwan', 'Austria', 'Japan', 'Sweden', 'Finland'];
let rivers = ['missisipi', 'amazon', 'nile', 'congo', 'yangste'];

let ages = [4, 5, 6, 12, 20, 34, 42, 1];
let figures = [1, 1, 2, 22, 4, 7, 89, 76];

// concat
let myConcat = ages.concat(figures);
console.log(myConcat);

// every
console.log(
    myConcat.every(
        (numbers) =>
        numbers < 100

    )
) // the 'some' method can also be used the same way

console.log(
    myConcat.some(
        (number) =>
        number > 100
    )
)

// join
let myJoin = ages.join('/');
console.log(myJoin);

let myJoin2 = myConcat.join('|');
console.log(myJoin2)

// push
rivers.push('potomac');
console.log(rivers);

//pop
rivers.pop();
console.log(rivers);

// unshift
countries.unshift('USA');
console.log(countries);

// methods can also be used directly without creating a new variable e.g
console.log(rivers.concat(figures));
console.log(countries.push('Ukraine'));// this line returns just the lenght of the array countries
console.log(countries); 

// shift
ages.shift();
console.log(ages);

// unshift
ages.unshift(1, 2, 3, 4);
console.log(ages);

// filter
let myFilter = myConcat.filter(
    anyNumber => {
        if (anyNumber <= 10)
            return anyNumber;
    }
);

console.log(myFilter);

// forEach
countries.forEach(
    (name) => console.log(`${name} is a developed country`)
);

// stringify
let myJson = JSON.stringify(countries);
console.log(myJson);

console.log(Array.isArray(countries));

// map



