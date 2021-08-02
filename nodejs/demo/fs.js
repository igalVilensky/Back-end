const fs = require("fs");
const path = require("path");

// CREATE DIRECTORY

// fs.mkdir(path.join(__dirname, "test"), (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log("Directory created");
// });

// CREATE FILE

// const filePath = path.join(__dirname, "test", "text.txt");

// fs.writeFile(filePath, "Hello nodejs", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("File created");

//   fs.appendFile(filePath, "\nHello nodellljs", (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("File created");
//   });
// });
const filePath = path.join(__dirname, "test", "text.txt");
fs.readFile(filePath, "utf-8", (err, content) => {
  if (err) {
    throw err;
  }
  console.log("Content: ", content);
  // * Content from buffer * //

  //   fs.readFile(filePath, (err, content) => {
  //     if (err) {
  //       throw err;
  //     }
  //   const data = Buffer.from(content);
  //   console.log("Content: ", data.toString());
});
