const express = require('express');
const mongoose = require('mongoose');

var config = {
    appRoot : __dirname
}

console.log(config.appRoot);

const app = express();

var port = process.env.PORT || 10010;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))