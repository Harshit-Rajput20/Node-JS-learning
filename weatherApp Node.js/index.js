const http = require("http");
const fs = require("fs");
const requests = require("requests");

const homeFile = fs.readFileSync("index.html", "utf-8");

const replaceFile = (tempFile, orgFile) => {
  let temperature = tempFile
    .replace("{%tempval%}", orgFile.main.temp)
    .replace("{%tempmin%}", orgFile.main.temp_min)
    .replace("{%tempmax%}", orgFile.main.temp_max)
    .replace("{%location%}", orgFile.name)
    .replace("{%country%}", orgFile.sys.country);
  return temperature;
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=bareilly&appid=d9e0fc277daee1e1a9dad1c05377a8ec"
    )
      .on("data", (chunk) => {
        const objData = JSON.parse(chunk);
        const arrayData = [objData];
        const realData = arrayData
          .map((val) => replaceFile(homeFile, val))
          .join("");
        // console.log(realData);
        res.write(realData);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
      });
  }
});

server.listen(8000, "127.0.0.1");
