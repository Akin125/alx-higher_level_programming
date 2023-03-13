#!/user/bin/node
const myArr = process.argv;
if (myArr[2] === undefined) {
    console.log('Missing number of occurrences');
} else {
    for (let i = 0; i < myArr[2]; i++) {
        console.log('C is fun');
    }
}
