const eventEmitter = require("events");
const event = new eventEmitter();

event.on("sayMyName", () => {
  console.log("your name is vinod");
});

event.emit("sayMyName");
