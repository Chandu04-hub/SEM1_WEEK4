// String
let myString = "Hello, World!";
console.log("Type of myString:", typeof myString); // "string"

// Number
let myNumber = 42;
console.log("Type of myNumber:", typeof myNumber); // "number"

// Boolean
let myBoolean = true;
console.log("Type of myBoolean:", typeof myBoolean); // "boolean"

// Null
let myNull = null;
console.log("Type of myNull:", typeof myNull); // "object" (This is a known quirk in JavaScript, where typeof null returns "object")

// Undefined
let myUndefined;
console.log("Type of myUndefined:", typeof myUndefined); // "undefined"

// Symbol
let mySymbol = Symbol("unique");
console.log("Type of mySymbol:", typeof mySymbol); // "symbol"

// Object
let myObject = { name: "Alice", age: 30 };
console.log("Type of myObject:", typeof myObject); // "object"
