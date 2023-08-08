// Create web server
const http = require('http');
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, {'Content-Type': 'text/html'});
    // Set a response
    res.write('<h1>Hello World!</h1>');
    res.end();
});
// Run the web server
server.listen(5000, () => console.log('Server running...'));