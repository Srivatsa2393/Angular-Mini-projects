var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello Srivatsa');
})

app.listen(3000);