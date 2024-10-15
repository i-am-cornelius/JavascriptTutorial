// Class is NOT an object, it is a template for creating objects 
// class is just a syntactic sugar for writing OOP in javascript, instead of functional prototypes
class Car {
    // The Constructor function set the properties for the objects
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // the functions inside classes are called methods they are available for the objects created from this class
    display() {
        console.log(`Cornelius's ${this.make} ${this.model} is a ${this.year} version`);
    };

    message (){
        console.log(`I love ${this.make} so much`);
    };
};

let newCar = new Car('Mercedes-Benz', 'Maybach', 2021);
console.log(newCar);
newCar.display();


/* // Class expression
let Car = class {

} */
// child class can inherit from the parent class by using the 'extends' keyword
class sportsCar extends Car {
    revEngine() {
        console.log(`the ${this.make} goes vrrrooooommm`)
    }
};

let mySportCar = new sportsCar('Mclaren', 'viper', 2021);

mySportCar.display();
mySportCar.revEngine();
//newCar.revEngine();// it won't work because newCar is created from the parent Car class

// parent class objects can't inherit or take the attribute of the child class objects

//newCar.revEngine(); // Error