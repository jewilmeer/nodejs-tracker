var http = require('http')
var io   = require('socket.io')

var server = http.createServer(function(req, res) {
  // server code here...
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello world</h1>');
})

server.listen(8888);