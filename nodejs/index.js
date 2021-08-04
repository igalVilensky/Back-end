// What is NodeJs?
// it's an asynchronous runtime open Source scripting language to write js outside the browser
// we used it to build backend services or APIs
// Why NodeJs?
// has the biggest open source library that allows you can add many cool features to your app
// Motivation examples:
// PayPal switch their Java application to Node and they found they needed less people to write the code, 33% less code and 40% less files and even they had double request served per sec.
// process object
//console.log(process);
//console.log(process.argv);
//console.log(`Hey ${process.argv[2]}`);
//
// process.argv.forEach((item, i) => {
//   console.log(`${i} : ${item}`);
// });

// this is the real deal
//const args = process.argv.slice(2);
//console.log(args);
// fs (File System) built-in module in NodeJs
/* const fs = require("fs"); */

// read file
/* fs.readFile("./longText.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(chalk.blue(data));
}); */
// write file
/* fs.writeFile("./text/new.txt", "This is file created in NodeJs", (err) => {
  if (err) throw err;
  console.log("Done ✅ ");
}); */

// let stars = args[0];
// let header = args[1];
// const print = require("./stars");
// print(stars, header);
/* function sum(numArray) {
  return numArray.reduce((sum, n) => sum + n, 0);
}
function avg(numArray) {
  return sum(numArray) / numArray.length;
}

function parsNum(arg) {
  const number = parseFloat(arg);
  if (isNaN(number)) {
    console.log(`Sorry, ${arg} is not a number, Please try again.`);
    process.exit();
  }
  return number;
}
const args = process.argv.slice(2);
const [operation, ...rest] = args;
const numbers = rest.map(parsNum); */
// sum 2 4 f
// avg 33 5 3 2 55

/* function med(numArray) {
  switch (operation) {
    case "sum":
      console.log(sum(numArray));
      break;
    case "avg":
      console.log(avg(numArray));
      break;
    default:
      console.log(
        chalk.green("I can not do this task yet, please write sum or avg")
      );
  }
} */

/* const chalk = require("chalk");
const text = require("./data");

console.log(chalk.red("Hello Igal"));

console.log(chalk.blue(text));

console.log(__dirname); */

const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
      if (err) {
        throw err;
      }
      res.writeHead(200, {
        "Content-type": "text/html",
      });
      res.end(data);
    });
  }
});

server.listen(3000, () => {
  console.log("Server has been started...");
});
