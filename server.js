const http = require('http');
const server = http.createServer((req, res) => {
    // Log every request
    console.log(`Incoming request: ${req.method} ${req.url}`);
   if (req.url === '/') {
        res.end("Welcome to Home Page");
    } else if (req.url === '/about') {
        res.end("This is About Page");
    } else if (req.url === '/contact') {
        res.end("This is Contact Page");
    } else {
        res.end("404 Page Not Found");
    }
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
