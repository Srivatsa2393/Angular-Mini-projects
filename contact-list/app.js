//importing modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//define port no
const port = 3000;

app.use('/api', route);

//testing server
app.get('/', (req, res) => {
    res.send('Server started');
})

//bind server with the port
app.listen(port, () => {
    console.log('Server started at port: '+port);
});