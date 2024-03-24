#!/usr/bin/node

// Parse the first argument as an integer
const num = parseInt(process.argv[2]);

// Check if the parsed number is a valid integer
if (!isNaN(num) && Number.isInteger(num)) {
  // If it's a valid integer, print "My number: <integer>"
  console.log(`My number: ${num}`);
} else {
  // If it's not a valid integer, print "Not a number"
  console.log("Not a number");
}

