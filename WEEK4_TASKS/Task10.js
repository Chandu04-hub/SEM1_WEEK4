// Function declaration
function square(num) {
    return num * num;
}

// Function expression
const squareExpression = function(num) {
    return num * num;
};

// Arrow function
const squareArrow = num => num * num;

console.log(square(4));           // 16
console.log(squareExpression(4)); // 16
console.log(squareArrow(4));      // 16
