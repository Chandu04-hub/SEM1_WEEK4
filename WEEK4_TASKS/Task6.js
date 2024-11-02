function ageGroup(age) {
    if (age >= 0 && age <= 12) {
        console.log("Child");
    } else if (age >= 13 && age <= 19) {
        console.log("Teen");
    } else if (age >= 20 && age <= 64) {
        console.log("Adult");
    } else if (age >= 65) {
        console.log("Senior");
    } else {
        console.log("Invalid age");
    }
}

ageGroup(10);  // Child
ageGroup(16);  // Teen
ageGroup(30);  // Adult
ageGroup(70);  // Senior
ageGroup(-5);  // Invalid age
