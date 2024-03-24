#!/usr/bin/node

// Define the function add with prototype function add(a, b)
function add(a, b) {
  return parseInt(a) + parseInt(b);
}

// Parse the first and second arguments as integers
const num1 = process.argv[2];
const num2 = process.argv[3];

// Check if both arguments are passed and are valid integers
if (num1 !== undefined && num2 !== undefined) {
  // Call the add function with the parsed integers and print the result
  console.log(add(num1, num2));
} else {
  // If one or both arguments are missing, print NaN
  console.log("NaN");
}

