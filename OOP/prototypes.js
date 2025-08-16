/*JavaScript uses prototypal inheritance - objects inherit directly from other objects, not from classes. 
This is fundamentally different from classical inheritance in other OOP languages*/

// 1: Basic Prototype Concepts

// 1.1 Creating objects with Object.create()
console.log("\n1.1 Basic Object Creation and Inheritance");

let parentCar = {
    make: 'Mercedes-Benz',
    model: 'S63 AMG',
    year: 2020,
    start() {
        return `${this.make} ${this.model} is starting...`;
    },
    getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
};

console.log("Parent Object:", parentCar);
console.log("Type of parentCar:", typeof parentCar);

// Create child object that inherits from parent
let childCar = Object.create(parentCar);

console.log("\nChild accessing inherited properties:");
console.log("childCar.make:", childCar.make);
console.log("childCar.start():", childCar.start());

// 1.2 Understanding the prototype chain
console.log("\n1.2 Prototype Chain Examination");

console.log("Child's prototype:", Object.getPrototypeOf(childCar));
console.log("Is parentCar the prototype of childCar?", Object.getPrototypeOf(childCar) === parentCar);

let myPrototype = Object.getPrototypeOf(childCar);
console.log("Accessing parent property through prototype:", myPrototype.year);

// 1.3 Dynamic property addition and inheritance
console.log("\n1.3 Dynamic Property Addition");

console.log("childCar.price before addition:", childCar.price); // undefined

// Add property to parent - child automatically inherits it
parentCar.price = '$200,000';
console.log("After adding price to parent:");
console.log("childCar.price:", childCar.price); // Inherited from parent

// 1.4 Property ownership vs inheritance
console.log("\n1.4 Property Ownership Analysis");

console.log("Parent owns 'price':", parentCar.hasOwnProperty('price')); // true
console.log("Child owns 'price':", childCar.hasOwnProperty('price'));   // false - because it is inherited
console.log("Parent owns 'make':", parentCar.hasOwnProperty('make'));   // true
console.log("Child owns 'make':", childCar.hasOwnProperty('make'));     // false - because it is inherited

// 1.5 Property shadowing (overriding)
console.log("\n1.5 Property Shadowing");

console.log("Before shadowing:");
console.log("childCar.make:", childCar.make);

childCar.make = 'Rolls Royce'; // Creates own property, shadows parent's
console.log("\nAfter setting childCar.make = 'Rolls Royce':");
console.log("parentCar.make:", parentCar.make); // Still Mercedes-Benz
console.log("childCar.make:", childCar.make);   // Now Rolls Royce
console.log("Child now owns 'make':", childCar.hasOwnProperty('make')); // true

// 1.6 Adding properties to child
console.log("\n1.6 Adding Properties to Child");

console.log("Before adding mileage:");
console.log("parentCar.mileage:", parentCar.mileage); // undefined
console.log("childCar.mileage:", childCar.mileage);   // undefined

childCar.mileage = '5000 km';
console.log("\nAfter adding mileage to child:");
console.log("parentCar.mileage:", parentCar.mileage); // still undefined
console.log("childCar.mileage:", childCar.mileage);   // 5000 km

console.log("Parent owns 'mileage':", parentCar.hasOwnProperty('mileage')); // false
console.log("Child owns 'mileage':", childCar.hasOwnProperty('mileage'));   // true

// 2: Constructor Functional Prototypes (Function constructors pre-ES6 way of creating "classes")


function Car(make, model, year) {
    // Properties specific to each instance
    this.make = make;
    this.model = model;
    this.year = year;
}

// Methods added to prototype (shared by all instances)
Car.prototype.start = function() {
    return `${this.make} ${this.model} is starting...`;
};

Car.prototype.getAge = function() {
    return new Date().getFullYear() - this.year;
};

Car.prototype.getInfo = function() {
    return `${this.year} ${this.make} ${this.model}`;
};

// Adding a static-like method to the constructor itself
Car.totalCars = 0;
Car.incrementCount = function() {
    this.totalCars++;
};

// Create instances using 'new' keyword
let bmw = new Car('BMW', 'M3', 2022);
let audi = new Car('Audi', 'RS6', 2021);
Car.incrementCount();
Car.incrementCount();

console.log("BMW info:", bmw.getInfo());
console.log("Audi info:", audi.getInfo());
console.log("BMW start:", bmw.start());
console.log("BMW age:", bmw.getAge(), "years");

