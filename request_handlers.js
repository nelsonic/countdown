var fs = require('fs');
var path = require('path');

function serve_index(req, res) {
  return fs.readFile(path.resolve('./index.html'), function (err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}

function serve_client(req, res) {
  return fs.readFile(path.resolve('./client.js'), function (err, data) {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.end(data);
  });
}

module.exports = {
  serve_index: serve_index,
  serve_client: serve_client
}
