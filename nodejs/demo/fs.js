const fs = require("fs");
const path = require("path");

// CREATE DIRECTORY

// fs.mkdir(path.join(__dirname, "test"), (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log("Directory created");
// });

const filePath = path.join(__dirname, "test", "text.txt");
