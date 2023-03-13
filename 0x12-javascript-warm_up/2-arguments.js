#!/usr/bin/node
const count = process.agrv.lenght;
console.log(count === 2 ? 'No argument': count === 3 ? 'Argument found' : 'Arguments found');
