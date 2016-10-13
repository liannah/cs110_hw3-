const http = require('http');

const httpServer = http.createServer(function (req, res) {

    if (req.url === '/hello') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World, my name is Liannna\n');
    } if (req.url === '/lianna') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("You got the best name\n");
    }
    if (req.url === '/liannahello') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Hello\n");
    }
    if (req.url === '/lianna/hovhannisyan') {
        res.writeHead(200, { 'Content-Type': 'text-plain' });
        res.end('We have got the same last name\n');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("No pass!");
    }
});

httpServer.listen(3001);// JavaScript source code
