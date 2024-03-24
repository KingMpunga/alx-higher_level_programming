#!/usr/bin/node

// Define a function factorial to compute the factorial recursively
function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: compute factorial by multiplying n with factorial of (n - 1)
  return n * factorial(n - 1);
}

// Parse the first argument as an integer
const num = parseInt(process.argv[2]);

// Check if the parsed number is a valid integer
if (!isNaN(num)) {
  // Compute the factorial using the factorial function and print the result
  console.log(factorial(num));
} else {
  // If the argument is not a valid integer, print 1
  console.log(1);
}

