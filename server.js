var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  //res.end('File Reader\n');
  
  var readline = require('readline');

var high = readline.createInterface({
input: process.stdin,
output: process.stdout });

high.question("Enter high number: ", function(answer) {
console.log("You entered:" , answer);

high.close();
 });

}).listen(port);
