var express = require('express');

var app = express();

var posts = [
    {message: 'Hello'},
    {message: 'hi'}
];

app.get('/posts', (req, res) => {
    res.send(posts);
})

app.listen(3000);