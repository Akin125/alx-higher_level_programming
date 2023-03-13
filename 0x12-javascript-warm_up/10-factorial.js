#!/usr/bin/node
const myArgv = process.argv;
const n = myArgv[2];
function factorial(n) {
    if (n === 0){
        return 1;
    }else {
        return n * factorial(n-1);
    }
}
if (n === undefined){
    console.log(1);
} else {
    console.log(factorial(n));
}


