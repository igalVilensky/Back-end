const eventEmitter = require("events");

const emitter = new eventEmitter();

emitter.on("anything", (data) => {
  console.log("ON: anything", data);
});

emitter.emit("anything", { a: 1 });
emitter.emit("anything", { b: 2 });

setTimeout(() => {
  emitter.emit("anything", { c: 3 });
}, 1500);
