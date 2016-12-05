const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');


var publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User disconected from server');
  });

  socket.on('createMessage', (message) => {
    console.log(message);
  });

  socket.emit('newMessage', {
    from: 'Bruno',
    text: 'Olá from server'
  });

});

var port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('SERVER RUNNING ON PORT 3000 (http://localhost:3000)');
});
