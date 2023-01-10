const http = require('http')
// import data from another file
const data = require('./data')

// create a basic server
http.createServer((req, resp) => {
    resp.write('Successfull')
    resp.end();
}).listen(4500)

console.log('hell', data)