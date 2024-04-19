//Question 1. Declare a variable named greeting with the string value "Hello, World!" and print it

let greeting:string = "Hello World";
console.log(greeting);

//Question 2. Define two variables with integer values and calculate their sum, difference, product, and quotient.

let counter1 = 10;
let counter2 = 5;

let sum = counter1 + counter2;
let difference = counter1 - counter2;
let product = counter1 * counter2;
let quotient = counter1 / counter2;

console.log(sum, difference, product, quotient); 

//Question 3. Swap the values of two variables without using a third variable.

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b);

//Question 4. This applies to TypeScript. Create a string variable and try changing its type.

let message: string = "Hello";
// message = 10; // Error: Type 'counterber' is not assignable to type 'string'

//Question 5.  Use the modulus operator to find the remainder of two numbers. 
let num3 = 10;
let num4 = 3;
let remainder = num3 % num4;
console.log(remainder); 

//Question 6. Increment a variable's value by 1 using two different methods.

let counter = 0;
counter++; 
console.log(counter);

let counterSecond = 10;
counterSecond += 1; 
console.log(counterSecond); 

//Question 7. Given three boolean variables, write expressions for AND, OR, and NOT gates.

let d = true;
let e = false;
let f = true;

let AND_gate = d && e && f;
let OR_gate = d || e || f;
let NOT_gate = !d;

console.log(AND_gate); 
console.log(OR_gate);  
console.log(NOT_gate); 

//Question 8. Show examples of using compound assignment operators.

let num = 10;

// Using the += operator to add a value to num
num += 5; 
console.log(num); 

// Using the -= operator to subtract a value from num
num -= 3; 
console.log(num); 

// Using the *= operator to multiply num by a value
num *= 2; 
console.log(num); 

// Using the /= operator to divide num by a value
num /= 4;
console.log(num);

//Question 9. Write a program to check if a number is even or odd.

let checkNum = 10;
if (checkNum % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//Question 10. Check if a person is eligible to vote.

let age = 20;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

//Question 11. Assign a grade based on a numerical score.

let score = 85;
let grade: string;
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log(grade);

//Question 12. Check if a given year is a leap year.

let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}

//Question 13. Write a program that converts temperature from Fahrenheit to Celsius.

let fahrenheit = 32;
let celsius = (fahrenheit - 32) * 5 / 9;
console.log(celsius);

//Question 14. Check if a number is positive, negative, or zero.

let numCheck = -5;
if (numCheck > 0) {
    console.log("Positive");
} else if (numCheck < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//Question 15.  Write a program that prints the multiplication table of a given number up to 10.

let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}