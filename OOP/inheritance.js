class Car {
    // The Constructor function set the properties for the objects
    constructor(make, model, year, owner_name) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.owner_name = owner_name;
    }

    // methods
    display() {
        if (this.owner_name[this.owner_name.length - 1] === 's') {
            console.log(`${this.owner_name}' ${this.make} ${this.model} is a ${this.year} version`);
        } else {
            console.log(`${this.owner_name}'s ${this.make} ${this.model} is a ${this.year} version`);
        }
    }

    review() {
        console.log(`I love ${this.make} so much`);
    }
};

let new_car_1 = new Car('Mercedes-Benz', 'S63 AMG', 2021, 'Cornelius'); // new creates the object
console.log(new_car_1);
new_car_1.display();

// Inheritance
// child class can inherit from the parent class by using the 'extends' keyword
class SportsCar extends Car {
    revEngine() {
        console.log(`the ${this.make} goes vrrrooooommm`)
    }
};

let sports_car_1 = new SportsCar('Mclaren', '720s GT', 2021, "Junaid");
console.log(sports_car_1);

sports_car_1.display(); // inherited
sports_car_1.revEngine(); // own class method
//new_car_1.revEngine(); // Error! because new_car_1 was created from the parent Car class
// inheritance works in a one-way direction parent class can't inherit from a child class objects