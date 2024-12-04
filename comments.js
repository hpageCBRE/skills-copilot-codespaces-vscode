// Create web server
// Create a web server that listens on port 3000 and serves the comments.json file. 
// If the file is not found, it should respond with a 404 status code. 
// If the file is found, it should respond with a 200 status code and the contents of the file. 
// If the file is not a valid JSON file, it should respond with a 500 status code.

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'comments.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end('Not found');
        } else {
            try {
                JSON.parse(data);
                res.statusCode = 200;
                res.end(data);
            } catch (e) {
                res.statusCode = 500;
                res.end('Internal server error');
            }
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});