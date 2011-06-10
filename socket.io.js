var http = require('http')
var io   = require('socket.io')

var server = http.createServer(function(req, res) {
  // server code here...
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello world</h1>');
})

var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('server running on port ' + port)
});