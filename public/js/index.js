var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log(message);
});

socket.on('userConnected', function (message) {
  console.log(message);
});
