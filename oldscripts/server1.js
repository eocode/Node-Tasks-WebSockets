const http = require('http');

function responderPeticion(request,response){
    response.end('Hola Mundo')
}

let server1= http.createServer(responderPeticion);

server1.listen(4000);