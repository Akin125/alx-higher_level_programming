#!/usr/bin/node
const size = process.argv[2];
if (size === undefined) {
  console.log('Missing size');
} else {
  for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
      row += 'x   ';
    }
    console.log(row);
  }
}
