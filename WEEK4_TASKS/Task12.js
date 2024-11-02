let globalVariable = "I am a global variable"; // Global scope

function myFunction() {
    let localVariable = "I am a local variable"; // Local scope
    console.log(globalVariable); // Accessible, outputs: I am a global variable
    console.log(localVariable);   // Accessible, outputs: I am a local variable
}

myFunction();

console.log(globalVariable); // Accessible, outputs: I am a global variable
console.log(localVariable);   // Not accessible, will throw a ReferenceError
