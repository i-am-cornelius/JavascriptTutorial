// Static methods are used by the class itself not the objects
class Math {
    static add(a, b) {
        return a + b;
    }
    static multiply(a, b) {
        return a * b;
    }
}
console.log(Math.add(2, 3));
console.log(Math.multiply(2, 3));

// Static properties and methods
class Person {
    static #adult_age = 18; // Private static property
    static count_persons = 0; // Static property

    constructor(name, age) {
        this.name = name;
        this.age = age;
        Person.count_persons++; // simply counts the number of objects created
    }

    static isAdult(age) {
        return age >= Person.#adult_age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }

    static no_of_persons() {
        if(Person.count_persons === 1) {
            console.log(`${Person.count_persons} person object created`)
        } else if (Person.count_persons > 1){
            console.log(`${Person.count_persons} person objects created`)
        } else {
            console.log("No person object has been created");
        }
    }
}

Person.no_of_persons();

const person_1 = new Person("John", 25);
person_1.greet();
console.log(Person.isAdult(person_1.age)); // static method
Person.no_of_persons();


const person_2 = new Person("Jane", 17);
person_2.greet();
console.log(Person.isAdult(person_2.age));
Person.no_of_persons();


