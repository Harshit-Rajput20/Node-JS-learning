const fs = require("fs");
const http = require("http");

const server = http.createServer();
fs.writeFile(
  "read.txt",
  "vgjhgjh  hello this is harshit rajput iam from bareily i love to lay guitar",
  "utf-8",
  (err) => {
    console.log("file write");
  }
);

server.on("request", (req, res) => {
  //   fs.readFile("read.txt", "utf-8", (err, data) => {
  //     res.end(data);
  //   });

  const rstream = fs.createReadStream("read.txt");

  //   rstream.on("data", (chunkdata) => {
  //     res.write(chunkdata);
  //   });

  //   rstream.on("end", () => {
  //     res.end();
  //   });

  rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");
