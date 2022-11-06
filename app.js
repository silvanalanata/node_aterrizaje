const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    
    // así es como hacemos el enrutamiento
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // envía los datos sobre la respuesta
            response.write(contents);  //  envía el cuerpo de respuesta
            response.end(); // ¡terminado!
        });
    }
    if(request.url === '/ninjas') {
        fs.readFile('ninjas/ninjas.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // envía los datos sobre la respuesta
            response.write(contents);  //  envía el cuerpo de respuesta
            response.end(); // ¡terminado!
        });
    }
    if(request.url === '/dojos/nuevo') {
        fs.readFile('dojos/nuevo/dojos.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // envía los datos sobre la respuesta
            response.write(contents);  //  envía el cuerpo de respuesta
            response.end(); // ¡terminado!
        });
    }
    // la petición no coincidió con nada:
    else {
        fs.readFile('error.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // envía los datos sobre la respuesta
            response.write(contents);  //  envía el cuerpo de respuesta
            response.end(); // ¡terminado!
        });
    }
});
// dile a tu servidor qué puerto ejecutar
server.listen(6789);
// imprime a una ventana terminal
console.log("Running in localhost at port 6789");

