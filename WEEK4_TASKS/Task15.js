class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, type) {
        super(name, type);
    }

    bark() {
        console.log(`${this.name} barks!`);
    }
}

const myDog = new Dog("Buddy", "Dog");
myDog.speak(); // Buddy makes a sound.
myDog.bark();  // Buddy barks!
