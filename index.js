var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 5508;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('data', function(msg){
    console.log("data is fired");
    io.emit('data', msg);
  });
  socket.on('finance', function(msg){
    console.log("finance is fired");
    io.emit('finance', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
