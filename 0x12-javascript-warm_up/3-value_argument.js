#!/user/bin/node
let valueArg = process.argv;
if (valueArg[2] === undefined) {
  console.log('No argument');
}else {
  console.log(valueArg[2]);
}