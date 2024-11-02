const person = {
    name: "Alice",
    age: 30,
    city: "New York",
    introduce: function() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I live in ${this.city}.`);
    }
};

person.introduce(); 