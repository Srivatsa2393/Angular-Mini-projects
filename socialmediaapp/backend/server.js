var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/User');

var app = express();

var posts = [
    {message: 'Hello'},
    {message: 'hi'}
];

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    res.send(posts);
})


app.post('/register', (req, res) => {
    //console.log(req.body);
    var userData = req.body;
    /* console.log(userData.email);
    res.sendStatus(200); */


    var user = new User(userData)

    user.save((err, result) => {
        if(err){
            console.log('saving user error');
        }else{
            res.sendStatus(200);
        }
    })
})

mongoose.connect('mongodb://test:test@ds111138.mlab.com:11138/pssocial', (err) => {
    if(!err) {
        console.log('Connected to mongo');
    }
})

app.listen(3000);