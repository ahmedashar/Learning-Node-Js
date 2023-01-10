const fs = require('fs');
const path = require('path');

// join directory with next folder
const dirPath = path.join(__dirname, '04Files')

// for (i = 0; i < 5; i++) {
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`, `hello World ${i}`)
// }

// // read file name 
// fs.readdir(dirPath, (err, files) => {
//     console.log(files)
//     files.forEach((item) => { console.log(item) })
// })

// Crud operation with file system
// create               fileName                  fileContent
// fs.writeFileSync(`${dirPath}/old.txt`, 'hello, this is the file.');

// read                fileName     format     callback 
// fs.readFile(`${dirPath}/old.txt`, 'utf8', (err, item) => { console.log(item) })

//update               fileName                   Updated Content                 callback for error
// fs.appendFile(`${dirPath}/old.txt`, ' update file usind appendFile.', (err) => { err ? console.log(err) : console.log('updated') })

// rename           fileName               newFileName             callback for error
// fs.rename(`${dirPath}/old.txt`, `${dirPath}/new.txt`, (err) => { err ? console.log(err) : console.log('rename successfull') })

// delete             fileName
// fs.unlinkSync(`${dirPath}/new.txt`)