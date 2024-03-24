#!/usr/bin/node

// Check if both arguments are passed to the script
if (process.argv[2] !== undefined && process.argv[3] !== undefined) {
  // If both arguments are passed, print the concatenated string
  console.log(`${process.argv[2]} is ${process.argv[3]}`);
} else {
  // If one or both arguments are missing, print "undefined is undefined" or "<argument> is undefined"
  console.log(`${process.argv[2] || 'undefined'} is ${process.argv[3] || 'undefined'}`);
}

