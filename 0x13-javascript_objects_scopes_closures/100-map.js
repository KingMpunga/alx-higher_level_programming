#!/usr/bin/node

// Importing the list array from the file 100-data.js
const { list } = require('./100-data');

// Creating a new array using map, where each element is the value of the initial list multiplied by its index
const newList = list.map((value, index) => value * index);

// Printing both the initial list and the new list
console.log(list);
console.log(newList);

