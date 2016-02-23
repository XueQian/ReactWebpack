var express = require('express');
var app = express();

app.get('*.js', function(req, res) {
    res.sendFile(__dirname + req.originalUrl);
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 8080;
var server = app.listen(port, function() {
    var port = server.address().port;

    console.log('React listening on port: http://localhost:%s', port);
});
