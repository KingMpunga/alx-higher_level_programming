#!/usr/bin/node

// Parse the first argument as an integer
const x = parseInt(process.argv[2]);

// Check if the parsed number is a valid integer
if (!isNaN(x) && Number.isInteger(x) && x > 0) {
  // Use a for loop to print "C is fun" x times
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
} else {
  // If the argument is missing or not a positive integer, print "Missing number of occurrences"
  console.log("Missing number of occurrences");
}

