var http = require('http');
var express = require('express');
var app = express();
var home = require('./home');
var fs = require('fs');
// http.createServer(function(req, res) {
//     res.end('helloworld')
// }).listen('8000');


app.use('/dist', express.static('dist'));

app.use('/home', home);

app.get('/', function(req, res) {
    fs.readFile(__dirname + '/index.html', 'utf8', function(error, data) {
        try {
            res.send(data);
        } catch (e) {
            console.log(e);
        }
    })
});
// app.get('/', function(req, res) {
//     res.end('hellorld');
// });

app.listen('8090', function() {
    console.log('done');
});