// 2.2 Prototype relationships
console.log("\n2.2 Prototype Relationships");

console.log("bmw instanceof Car:", bmw instanceof Car);
console.log("bmw.__proto__ === Car.prototype:", bmw.__proto__ === Car.prototype);
console.log("Car.prototype.constructor === Car:", Car.prototype.constructor === Car);
console.log("bmw.constructor === Car:", bmw.constructor === Car);
console.log("Total cars created:", Car.totalCars);

// 2.3 Inheritance with constructor functions
console.log("\n2.3 Constructor Function Inheritance");

// Parent constructor
function Vehicle(make, year, type) {
    this.make = make;
    this.year = year;
    this.type = type;
}

Vehicle.prototype.start = function() {
    return `${this.make} ${this.type} is starting...`;
};

Vehicle.prototype.getAge = function() {
    return new Date().getFullYear() - this.year;
};

Vehicle.prototype.getBasicInfo = function() {
    return `${this.year} ${this.make} ${this.type}`;
};

// Child constructor
function ElectricCar(make, year, batteryCapacity, range) {
    // Call parent constructor with current context
    Vehicle.call(this, make, year, 'Electric Car');
    
    // Child-specific properties
    this.batteryCapacity = batteryCapacity;
    this.range = range;
    this.batteryLevel = 100;
}

// Set up prototype inheritance
ElectricCar.prototype = Object.create(Vehicle.prototype);
ElectricCar.prototype.constructor = ElectricCar; // Fix constructor reference

// Add child-specific methods
ElectricCar.prototype.charge = function(amount = 100) {
    this.batteryLevel = Math.min(100, this.batteryLevel + amount);
    return `${this.make} charged to ${this.batteryLevel}%`;
};

ElectricCar.prototype.getRange = function() {
    return `${this.range} miles on full charge`;
};

// Override parent method (polymorphism)
ElectricCar.prototype.start = function() {
    if (this.batteryLevel > 0) {
        return `${this.make} electric vehicle starting silently... Battery: ${this.batteryLevel}%`;
    }
    return `${this.make} cannot start - battery empty!`;
};

// Method that calls parent method
ElectricCar.prototype.getDetailedInfo = function() {
    return `${this.getBasicInfo()} - Battery: ${this.batteryCapacity}kWh, Range: ${this.range} miles`;
};

let tesla = new ElectricCar('Tesla', 2023, 100, 405);
tesla.batteryLevel = 85;

console.log("Tesla detailed info:", tesla.getDetailedInfo());
console.log("Tesla start:", tesla.start());
console.log("Tesla charge:", tesla.charge(10));
console.log("Tesla range:", tesla.getRange());

// 2.4 Inheritance chain verification
console.log("\n2.4 Inheritance Chain Verification");

console.log("tesla instanceof ElectricCar:", tesla instanceof ElectricCar);
console.log("tesla instanceof Vehicle:", tesla instanceof Vehicle);
console.log("tesla instanceof Object:", tesla instanceof Object);

console.log("\nPrototype chain:");
console.log("tesla.__proto__ === ElectricCar.prototype:", tesla.__proto__ === ElectricCar.prototype);
console.log("ElectricCar.prototype.__proto__ === Vehicle.prototype:", 
    ElectricCar.prototype.__proto__ === Vehicle.prototype);
console.log("Vehicle.prototype.__proto__ === Object.prototype:", 
    Vehicle.prototype.__proto__ === Object.prototype);
console.log("Object.prototype.__proto__ === null:", Object.prototype.__proto__ === null);

// 3: Advanced Prototype Manipulation performing dynamic prototype modification
function SmartPhone(brand, model) {
    this.brand = brand;
    this.model = model;
    this.apps = [];
    this.isOn = false;
}

SmartPhone.prototype.powerOn = function() {
    this.isOn = true;
    return `${this.brand} ${this.model} powered on`;
};

SmartPhone.prototype.installApp = function(appName) {
    if (this.isOn) {
        this.apps.push(appName);
        return `${appName} installed successfully`;
    }
    return "Please power on the device first";
};

let iPhone = new SmartPhone('Apple', 'iPhone 14');
let samsung = new SmartPhone('Samsung', 'Galaxy S23');

console.log(iPhone.powerOn());
console.log(iPhone.installApp('Instagram'));

