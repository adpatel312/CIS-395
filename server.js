var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('CIS 395 Node.js application running via Microsoft Azure: Group Members are Ankur, Artur, Denis and Nazneen\n');
}).listen(port);
