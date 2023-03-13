#!/usr/bin/node
const myArgv = process.argv;
const firstArgv = parseInt(myArgv[2]);
const myNum = Number.isNaN(firstArgv);
if (myNum === true) {
  console.log('Not a number');
} else {
  console.log('My number: ' + firstArgv);
}
