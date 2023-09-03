const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("hello this is my first server");
  } else if (req.url == "/about") {
    res.end("hello this is from about side");
  } else if (req.url == "/contact") {
    res.end("hello this is from contact side");
  } else {
    res.writeHead(404);
    res.end("page doest ot exit");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port 8000");
});
