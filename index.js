#!/usr/bin/env node
var basePath = process.cwd();
var http = require("http");
var fs = require("fs");
var mime = require("mime");
var path = require("path");
var port = process.env.PORT || 3000;
const NOT_FOUND_PAGE = fs.readFileSync(path.join(process.cwd(), 'client', '404', 'index.html'))

let server = http.createServer(function (req, res) {
  try {
    let cleaned = 'client/' + req.url.replace(/\/?(?:\?.*)?$/, "").replace(/^\//, "");
    var decoded = decodeURI(cleaned);
    var filename = path.join(process.cwd(), decoded);
    
    if (!filename.includes('.')) {
      filename += fs.existsSync(filename + '.html') ? '.html' : '/index.html'
    }
    var exists = fs.existsSync(filename);
    if (!exists) {
      throw new Error('not found')
    }

    fs.readFile(filename, "binary", function (err, file) {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write(err + "\n");
        res.end();
        return;
      }

      res.writeHead(200, { "Content-Type": mime.getType(filename) });
      res.write(file, "binary");
      res.end();
    });
  } catch (e) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(NOT_FOUND_PAGE)
    res.end();
  }
});

function startServer() {
  server.listen(port, () => {
    console.log(
      `
----------------------------------------------------------
Starting static file server
  ${basePath}
  Available on: http://localhost:${port}
  Quit: ctrl+c
`
    );
  });

  process.on('SIGINT', function () {
    console.log('  [!] Server stopped.');
    process.exit();
  });

  process.on('SIGTERM', function () {
    console.log('  [!] Server stopped.');
    process.exit();
  });

}

startServer();