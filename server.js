const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let filename = parsedUrl.pathname == '/documentation' ? 'documentation.html' : 'index.html';

  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not Found');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    }
  });
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});