// Dynamically add new method to ALL instances via prototype
SmartPhone.prototype.getSystemInfo = function() {
    return `${this.brand} ${this.model} - Apps: ${this.apps.length}, Status: ${this.isOn ? 'On' : 'Off'}`;
};

console.log("\nAfter adding getSystemInfo to prototype:");
console.log("iPhone system info:", iPhone.getSystemInfo()); // Works on existing instance!
console.log("Samsung system info:", samsung.getSystemInfo()); // Works on all instances!

// 3.2 Prototype introspection and manipulation
console.log("\n3.2 Prototype Introspection");

console.log("SmartPhone prototype methods:", Object.getOwnPropertyNames(SmartPhone.prototype));
console.log("iPhone own properties:", Object.getOwnPropertyNames(iPhone));
console.log("iPhone inherited properties:", Object.getOwnPropertyNames(iPhone.__proto__));

// Check property existence different ways
console.log("'getSystemInfo' in iPhone:", 'getSystemInfo' in iPhone); // true (includes prototype)
console.log("iPhone.hasOwnProperty('getSystemInfo'):", iPhone.hasOwnProperty('getSystemInfo')); // false
console.log("iPhone.__proto__.hasOwnProperty('getSystemInfo'):", iPhone.__proto__.hasOwnProperty('getSystemInfo')); // true

// 3.3 Multiple inheritance using mixins
console.log("\n3.3 Multiple Inheritance with Mixins");

// Mixin objects (behaviors that can be mixed into other objects)
const Flyable = {
    fly() {
        return `${this.name} is flying at ${this.altitude || 0} feet`;
    },
    land() {
        this.altitude = 0;
        return `${this.name} has landed safely`;
    },
    setAltitude(alt) {
        this.altitude = alt;
        return `${this.name} now at ${alt} feet`;
    }
};

const Drivable = {
    drive() {
        return `${this.name} is driving at ${this.speed || 0} mph`;
    },
    brake() {
        this.speed = Math.max(0, (this.speed || 0) - 20);
        return `${this.name} slowing down to ${this.speed} mph`;
    },
    accelerate() {
        this.speed = (this.speed || 0) + 20;
        return `${this.name} accelerating to ${this.speed} mph`;
    }
};

const Submersible = {
    dive() {
        this.depth = (this.depth || 0) + 10;
        return `${this.name} diving to ${this.depth} feet deep`;
    },
    surface() {
        this.depth = Math.max(0, (this.depth || 0) - 10);
        return `${this.name} surfacing, now at ${this.depth} feet deep`;
    }
};

// Advanced mixin function
function createVehicleWithCapabilities(name, capabilities = []) {
    const vehicle = {
        name: name,
        capabilities: [],
        
        addCapability(capabilityName) {
            this.capabilities.push(capabilityName);
            return this;
        },
        
        listCapabilities() {
            return `${this.name} can: ${this.capabilities.join(', ')}`;
        }
    };
    
    // Mix in all provided capabilities
    capabilities.forEach(capability => {
        Object.assign(vehicle, capability);
        vehicle.addCapability(capability.constructor.name || 'Unknown');
    });
    
    return vehicle;
}

// Create vehicles with different capability combinations
let flyingCar = createVehicleWithCapabilities('AeroMobil', [Flyable, Drivable]);
flyingCar.addCapability('Transform');

let submarine = createVehicleWithCapabilities('SeaCar', [Drivable, Submersible]);

let superVehicle = createVehicleWithCapabilities('UltraVehicle', [Flyable, Drivable, Submersible]);

console.log("\nFlying car capabilities:");
console.log(flyingCar.accelerate());
console.log(flyingCar.setAltitude(5000));
console.log(flyingCar.fly());
console.log(flyingCar.listCapabilities());

console.log("\nSubmarine capabilities:");
console.log(submarine.drive());
console.log(submarine.dive());
console.log(submarine.listCapabilities());

// 3.4 Advanced prototype patterns and performance
// Factory pattern with prototype
function createOptimizedVehicle(type) {
    const prototypes = {
        car: {
            move() { return `${this.name} driving on road`; },
            fuel: 'gasoline'
        },
        plane: {
            move() { return `${this.name} flying through air`; },
            fuel: 'jet fuel'
        },
        boat: {
            move() { return `${this.name} sailing on water`; },
            fuel: 'diesel'
        }
    };
    
    return Object.create(prototypes[type] || prototypes.car);
}

let myCar = createOptimizedVehicle('car');
myCar.name = 'Honda Civic';

