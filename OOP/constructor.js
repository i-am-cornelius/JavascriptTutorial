// Using constructor to create objects

/* const Gadgets = (type, maker, year) => {
    this.type = type;
    this.maker = maker;
    this.year = year;
    this.review = () => console.log(`${this.type} is made by ${this.maker} and i love it`);

};

const iPhone = new Gadgets('12 pro max', 'Apple', 2020);
console.log(iPhone);
// Arrow functions can't be used to create constructors,
 because the 'this' keyword is not available to arrow functions.
 */
function Cars(make, model, year, ) {
    this.make = make;
    this.model = model;
    this.year = year;
   /*   this.fullDetails = () => {
      ;  return `${this.make} ${this.model} ${this.year}`
    }  */ 
};
// to make the code more efficient it is better to place the methods on the prototype
Cars.prototype.fullDetails = function () {
    return `${this.make} ${this.model} ${this.year}`
};
// the 'new' keyword is the constructor 

car1 = new Cars('Mercedes Benz', 'Maybach', 2020);
console.log(car1)
console.log(car1.year);
car1.fullDetails();

car2 = new Cars('Porsce', 'Panamera', 2021);
console.log(car2);
console.log(car2.make);
console.log(car2.fullDetails());

/* what make a function an object has nothing to do with the function itself or how it is created, but 
rather how it is called which is by adding the 'new' keyword thus making it a constructor function*/

function myfunction() {
    console.log('Hello World');
    console.log(typeof myfunction);
};

let newfunction = new myfunction(); // the 'new' keyword converts it to an object, it can no longer be invoked like a normal function, but
console.log(newfunction); // at the same time nothing can really be done with this type of object
console.log(typeof newfunction)
//newfunction()// Error

// in a nutshell how a function is called have an impact on the function, it's content, type etc. 