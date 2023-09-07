const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello this is from server");
});

app.get("/about", (req, res) => {
  res.send("this is abut page");
});

app.listen(8000, () => {
  console.log("listening from the server");
});
