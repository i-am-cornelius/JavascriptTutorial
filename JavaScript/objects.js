let car = {
    make: "Mercedes Benz",

    model: "Maybach",

    year: 2020,

    getAgeOfCar: function (year) {
        return 2021 - year;
    },

    printReceipt: function () {
        console.log(`This ${this.make} ${this.model} is worth $ ${this.price}`);

    }

};

console.log(car.year);
// properties can also be accessed using array [] accessor 
console.log(car['year'])

console.log(car.getAgeOfCar(2016));

car.price = 200000

car.printReceipt();

console.log(car);
console.log(typeof car);

// Using destructuring to extract variables

const {make, model} = car;
console.log(model);// they can be called directly like variables without the usual object's dot-notation

// A not-very recommended way to create an object
const student = {}
student.name = "Keith";
student.gender = "male";
student.age = 20;
student['isTall'] = true;

console.log(student);
console.log(typeof student);

// creating objects inside objects

let people = {
    mrWalke: "male",
    mrsLaura: "female",
    students: {
        name: "samantha",
        gender: "female",
        age: 19,
    }
};
console.log(people);
console.log(people.students.name);
console.log(typeof people.students);
// creating arrays inside objects, with the array also having object(s) as value(s)

let example = {
    arr: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        {
            a: "this"
        },
        {
            b: "can"
        },
        {
            c: 'get'
        },
        {
            d: 'messy'
        }
    ]
}
console.log(example);
console.log(typeof example);


const studentData = [{
    id: 1,
    name: "Kirk",
    gender: "Male",
    age: 20,
    college: {
        nameOfCollege: 'Humanities',
        department: 'Archeology',
        level: 300
    }
},
{
    id: 2,
    name: "Karen",
    gender: "Female",
    age: 19,
    college: {
        nameOfCollege: "Engineering",
        department: "Aeronautics",
        level: 200
    }
},

];
console.log(studentData[0].college.nameOfCollege);
//console.log(studentData);
//console.log(typeof studentData);
console.log(JSON.stringify(studentData)); // creates a JSON format of the object

console.log(car.make);
car.printReceipt();
console.log(example.arr[1]);
console.log(student);