var path    = require("path");
var express = require('express');
var app = express();
var staticPath = path.join(__dirname+'/static');
console.log(staticPath);

app.use('/static',express.static(staticPath));

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/generate', function (req, res) {
    res.send('generate not implemented yet');
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!')
});

/*
// var sfxr = require('./sfxr');
var cache = {};
 http.createServer(function (request, response) {

 var filePath = '.' + request.url;
 if (filePath == './')
 filePath = './index.html';

 var DYNO = "./sfx.wav?";

 if (filePath.indexOf(DYNO) == 0) {
 var query = filePath.substring(DYNO.length);
 query = require("querystring").parse(query);
 var params = new sfxr.Params();
 for (var k in query)
 if (query.hasOwnProperty(k))
 params[k] = query[k];
 var sfx = sfxr.generate(params);
 response.writeHead(200, {
 'Content-Type': 'audio/wav',
 'Content-Length': sfx.wav.length
 });
 response.end(new Buffer(sfx.wav), 'binary');
 return;
 }

 var extname = path.extname(filePath);
 var contentType = 'text/html';
 switch (extname) {
 case '.js':
 contentType = 'text/javascript';
 break;
 case '.css':
 contentType = 'text/css';
 break;
 case '.png':
 contentType = 'image/png';
 break;
 }

 if (cache.hasOwnProperty(filePath)) {
 response.writeHead(200, { 'Content-Type': contentType });
 response.end(cache[filePath], 'utf-8');
 return;
 }

 path.exists(filePath, function(exists) {

 if (exists) {
 fs.readFile(filePath, function(error, content) {
 if (error) {
 response.writeHead(500);
 response.end('500 Server error');
 }
 else {
 cache[filePath] = content;
 response.writeHead(200, { 'Content-Type': contentType });
 response.end(content, 'utf-8');
 }
 });
 } else {
 response.writeHead(404);
 response.end('404 File not found');
 }
 });

 }).listen(port, function() {
 console.log("Listening on " + port);
 });
 */
