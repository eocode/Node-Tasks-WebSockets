const io = require('socket.io-client');

let host = 'http://localhost:4000';

let socket = io.connect(host, {
    reconnect: true
});

socket.on('connect',function(){
    console.log("\nSocket connected from NodeJS\n");
})

module.exports = socket