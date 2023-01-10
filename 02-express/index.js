// express is a framework of node.js
const express = require('express');
const app = express();

app.get('', (req, res) => {
    // req.query --> get data from URL params 
    console.log(req.query.name)
    res.send('Hello, This is Root. ' + `res by req through URL params: ${req.query.name}`);
})
app.get('/about', (req, res) => {
    res.send('Hello, This is About')
})

app.listen(6002);