let myPlane = createOptimizedVehicle('plane');
myPlane.name = 'Boeing 747';

console.log("Optimized vehicles:");
console.log(myCar.move(), "- Fuel:", myCar.fuel);
console.log(myPlane.move(), "- Fuel:", myPlane.fuel);

// 3.5 Prototype security and immutability
console.log("\n3.5 Prototype Security and Immutability");

function SecureBank(name, balance) {
    this.name = name;
    this._balance = balance; // "private" property convention
}

// Secure method definition
Object.defineProperty(SecureBank.prototype, 'getBalance', {
    value: function() {
        return this._balance;
    },
    writable: false,     // Cannot be overwritten
    enumerable: true,    // Shows in property enumeration
    configurable: false  // Cannot be deleted or reconfigured
});

Object.defineProperty(SecureBank.prototype, 'deposit', {
    value: function(amount) {
        if (amount > 0) {
            this._balance += amount;
            return `Deposited $${amount}. New balance: $${this._balance}`;
        }
        return "Invalid deposit amount";
    },
    writable: false,
    enumerable: true,
    configurable: false
});

let myAccount = new SecureBank('John Doe', 1000);

console.log("Initial balance:", myAccount.getBalance());
console.log(myAccount.deposit(500));

// Try to tamper with the method (will fail)
try {
    myAccount.getBalance = function() { return 1000000; }; // Attempt to hack
    console.log("After tampering attempt:", myAccount.getBalance()); // Original method still works
} catch (error) {
    console.log("Tampering prevented:", error.message);
}

// Freeze prototype to prevent any modifications
const ImmutablePrototype = Object.freeze({
    calculate(x, y) {
        return x + y;
    },
    validate(input) {
        return typeof input === 'number' && !isNaN(input);
    }
});

function Calculator() {
    this.result = 0;
}

Calculator.prototype = ImmutablePrototype;

let calc = new Calculator();
console.log("\nImmutable calculator:", calc.calculate(5, 3));

// 3.6 Performance comparison: Instance methods vs Prototype methods(Methods on each instance is bad 
function MemoryIntensiveCar(make) {
    this.make = make;
    // Each instance gets its own copy of these methods
    this.start = function() { return `${this.make} starting`; };
    this.stop = function() { return `${this.make} stopping`; };
}

// GOOD PRACTICE: Methods on prototype
function MemoryEfficientCar(make) {
    this.make = make;
}

// Shared methods on prototype
MemoryEfficientCar.prototype.start = function() { return `${this.make} starting`; };
MemoryEfficientCar.prototype.stop = function() { return `${this.make} stopping`; };

// Create instances
let heavyCars = [];
let lightCars = [];

for (let i = 0; i < 1000; i++) {
    heavyCars.push(new MemoryIntensiveCar(`HeavyCar${i}`));
    lightCars.push(new MemoryEfficientCar(`LightCar${i}`));
}

console.log("Memory-intensive cars - each instance has own methods:");
console.log("First car start === Last car start:", heavyCars[0].start === heavyCars[999].start); // false

console.log("Memory-efficient cars - all instances share prototype methods:");
console.log("First car start === Last car start:", lightCars[0].start === lightCars[999].start); // true


/* Re
1
• Objects inherit from other objects using Object.create()
• Property lookup follows the prototype chain (__proto__)
• hasOwnProperty() checks if property belongs to object (not inherited)
• Properties can be added dynamically and inherited immediately
• Property shadowing: child properties override parent properties

2
• Constructor functions create objects with shared prototypes
• Use 'new' keyword to create instances from constructor functions
• Inheritance: Child.prototype = Object.create(Parent.prototype)
• Always fix constructor reference: Child.prototype.constructor = Child
• instanceof checks the entire prototype chain

3
• Prototypes are live objects - modifications affect all instances
• Use mixins for multiple inheritance patterns
• Object.defineProperty() for secure, controlled property definition
• Object.freeze() for immutable prototypes
• Always put methods on prototype for memory efficiency
• Use factory functions for complex object creation patterns

4
• Methods on prototype (shared) vs methods on instance (individual)
• Prototype lookups are slower than own properties
• Cache frequently accessed prototype properties
• Use Object.create(null) for dictionary objects (no prototype overhead)

5
• Prevent prototype pollution attacks
• Use Object.defineProperty() with writable:false for critical methods
• Consider Object.freeze() for immutable prototypes
• Validate inputs to prevent prototype chain manipulation
*/