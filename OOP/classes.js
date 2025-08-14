// Class is a template for creating objects 
// class is more of a syntactic sugar for writing OOP in javascript, instead of functional prototypes
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

let new_car_2 = new Car('Porsche', 'Cayenne turbo gt', 2021, "John");
console.log(new_car_2);
new_car_2.display();

// Accessing the properties directly from outside the class
console.log(new_car_1.make);
console.log(new_car_1.model);

// Encapsulation (hiding properties)
class Student {
    // These private properties are not accessible from the outside
    #student_name;
    #student_gender;
    #student_matric_no;

    constructor(name, gender, matric_no) {
        this.#student_name = name;
        this.#student_gender = gender;
        this.#student_matric_no = matric_no;
    }

    intro () {
        console.log(`${this.#student_gender} student ${this.#student_name} has matric number ${this.#student_matric_no}`);
    }

    // Since the properties cannot be modified from the outside, specialized methods(Setters and Getters) are used
    // Setters(sets the value of the properties)
    set set_name(student_name) {
        this.#student_name = student_name;
    }
    set set_gender(student_gender) {
        this.#student_gender = student_gender;
    }
    set set_matric_no(student_matric_no) {
        if(student_matric_no < 1) {
            console.error("Invalid matric number");
            return;
        }
        this.#student_matric_no = student_matric_no;
    }
    // Getters (returns the value of the properties)
    get get_name() {
        return this.#student_name;
    }
    get get_gender() {
        return this.#student_gender;
    }
    get get_matric_no() {
        return this.#student_matric_no;
    }
};

let student_1 = new Student("John Doe", "Male", 123456);
console.log(student_1);
student_1.intro();

let matric = student_1.get_matric_no;
console.log(matric);

// student_1.student_matric_no = 3938; // Unlike a stricter language like C++, there is no error but also no effect

student_1.set_matric_no = -654321; // using the setter to set the value
matric = student_1.get_matric_no;
student_1.intro();
console.log(matric);
