const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter out even numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);

// Find the sum of the odd numbers
const sum = oddNumbers.reduce((accumulator, current) => accumulator + current, 0);

console.log("Odd Numbers:", oddNumbers); // [1, 3, 5, 7, 9]
console.log("Sum of Odd Numbers:", sum); // 25
