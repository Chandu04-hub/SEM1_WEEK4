function calculate(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    } else if (operator === '%') {
        return num2 !== 0 ? num1 % num2 : "Cannot divide by zero";
    } else {
        return "Invalid operator";
    }
}

console.log(calculate(10, 5, '+'));  // 15
console.log(calculate(10, 5, '-'));  // 5
console.log(calculate(10, 5, '*'));  // 50
console.log(calculate(10, 5, '/'));  // 2
console.log(calculate(10, 5, '%'));  // 0
console.log(calculate(10, 0, '/'));  // "Cannot divide by zero"
console.log(calculate(10, 0, '%'));  // "Cannot divide by zero"
console.log(calculate(10, 5, '^'));  // "Invalid operator"
