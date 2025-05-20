// JavaScript Challenge Exercise

// Challenge 1: Return the sum of two numbers

function addition (num1, num2) {
    return num1 + num2;
}

let sum1 = addition(3, 5);
let sum2 = addition(-6, 9);
console.log(sum1); // 8
console.log(sum2); // 3


// Challenge 2: Convert Minutes into Seconds
function convert (minutes) {
    return minutes * 60;
}
let seconds1 = convert(5);
let seconds2 = convert(2);
console.log(seconds1); // 300
console.log(seconds2); // 180


// Challenge 3: Perimeter of a Rectangle
function perimeterOfRectangle (length, width) {
    return 2 * (length + width);
}
let perimeter1 = perimeterOfRectangle(6, 7); // 26
let perimeter2 = perimeterOfRectangle(20, 10); // 60
console.log(perimeter1);
console.log(perimeter2);

// Challenge 4: Check Negative
function isNegative (num) {
    return num < 0;
}
let checkNegative1 = isNegative(-23); // true
let checkNegative2 = isNegative(55); // false
console.log(checkNegative1);
console.log(checkNegative2);

// Challenge 5: Can I Drive
function qualifyToDrive (name, age) {
    if (age >= 18) {
        return `${name} is old enough to drive.`;
    } else {
        return `${name} is not old enough to drive yet.`;
    }
}
let qualify = qualifyToDrive("Jane", 22);
console.log(qualify);
let qualify1 = qualifyToDrive("June", 12);
console.log(qualify1);

// Challenge 6: Finding Largest Number
function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
let largest1 = findLargest(5, 9, 3); // 9
console.log(largest1);
let largest2 = findLargest(10, 10, 10); // 10
console.log(largest2);
let largest3 = findLargest(-1, -5, -3); // -1
console.log(largest3);



