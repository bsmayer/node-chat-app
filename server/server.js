const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const {generateMessage} = require('./utils/message');


var publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('userConnected', generateMessage('Admin', 'Welcome to the chat app'));
  socket.broadcast.emit('userConnected', generateMessage('Admin', 'New user joined'));

  socket.on('disconnect', () => {
    console.log('User disconected from server');
  });

  socket.on('createMessage', (message) => {
    io.emit('newMessage', generateMessage(message.from, message.text));
  });
  
});

var port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('SERVER RUNNING ON PORT 3000 (http://localhost:3000)');
});
