// const fs = require("fs");

// fs.writeFileSync("bio.txt", "this is new file");

// fs.appendFileSync("bio.txt", "hello world");

// console.log(fs.readFileSync("bio.txt").toString());

// fs.renameSync("bio.txt", "harshit.txt");
// fs.unlinkSync("harshit.txt");

// console.log("this is node js");

// const fs = require("fs");

// fs.writeFileSync("read.txt", "hello this is harshit");fs.writeFileSync("biotxt")

// console.log(fs.readFileSync("read.txt").toString());

// fs.renameSync("read.txt", "new.txt");

const os = require("os");

// console.log(os.arch());

console.log(os.freemem() / 1024 / 1024 / 1024);
console.log(os.totalmem() / 1024 / 1024 / 1024);

console.log(os.platform());
