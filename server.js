var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function handler (req, res) { // can you make it simpler? ;-)
  console.log(req.method, ':', req.url); // rudimentary request logging
  return fs.readFile(path.resolve('./index.html'), function (err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}).listen(process.env.PORT); // start the server with the command: npm run dev
