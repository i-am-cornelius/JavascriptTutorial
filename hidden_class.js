/* The code below is not optimized. The execution will be slow because by setting up the value 
of the objects different from the way they were instantiated inside the class will cause a bit 
of confusion for the Javascript compiler due to something called hidden class(s). The hidden 
class is what the compiler under the hood uses to know that 2 different objects both have the 
same properties and are both instances of the same class, this allows for a bypass of dictionary 
lookup, instead, it directly refers to the hidden class, leading to an enormous increase in 
execution speed. So, setting up values for object different from how the properties were 
instantiated in the class will make the compiler think that there are different hidden classes 
for the objects instead of one, this will in turn slow down the execution time */


class Phone {
    constructor(maker, name) {
        this.maker = maker;
        this.name = name;
    }
}

const obj_1 = new Phone('Apple', 'iPhone 13');
const obj_2 = new Phone('Samsung', 'S22 Ultra');
console.log(obj_1);
console.log(obj_2);

/* It is a totally valid Javascript code to add more properties other than those instantiated 
in the class, but this approach is not an optimized one. The reason is because the order is 
different e.g for obj1 it is (maker, name, color, oS) while the obj2 (maker, name, oS, color),
and this results in the creation of 2 different hidden classes even though they are both objects
created from the same class.*/

obj_1.color = 'white';
obj_1.oS = 'iOS 15';
obj_2.oS = 'Android 11';
obj_2.color = 'burgundy';
console.log(obj_1);
console.log(obj_2);



// This is the more optimized version of the code.
class Phone {
    constructor(maker, name) {
        this.maker = maker;
        this.name = name;
    }
}
const iPhone = new Phone('Apple', 'iPhone 12');
const galaxy = new Phone('Samsung', 'S22 Ultra');
console.log(iPhone);
console.log(galaxy);
// and setting the values of the dynamic properties in order

iPhone.color = 'grey';
iPhone.oS = 'iOS 15';
galaxy.color = 'black';
galaxy.oS = 'Android';  
console.log(iPhone);
console.log(galaxy);