var http = require('http');
var dateModule = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World is '+dateModule.myDateTime());
}).listen(process.env.PORT);