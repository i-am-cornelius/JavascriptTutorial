class Person {
    constructor(firstName, lastName, career, gender, age){
        this.firstName = firstName
        this.lastName = lastName
        this.career = career
        this.gender = gender
        this.age = age
    };

    message(){
        return `My name is ${this.firstName} ${this.lastName} and i am a ${this.career}`
    };

};


let doctor = new Person('Joseph', 'Mamman', 'Surgeon', 'Male', 27);
console.log(doctor);
let intro = doctor.message();
console.log(intro);

class athlete extends Person{

    fitness(occupation){
        return `As a ${occupation} i must be fit all the time`;
    };
};

let footballer = new athlete('Cristiano', 'Ronaldo', 'footballer', 'Male', 37);
footballer.position = 'Winger';
footballer.club = 'Manchester United';
console.log(footballer);

intro = footballer.message();
console.log(intro);

let fit = footballer.fitness('footballer'.toUpperCase());
console.log(fit);

console.log(doctor.position); 

/*let message = 'What is your name';

const userName = prompt(message);

if (typeof userName === String) {
    alert(`Hi ${userName}, nice to meet you`);   
}else{
    alert('please enter a real name');
}*/




