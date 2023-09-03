const fs = require("fs");

const biodata = {
  name: "harshit",
  age: 21,
  rollno: 21,
};

const jsonData = JSON.stringify(biodata);
// console.log(jsonData);

fs.writeFileSync("read.json", jsonData);

const fileData = fs.readFileSync("read.txt").toString();

console.log(` JSON data: ${fileData}`);

const objData = JSON.parse(fileData);

console.log(objData);
