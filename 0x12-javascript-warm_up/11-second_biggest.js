#!/usr/bin/node

// Parse command line arguments and convert them to integers
const numbers = process.argv.slice(2).map(Number);

// Sort the numbers in descending order
numbers.sort((a, b) => b - a);

// If there are less than 2 numbers provided, or no arguments at all, print 0
if (numbers.length < 2) {
  console.log(0);
} else {
  // Print the second largest number
  console.log(numbers[1]);
}

