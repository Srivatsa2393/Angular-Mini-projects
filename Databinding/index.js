const express = require('express');
//const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Data = require('./models/Data');

const app = express();

var data = [
    {ip: '172.17.73.19', name: 'My test vibguard'}
];

app.use(cors());

app.use(bodyParser.json());

app.get('/data', (req, res) => {
    res.send(data);
})

app.post('/data', (req, res) => {
    console.log(req.body);
    var vibguardData = req.body;

    var data = new Data(vibguardData);
    data.save((err, result) => {
        if(err){
            console.log('Saving data error');
        }else{
            res.sendStatus(200);
        }
    })
})

//connect to database
mongoose.connect('mongodb://test:test@ds245518.mlab.com:45518/databinding', (err) => {
    if(!err){
        console.log('Connected to database');
    }
})

//Port number 3000
app.listen(3000);