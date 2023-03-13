#!/user/bin/node
const myArgv = process.argv;
const a = parseInt(myArgv[2]);
const b = parseInt(myArgv[3]);
function add (a, b) {
  return (a + b);
}
console.log(add(a, b));
