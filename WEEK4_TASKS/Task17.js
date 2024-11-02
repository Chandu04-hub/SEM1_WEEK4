let fruits = ["Apple", "Banana", "Cherry"];

// Adding elements
fruits.push("Mango"); // Adds Mango to the end of the array
fruits.unshift("Orange"); // Adds Orange to the beginning of the array

// Removing elements
fruits.pop(); // Removes the last element (Mango)
fruits.shift(); // Removes the first element (Orange)

// Updating an element
fruits[1] = "Blueberry"; // Changes the second element (Banana) to Blueberry

console.log(fruits); // ["Apple", "Blueberry", "Cherry"]
