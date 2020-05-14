const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('new  user connected succussfully');

    socket.on('message', (msg) => {
        console.log(msg);
        io.emit('new_message',  msg.toUpperCase());
        // socket.emit('new_message',  msg.toUpperCase());
    });

    socket.on('connect_room', (data) => {
        socket.join(data.room);
        io.to(data.room).emit('room_message', {info: 'Some data'})
    })
});


const PORT = 3000;


http.listen(PORT, () => {
    console.log(`Server is runing and up. PORT: ${PORT}`);
})