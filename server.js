var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    // res.end('Tomatedev');
    res.sendFile(__dirname +'/index.html');
});

io.on('connection', (socket) => {
    // console.log("a client conntected");
    //Listen
    socket.on('chat message', (msg) => {
        console.log('message :' +msg);
        // Reply
        io.emit('chat message', msg);
    });
});

http.listen(3000, function(){
    console.log('listen on port 3000');
});