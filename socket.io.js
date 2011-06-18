// var http = require('http')
// var io   = require('socket.io')
// 
// var server = http.createServer(function(req, res) {
//   // server code here...
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('<h1>Hello world</h1>');
// })
// 
// var port = process.env.PORT || 3000;
// server.listen(port, function() {
//   console.log('server running on port ' + port)
// });

var http = require('http') 
var io   = require('socket.io')

var server = http.createServer(function(req, res) {
    // your normal server code
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello world</h1>')
    res.end('enter chat <a href="chat.html">here</a>');
});

var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('server running on port ' + port)
});

// socket.io, I choose you
var socket  = io.listen(server)
var clients = []

socket.on('connection', function(client) {
  // new client is here!
  client.on('message', function(msg) { 
    console.log('messga!', msg);
    
    client.broadcast({ message: {session_id: client.sessionId, message: msg }})
  })
  client.on('disconnect', function(){ 
    console.log("bye bye quiter!") 
  })
});

