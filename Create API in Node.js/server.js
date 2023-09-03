const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("this is from server");
  } else if (req.url == "/api") {
    fs.readFile("API.json", "utf-8", (err, data) => {
      console.log(data);
      res.end(data);
    });
  }
});

server.listen(7000, "127.0.0.1");
