#!/usr/bin/node

// Parse the first argument as an integer
const size = parseInt(process.argv[2]);

// Check if the parsed number is a valid positive integer
if (!isNaN(size) && Number.isInteger(size) && size > 0) {
  // Use a nested loop to print the square
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      row += "X";
    }
    console.log(row);
  }
} else {
  // If the argument is missing or not a positive integer, print "Missing size"
  console.log("Missing size");
}

