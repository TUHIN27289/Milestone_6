// 30-7 (optional) Inheritance, prototypical inheritance

class Animal{
    constructor(name, age, color){
        this.name = name;
        this.age = age;
        this.color = color;
    }
    makeSound(){
        console.log(`${this.name} makes a sound.`);
    }
    eat(){
        console.log(`${this.name} is eating.`);
    }
}

class dog extends Animal{
    constructor(name, age, color, breed){
        super(name, age, color);
        this.breed = breed;
    }
    basicInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Breed: ${this.breed}`);
    }

    bark(){
        console.log(`${this.name} is barking.`);
    }
}

const pp=new dog('puppy', 5, 'brown', 'Labrador');
pp.bark();
pp.basicInfo();


// 30-8 (optional) Encapsulation & this keyword
class User {
    #pin;

    setPin(pin) {
        this.#pin = pin;
    }

    getPin() {
        return this.#pin;
    }
}

const user = new User();
user.setPin(1234);
console.log(user.getPin()); // Output: 1234
// console.log(user.pin); can't access private field