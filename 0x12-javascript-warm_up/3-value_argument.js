#!/usr/bin/node
const valueArg = process.argv;
if (valueArg[2] === undefined) {
  console.log('No argument');
} else {
  console.log(valueArg[2]);
}