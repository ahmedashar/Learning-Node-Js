const fs = require('fs');

const input = process.argv;

if (input[2] == 'create') {
    fs.writeFileSync(input[3], input[4])
    console.log(`${input[3]} created`)
} else if (input[2] == 'delete') {
    fs.unlinkSync(input[3])
    console.log(`${input[3]} deleted`)
} else {
    console.log('invalid input')
}


// delete file 
// fs.unlinkSync('hello.txt')

// create new file  file name , file docs
// fs.writeFileSync('hello.txt', 'hello world')

// give array of (command line arguments) as output 
// console.log(process.argv)
