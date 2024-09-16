
const http = require('http');
const server = http.createServer((req, res) => {
    const responseBody = JSON.stringify({ location: "Mars" });


    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Length', Buffer.byteLength(responseBody));

    res.writeHead(200); 
    res.end(responseBody);
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
