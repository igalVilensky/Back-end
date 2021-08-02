const os = require("os");

console.log("Operation system: ", os.platform());

console.log("Processor architecture: ", os.arch());

console.log("Processor information: ", os.cpus());

console.log("Free memory: ", os.freemem());

console.log("Total memory: ", os.totalmem());

console.log("Home directory: ", os.homedir());

console.log("System is on for ", os.uptime());
