const express = require("express");
const app = express();
const path = require("path");

// const staticPath = path.join(__dirname, "/public");
app.set("view engine", "hbs");
// app.use(express.static(staticPath));

app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});
// app.get("/", (req, res) => {
//   res.send("hello this is from server");
// });

// app.get("/about", (req, res) => {
//   res.send("this is abut page");
// });

app.listen(8000, () => {
  console.log("listening from the server");
});
