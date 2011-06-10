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

var net = require('net')

var sockets = []

var s = net.Server(function(socket) {
  sockets.push( socket )
  
  socket.on('connect', function() {
    socket.write("Welcome to this simple server!\n")
  })
  
  socket.on('data', function(data) {
    for( var i=0; i < sockets.length; i++ ) {
      if(sockets[i] == socket) continue;
      sockets[i].write(data);
    }
  })
  
  socket.on('end', function() {
    console.log("We\'ve got a quitter");
    var i = sockets.indexOf( socket );
    sockets.splice(i, 1);
  })
})

var port = process.env.PORT || 3000;
s.listen(port, function() {
  console.log('server running on port ' + port)
});
